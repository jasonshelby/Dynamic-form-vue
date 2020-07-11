<template>
  <div style="padding: 20px;" class="prod">
    <!-- 搜索区域 -->
    <div style="margin-bottom: 20px;">
      <el-form ref="searchForm" :model="searchForm" label-width="120px">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="产品模板代码" prop="prodTemplateCode">
              <el-input
                v-model="searchForm.prodTemplateCode"
                placeholder="请输入产品模板代码"
                style="width:80%"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="产品模板名称" prop="prodTemplateName">
              <el-input
                v-model="searchForm.prodTemplateName"
                placeholder="请输入产品模板名称"
                style="width:80%"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="产品分类" prop="prodTypeCode">
              <el-select
                v-model="searchForm.prodTypeCode"
                filterable
                clearable
                placeholder="请选择产品分类"
                ref="base"
                style="width:80%"
              >
                <el-option
                  v-for="item in prodTypeCode"
                  :key="item.kindId"
                  :label="item.kindName"
                  :value="item.kindId"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="引用产品模板代码" prop="referenceTemplateCode">
              <el-input
                v-model="searchForm.referenceTemplateCode"
                placeholder="请输入引用产品模板代码"
                style="width:80%"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="text-align: center;">
          <el-button
            type="primary"
            style="margin-right: 6px;"
            v-preventClick="3000"
            @click="submitForm()"
            >{{ $t('prodAdd.searchBtn') }}</el-button
          >
          <el-button
            type="primary"
            style="margin-right: 6px;"
            v-preventClick="3000"
            @click="resetForm('searchForm')"
            >{{ $t('prodAdd.resetBtn') }}</el-button
          >
        </el-row>
      </el-form>
    </div>
    <!-- 新增产品模板按钮 -->
    <div v-if="maintain === '0'">
      <el-card style="text-align: center;margin: 10px">
        <h4>{{ $t('prodAdd.noPowerAdd') }}</h4>
      </el-card>
    </div>
    <div v-else>
      <el-button @click="chooseProdTemplate" type="primary"
        >新增产品模板</el-button
      >
    </div>
    <!-- 产品模板列表 -->
    <div v-if="select === '0'">
      <el-card style="text-align: center;margin: 10px">
        <h4>{{ $t('prodAdd.noPowerView') }}</h4>
      </el-card>
    </div>
    <div v-else>
      <el-table
        :data="tableData"
        style="width: 100%; margin-top: 20px"
        v-loading="loading"
      >
        <el-table-column
          prop="templateCode"
          label="产品模板代码"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="templateName"
          label="产品模板名称"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="kindName"
          label="产品分类名称"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="referenceTemplateCode"
          label="引用产品模板代码"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="branchCode"
          label="产品模板所属机构代码"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column label="标准模板标识">
          <template slot-scope="scope">
            {{ scope.row.standardFlag === '1' ? '是' : '否' }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="toDetail(scope.row)"
              >详情</el-button
            >
            <el-button
              @click="toEdit(scope.row)"
              type="text"
              size="small"
              v-if="scope.row.maintainFlag"
              >修改</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      :page="page"
      @getProdList="getProdList"
      @submitForm="submitForm"
      @valueChange="valueChange"
    ></pagination>
    <!--弹出对话框-->
    <dialog-com
      ref="dialogRef"
      :dialogQuery="dialogQuery"
      @commitProdTemplate="commitProdTemplate"
      :prodTypeCode="prodTypeCode"
    ></dialog-com>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getProdTempList, getProdTypeCode } from '../viewApi'
export default {
  name: 'productTemplateAdd',
  components: {
    Pagination,
    DialogCom
  },
  computed: {
    ...mapState({
      app: state => state.app,
      menu: state => state.menu,
      user: state => state.user
    })
  },
  created() {
    //select和maintain类型是string '1'有权限 '0'无权限
    this.select = this.menu.menuPermission['/prod/info'].selectScope
    this.maintain = this.menu.menuPermission['/prod/info'].maintainScope
    this.getProdList()

    this.getProdTypeCodeList()
  },
  data() {
    return {
      searchForm: {
        prodTemplateCode: '',
        prodTemplateName: '',
        prodTypeCode: '',
        referenceTemplateCode: ''
      },
      prodTypeCode: [],
      tableData: [],
      select: '0',
      maintain: '0',
      templateName: '',
      templateCode: '',
      page: {
        pageSize: 10,
        // 点击查询按钮后的每页数量
        searchPageSize: 10,
        // 点击查询按钮之后的当前页
        searchCurrentPage: 1,
        // 是否点击了查询按钮
        isSearch: false,
        currentPage: 1,
        total: 0
      },
      dialogQuery: {
        // 审批流程下拉框的可选项
        approvalProgressOptions: [],
        // 已选择的审批流程
        choosedApprovalProgress: '',
        prodTemplateDialog: false,
        choosedProdTemplate: '',
        //选择产品模板的下拉选项
        prodTemplateOptions: [],
        isClickEdit: true, //点击新增显示选择产品模板 点击维护不显示
        choosedProdType: '',
        prodTypeVisible: false
      },
      loading: true
    }
  },
  methods: {
    // 重置查询区域
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    submitForm() {
      let ifSearch = this.$validator.specialCharacter(
        this.searchForm.templateCode,
        '产品模板代码只能输入中文，英文和数字'
      )
      let ifCanSearch = this.$validator.specialCharacter(
        this.searchForm.prodTemplateName,
        '产品模名称只能输入中文，英文和数字'
      )
      let ifIsCanSearch = this.$validator.specialCharacter(
        this.searchForm.referenceTemplateCode,
        '引用产品模板代码只能输入中文，英文和数字'
      )
      this.page.isSearch = true
      let reqData = {
        templateCode:
          this.searchForm.prodTemplateCode.length > 0
            ? this.searchForm.prodTemplateCode
            : '',
        templateName:
          this.searchForm.prodTemplateName.length > 0
            ? this.searchForm.prodTemplateName
            : '',
        referenceTemplateCode:
          this.searchForm.referenceTemplateCode.length > 0
            ? this.searchForm.referenceTemplateCode
            : ''
      }
      if (this.searchForm.prodTypeCode.length > 0) {
        reqData.kindId = this.searchForm.prodTypeCode
      }
      getProdTempList({
        //current: { currentMenuId: 'M405002' },
        current: {
          currentMenuId: this.menu.currentMenuId,
          locale: this.app.language
        },
        pageNum: this.page.searchCurrentPage,
        pageSize: this.page.searchPageSize,
        reqData: reqData
      }).then(res => {
        if (ifSearch && ifCanSearch && ifIsCanSearch) {
          this.loading = true
          if (res.success) {
            this.tableData = res.data.private.prodTemplateList
            this.page.total = res.data.private.totalNum
          }
          this.loading = false
        }
      })
    },
    toDetail(val) {
      this.$router.push({
        path: '/prod/productTemplate',
        query: {
          flag: 'readonly',
          templateCode: val.templateCode,
          menuId: this.menu.currentMenuId,
          templateName: val.templateName
        }
      })
    },
    getProdList() {
      getProdTempList({
        //current: { currentMenuId: 'M405002' },
        current: {
          currentMenuId: this.menu.currentMenuId,
          locale: this.app.language
        },
        pageNum: this.page.currentPage,
        pageSize: this.page.pageSize,
        reqData: {}
      }).then(res => {
        if (res.success) {
          this.tableData = res.data.private.prodTemplateList
          this.page.total = res.data.private.totalNum
        }
        this.loading = false
      })
      this.loading = true
    },
    getProdTypeCodeList() {
      getProdTypeCode().then(res => {
        if (res.success) {
          this.prodTypeCode = JSON.parse(res.data.private.prodKindList)
        }
      })
    },
    chooseProdTemplate() {
      this.dialogQuery.prodTypeVisible = true
      //选择产品模板dialog
      this.dialogQuery.prodTemplateDialog = true
      this.dialogQuery.isClickEdit = true
      // 点击创建产品按钮，加载审核流程列表
      this.$refs['dialogRef'].getApplyTaskList()
    },
    valueChange(flag, val) {
      if (flag === '"searchCurrentPage"') {
        this.page.searchCurrentPage = val
      } else if (flag === '"currentPage"') {
        this.page.currentPage = val
      } else if (flag === '"searchPageSize"') {
        this.page.searchPageSize = val
      } else if (flag === '"pageSize"') {
        this.page.pageSize = val
      }
    },
    commitProdTemplate() {
      if (
        this.dialogQuery.prodTypeVisible &&
        this.dialogQuery.choosedProdType === ''
      ) {
        this.$message.error('请选择产品分类')
        return
      } else if (
        this.dialogQuery.isClickEdit &&
        this.dialogQuery.choosedProdTemplate === ''
      ) {
        this.$message.error(this.$t('prodAdd.chooseProdTemplate'))
        return
      } else if (this.dialogQuery.choosedApprovalProgress === '') {
        this.$message.error(this.$t('prodAdd.chooseApprovalProgress'))
        return
      }
      this.dialogQuery.prodTemplateDialog = false
      if (this.dialogQuery.prodTypeVisible) {
        this.$router.push({
          path: '/prod/productTemplate',
          query: {
            flag: 'add',
            templateCode: this.dialogQuery.choosedProdTemplate,
            choosedApprovalProgress: this.dialogQuery.choosedApprovalProgress,
            kindId: this.dialogQuery.choosedProdType
          }
        })
      } else {
        this.$router.push({
          path: '/prod/productTemplate',
          query: {
            flag: 'edit',
            templateCode: this.templateCode,
            menuId: this.menu.currentMenuId,
            choosedApprovalProgress: this.dialogQuery.choosedApprovalProgress,
            templateName: this.templateName
          }
        })
      }
    },
    toEdit(val) {
      if (val.standardFlag === '1') {
        this.$message.error('标准模板不允许修改')
        return
      }
      // 点击维护按钮，加载审核流程列表
      this.$refs['dialogRef'].getApplyTaskList()
      //选择审批流程dialog
      this.dialogQuery.prodTemplateDialog = true
      this.dialogQuery.isClickEdit = false
      this.dialogQuery.prodTypeVisible = false
      this.templateCode = val.templateCode
      this.templateName = val.templateName
    }
  }
}
</script>
