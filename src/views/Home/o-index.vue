<template>
  <div>
    <!-- 流程中心初始化完成并且拿到数据才能正常进行 -->
    <el-container v-if="(initFlag || isReadonly) && this.allAttributetable">
      <el-aside width="200px">
        <AttributesMenu
          @handleSelect="selectMenuItem"
          ref="attributesMenu"
          :isShowLast="isShowLast"
          :isShowNext="isShowNext"
          @isShow="isShow"
        ></AttributesMenu>
      </el-aside>
      <el-main>
        <AttributesTable
          ref="attributes-table"
          :allAttributetable="allAttributetable"
          :attributesId="attributesId"
          :templateCode="templateCode"
        ></AttributesTable>
        <ReviewHistory
          ref="reviewHistory"
          :isShowTitle="true"
          v-if="$route.query.flag === 'workbench' && initFlag"
          :menuId="$route.query.menuId"
          :appNo="initializedApprove.appNo"
        ></ReviewHistory>
        <div class="fun-btn">
          <el-button type="primary" @click="last" v-if="isShowLast">上一步</el-button>
          <el-button type="primary" @click="next" v-if="isShowNext">下一步</el-button>

          <span v-if="isReadonly">
            <el-button type="primary" @click="handleMaintain" v-if="isShowLast">维护</el-button>
          </span>
          <span v-else>
            <el-button type="primary" @click="submitToInterface('save')">保存</el-button>
            <el-button type="primary" @click="openNextCheckerDialog('submit')">提交</el-button>
            <el-button type="primary" @click="isReadonly = true" v-if="isFromWorkbench">取消</el-button>
          </span>

          <ApproveButtons
            v-if="isFromWorkbench"
            :operationFlag="operationFlag"
            :isFromProductPage="isFromProductPage"
            @modifyBtnClick="modifyBtnClick"
          ></ApproveButtons>

          <el-button type="primary" @click="backToFromPage">返回</el-button>
        </div>
      </el-main>
    </el-container>

    <!-- 选择审批流程对话框 -->
    <approval-progress
      ref="approvalProgress"
      @confirmButton="chooseApproval"
      :approvalProgressVisible="approvalProgressVisible"
    ></approval-progress>

    <!-- 选择下一审核人组件 -->
    <next-checker
      :nextNodes="nextNodes"
      :nextCheckerDialogVisible="nextCheckerDialogVisible"
      :showNextUserFlag="showNextUserFlag"
      :activeButton="activeButton"
      @confirm="modifyDialogCommit"
      @cancel="cancel"
    ></next-checker>
  </div>
</template>

<script>
'use strict'
import {
  prodTplAttrQuery,
  prodTplAttrApplyQuery,
  prodtplApply,
  agreeAddProdInfo,
  prodInfoDoTask
} from './viewApi'
import AttributesMenu from './components/attributesMenu'
import AttributesTable from './components/attributesTable'
import { deleteChildrenParent } from '@/utils/productTemplate'
import ApprovalProgress from '../editDetail/components/approvalProgress'
import ApproveButtons from './components/approveButtons'
import NextChecker from './components/nextChecker'
import Approve from './mixins/Approve'
export default {
  provide() {
    return {
      isFromWorkbench: this.isFromWorkbench,
      // 全局灰显 isReadonly为true的时候是详情，封住所有输入框
      globalDisabled: this.isReadonly
    }
  },
  mixins: [Approve],
  components: {
    AttributesMenu,
    AttributesTable,
    ApprovalProgress,
    ApproveButtons,
    NextChecker
  },
  data() {
    return {
      attributesId: '',
      allAttributetable: null,
      idList: [],
      isShowLast: false,
      isShowNext: true,
      templateCode: '',
      isReadonly: false,
      // 和下一审核人组件配合
      activeButton: ''
    }
  },
  computed: {
    isFrom() {
      return this.$route.query.flag
    },
    // 控制用哪一套接口，true为申请接口，false为正式接口
    isFromWorkbench() {
      // 从工作台跳转过来用申请表查询
      return this.isFrom === 'workbench'
    },
    isFromProductPage() {
      return this.isFrom === 'edit' && this.isFrom === 'add'
    },
    isAdd() {
      return this.isFrom === 'add'
    }
  },
  created() {
    const { templateCode, choosedApprovalProgress } = this.$route.query
    if (this.isFrom === 'readonly') {
      this.isReadonly = true
    }

    this.templateCode = templateCode
    this.choosedApprovalProgress = choosedApprovalProgress

    // 用 审批流程 拿 权限中心的数据（存在Approve里）
    if (!this.isReadonly) {
      console.log(choosedApprovalProgress)
      if (choosedApprovalProgress) {
        this.getInitAction(choosedApprovalProgress)
      } else {
        this.approvalProgressVisible = true
      }
    }

    // 2：请求对应接口
    const getAllAttributetable = this.isFromWorkbench
      ? prodTplAttrApplyQuery
      : prodTplAttrQuery

    getAllAttributetable({ templateCode }).then(res => {
      if (res.success) {
        this.allAttributetable = res.data.private
      }
    })
  },
  methods: {
    refreshHistory() {
      this.$nextTick(() => {
        this.$refs['reviewHistory'].getHistoryList()
      })
    },
    modifyBtnClick(activeButton) {
      this.activeButton = activeButton
      this.nextCheckerDialogVisible = true
      if (activeButton === 'agree') {
        // 获取下一审核人，后面用来给nextNodesConfig赋值
        this.showNextUserFlag = true
      } else {
        //撤回中止删除退回不显示下一审核人，nextNodesConfig是空的
        this.showNextUserFlag = false
      }
    },
    //选择审核人之后点击确定候执行的操作
    modifyDialogCommit({ opinionArea, nextNodesConfig }) {
      //点击的是提交按钮，调孟然的接口
      if (this.activeButton === 'submit') {
        this.submitToInterface('submit')
      } else {
        const data = {
          applyInfo: this.createdApplyInfo(
            this.activeButton,
            opinionArea,
            nextNodesConfig
          )
        }
        //最后节点并且是点击同意时，调孟然入库接口，否则调邓洁维护接口
        if (
          this.initializedApprove.lastNodeFlag === '1' &&
          this.activeButton === 'agree'
        ) {
          // 报文和邓洁的报文是一样的，注意operationType的是agree
          agreeAddProdInfo(data).then(async res => {
            if (res.success) {
              this.nextCheckerDialogVisible = false
              this.$message.success(this.$t('prodAdd.operateSuccess'))
              // 跳转回工作台首页
              this.$router.push('/auth/workbench')
            }
          })
        } else {
          //调邓洁的接口
          prodInfoDoTask(data).then(res => {
            if (res.success) {
              this.nextCheckerDialogVisible = false
              this.$message.success(this.$t('prodAdd.operateSuccess'))
              if (this.activeButton === 'withdraw') {
                this.handelWithdraw()
              } else {
                this.$router.push('/auth/workbench')
              }
            }
          })
        }
      }
    },
    async handelWithdraw() {
      this.refreshHistory()
      let { modelId, procInstId, taskId } = await this.getQueryApplyList()
      if (modelId && procInstId && taskId) {
        await this.getInitAction(modelId, procInstId, taskId)
      }
      //跟工作台首页进行信息传递 设置为true 在首页监听它的变化
      this.$store.dispatch('auth/stage/setIsWithDraw', true)
    },
    handleMaintain() {
      // 在途才能维护，工作台本身就是在途
      if (this.isFromWorkbench) {
        this.isReadonly = false
      } else {
        // 判断是否在途
        this.getIsApplyTask(this.templateCode).then(vaild => {
          if (vaild) {
            //工作台跳转点击维护,不弹选择窗口，维护跳转要弹，新增的时候不会触发edit方法
            this.approvalProgressVisible = !this.isFromWorkbench
            // 组件取消灰显
            this.isReadonly = false
          }
        })
      }
    },
    selectMenuItem(val, idList) {
      this.attributesId = val
      this.idList = idList
    },
    openNextCheckerDialog(activeButton) {
      this.activeButton = activeButton
      this.nextCheckerDialogVisible = true
    },

    submitToInterface(type) {
      if (!this.validateCurPage()) {
        // 报错信息
        return false
      }
      const { templateCode, templateName, kindId } = this.$route.query
      deleteChildrenParent(this.allAttributetable)

      let data = {
        attrs: this.allAttributetable,
        applyInfo: this.createdApplyInfo(type),
        prodTpl: {
          templateCode,
          templateName,
          kindId
        }
      }
      console.log('发送', data)

      prodtplApply(data).then(res => {
        if (res.success) {
          // this.nextCheckerDialogVisible = false
          this.$message.success('操作成功')
          this.backToFromPage()
        }
      })
    },
    backToFromPage() {
      this.$router.push({
        path: '/prod/productTemplateAdd'
      })
    },
    validateCurPage() {
      // 如果是详情页，无需校验
      if (this.isReadonly) {
        return true
      }
      if (this.$refs['attributes-table'].validate()) {
        console.log('校验成功')
        return true
      } else {
        this.$message.error('校验失败, 请正确填写属性信息')
        return false
      }
    },
    next() {
      if (this.validateCurPage()) {
        for (let i = 0; i < this.idList.length; i++) {
          if (this.attributesId === this.idList[i]) {
            if (i >= this.idList.length - 2) {
              this.isShowNext = false
            }
            if (i < this.idList.length - 1) {
              this.isShowLast = true
              this.attributesId = this.idList[i + 1]
              this.$refs['attributesMenu'].openMenuByIndex(this.attributesId)
            }
            break
          }
        }
      }
    },
    last() {
      if (this.validateCurPage()) {
        for (let i = 0; i < this.idList.length; i++) {
          if (this.attributesId === this.idList[i]) {
            if (i === 1) {
              this.isShowLast = false
            } else {
              this.isShowNext = true
            }
            if (i > 0) {
              this.attributesId = this.idList[i - 1]
              this.$refs['attributesMenu'].openMenuByIndex(this.attributesId)
            }
            break
          }
        }
      }
    },

    isShow(isShowLast, isShowNext) {
      this.isShowLast = isShowLast
      this.isShowNext = isShowNext
    }
  }
}
</script>
<style scoped>
.fun-btn {
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  background: #ffffff;
}

.el-aside {
  background-color: #fff;
}

.el-aside,
.el-main {
  height: 500px;
}

.el-aside {
  overflow-x: hidden;
}
</style>
