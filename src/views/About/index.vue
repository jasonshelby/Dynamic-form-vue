<template>
  <el-form ref="form" :model="{}" label-width="80px">
    <FormItem v-for="(data, index) in formItemData" :key="index" :data="data">
    </FormItem>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import FormItem from './components/formItem'

export default {
  props: {
    allAttributetable: Object,
    attributesId: String,
    templateCode: String
  },
  components: {
    FormItem
  },
  data() {
    return {
      formItemData: []
    }
  },
  computed: {},
  created() {
    const { data } = this.$route.params
    this.formItemData = data
    // attributeCode: "1100000001"
    // attributeDesc: "浜у搧浠ｇ爜"
    // attributeName: "浜у搧浠ｇ爜"
    // attributeType: "1"
    // attributeValue: ""
    // dataType: "1"
    // displayType: "11"
    // editableFlag: true
    // hiddenFlag: false
    // requiredFlag: true
    // selectedFlag: true
    // seqNo: 11001
  },
  mounted() {
    
  },
  watch: {},
  methods: {
    onSubmit() {
      
    }
  }
}
</script>
