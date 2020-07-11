<template>
  <div>
    <!-- 流程中心初始化完成并且拿到数据才能正常进行 -->
    <el-container v-if="this.allAttributetable">
      <el-aside width="200px">
        <AttributesMenu @handleSelect="selectMenuItem" ref="attributesMenu"></AttributesMenu>
      </el-aside>
      <el-main>
        <AttributesTable
          ref="attributes-table"
          :allAttributetable="allAttributetable"
          :attributesId="attributesId"
          :templateCode="templateCode"
        ></AttributesTable>
      </el-main>
    </el-container>

    <el-button @click="submit">导出</el-button>
  </div>
</template>

<script>
import { headConfig, allAttributetable } from './data'
import AttributesMenu from './components/attributesMenu'
import AttributesTable from './components/attributesTable'
import { deleteParentForChildren } from '@/utils/productTemplate'
export default {
  provide: {
    globalDisabled: false
  },
  components: {
    AttributesMenu,
    AttributesTable
  },
  data() {
    return {
      attributesId: '',
      allAttributetable: null,
      idList: [],
      templateCode: '',
      isReadonly: false,
      // 和下一审核人组件配合
      activeButton: ''
    }
  },
  computed: {},
  created() {
    this.allAttributetable = allAttributetable
  },
  methods: {
    selectMenuItem(val, idList) {
      this.attributesId = val
      this.idList = idList
    },
    openNextCheckerDialog(activeButton) {
      this.activeButton = activeButton
      this.nextCheckerDialogVisible = true
    },

    submit(type) {
      if (!this.validateCurPage()) {
        // 报错信息
        return false
      }
      const { templateCode, templateName, kindId } = this.$route.query
      deleteParentForChildren(this.allAttributetable)

      let data = this.allAttributetable[this.attributesId]
      data = data
        .map(row => {
          const res = {}
          console.log(row)

          Object.keys(row).forEach(keyName => {
            if (keyName === 'children') return
            res[keyName] = row[keyName].value
          })
          return res
        })
        .sort((a, b) => {
          return a.seqNo - b.seqNo
        })
      console.log('数据：', data)

      this.$router.push({
        name: 'about',
        params: data
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
    }
  }
}
</script>
<style scoped>
/* .el-aside {
  background-color: #fff;
}

.el-aside {
  overflow-x: hidden;
} */
</style>
