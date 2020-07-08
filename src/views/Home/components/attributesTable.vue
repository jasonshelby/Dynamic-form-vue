<template>
  <div>
    <el-table
      :data="attributesTable"
      v-if="ifShowTable"
      height="425"
      style="width: 100%"
      :default-sort="{ prop: 'seqNo'}"
    >
      <el-table-column
        width="150"
        :fixed="headConfig.colTag === 'seqNo' ? 'right' : undefined"
        v-for="(headConfig, i) in tableConfigs"
        :key="i"
        :prop="headConfig.colTag"
        :label="headConfig.colName"
        :sortable="headConfig.colTag === 'seqNo'"
        :sort-method="sortBy"
      >
        <template slot-scope="scope">
          <el-form :model="scope.row[headConfig.colTag]" :ref="i + '/' + scope.$index">
            <TableItem
              :headConfig="headConfig"
              :bodyConfig="scope.row[headConfig.colTag]"
              :rowConfig="scope.row"
              :AllOptions="AllOptions"
            ></TableItem>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { addChildrenParent } from '@/utils/productTemplate'
import TableItem from './tableItem'
import { options1, options2, headConfig } from '../data'

// 此组件控制整个表格，负责将每个单元格所需要的数据送进去，处理只在单元格内所不能处理的需求
export default {
  props: {
    allAttributetable: Object,
    attributesId: String,
    templateCode: String
  },
  components: {
    TableItem
  },
  data() {
    return {
      attributesTable: [],
      tableConfigs: null,
      AllOptions: {}
    }
  },
  computed: {
    ifShowTable() {
      return this.allAttributetable && this.attributesId
    }
  },
  created() {
    this.tableConfigs = headConfig.tableConfig
    this.AllOptions = {
      ...headConfig.options,
      ...options1,
      ...options2
    }
  },
  mounted() {
    // console.log(this.$refs)
  },
  watch: {
    // 根据ifShowTable的computed属性，每次attributesId变化，都会触发更新
    ifShowTable(val) {
      if (val) {
        this.attributesTable = addChildrenParent(
          this.allAttributetable,
          this.attributesId
        )
      } else {
        this.attributesTable = []
      }
    }
    // TODO: 用watch监听父子选项的变化，处理单选框之间的关系
  },
  methods: {
    sortBy(a, b) {
      const keyA = a.parent
        ? [a.parent.seqNo.value, a.seqNo.value]
        : [a.seqNo.value]

      const keyB = b.parent
        ? [b.parent.seqNo.value, b.seqNo.value]
        : [b.seqNo.value]

      return keyA[0] === keyB[0] ? keyA[1] - keyB[1] : keyA[0] - keyB[0]
    },
    handleChange() {},
    validate() {
      let res = true
      Object.keys(this.$refs).forEach(item => {
        if (this.$refs[item][0]) {
          this.$refs[item][0].validate(valid => {
            if (!valid) {
              res = false
              return false
            }
          })
        }
      })
      return res
    }
  }
}
</script>
