<script>
export default {
  props: {
    data: {
      attributeCode: '1100000001',
      attributeDesc: '浜у搧浠ｇ爜',
      attributeName: '浜у搧浠ｇ爜',
      attributeType: '1',
      attributeValue: '',
      dataType: '1',
      displayType: '11',
      editableFlag: true,
      hiddenFlag: false,
      requiredFlag: true,
      selectedFlag: true
      // 已经是排过序的数据
      // seqNo: 11001
    }
  },
  components: {
  },
  data() {
    return {}
  },
  computed: {},
  created() {
    console.log(this.data)
  },
  mounted() {},
  watch: {},
  methods: {
    renderInput() {
      // 合并配置：每个单元格配置有两个来源，一个自身的配置，一个是表头的配置，自身的配置优先级更高
      const { attributeType, attributeName, attributeValue } = this.data

      switch (attributeType) {
        // // 文本展示
        // case '10': {
        //   // 对于级联和表格类型的，需要对子集的属性描述加上‘ - ’前缀
        //   const isChild = colTag === 'attributeDesc' && parent
        //   return <span>{(isChild ? ' - ' : '') + this.bodyConfig.value}</span>
        // }
        // // 文本输入框
        // case '11': {
        //   return (
        //     <el-input
        //       v-model={this.bodyConfig.value}
        //       disabled={this.isDisabled}
        //       placeholder="请输入内容"
        //     ></el-input>
        //   )
        // }
        // // 单选选择器
        // case '12': {
        //   if (Array.isArray(this.bodyConfig.value)) {
        //     console.log(this.bodyConfig.value, this.colName, this.rowConfig)
        //   }
        //   return (
        //     // onChange={handleChange}
        //     <el-select
        //       v-model={this.bodyConfig.value}
        //       placeholder="请选择"
        //       class="is-no-asterisk"
        //       clearable
        //       disabled={this.isDisabled}
        //     >
        //       {this.options.map(({ value, label }) => {
        //         return (
        //           <el-option
        //             key={value}
        //             label={label}
        //             value={value}
        //           ></el-option>
        //         )
        //       })}
        //     </el-select>
        //   )
        // }
        // // 多选选择器
        // case '13': {
        //   return (
        //     // onChange={handleChange}
        //     <el-select
        //       v-model={this.valueForMultipleSelect}
        //       placeholder="请选择"
        //       disabled={this.isDisabled}
        //       multiple
        //       class="is-no-asterisk"
        //       clearable
        //     >
        //       {this.options.map(({ value, label }) => {
        //         return (
        //           <el-option
        //             key={value}
        //             label={label}
        //             value={value}
        //           ></el-option>
        //         )
        //       })}
        //     </el-select>
        //   )
        // }
        // case '14': {
        //   return (
        //     <el-date-picker
        //       v-model={this.bodyConfig.value}
        //       disabled={this.isDisabled}
        //       type="date"
        //       placeholder="选择日期"
        //     ></el-date-picker>
        //   )
        // }
        // // 数字
        // case '15': {
        //   return (
        //     <el-input
        //       type="number"
        //       disabled={this.isDisabled}
        //       v-model={this.bodyConfig.value}
        //       precision={this.ruleInConfig.precision}
        //       min={
        //         this.ruleInConfig.min === 0 ? this.ruleInConfig.min : -Infinity
        //       }
        //       max={this.ruleInConfig.max ? this.ruleInConfig.max : Infinity}
        //       placeholder="请输入数字"
        //     ></el-input>
        //   )
        // }
        // case '16': {
        //   return (
        //     <el-time-picker
        //       v-model={this.bodyConfig.value}
        //       onPickerOptions={{
        //         selectableRange: '18:30:00 - 20:30:00'
        //       }}
        //       disabled={this.isDisabled}
        //       placeholder="任意时间点"
        //     ></el-time-picker>
        //   )
        // }
        // case '18': {
        //   return (
        //     <el-cascader
        //       disabled={this.isDisabled}
        //       // onChange={updateParents}
        //       v-model={this.valueForCascader}
        //       clearable
        //       expand-trigger="hover"
        //       options={this.options}
        //     ></el-cascader>
        //   )
        // }
        // // 不生成
        // case '19': {
        //   this.bodyConfig.value = '/'
        //   return <span>/</span>
        // }
        // // 开关
        // case '21': {
        //   return (
        //     <el-checkbox
        //       disabled={this.isDisabled}
        //       type="checkbox"
        //       v-model={this.bodyConfig.value}
        //       onChange={val => {
        //         this.isSelectedFlagInParent &&
        //           this.changeChildrenSelectedFlag(val)
        //       }}
        //     ></el-checkbox>
        //   )
        // }
        default: {
          console.log('未设置' + attributeType + '类型')
          return attributeValue
        }
      }
    }
  },
  render() {
    return (
      <el-form-item label={this.data.attributeName} prop="value" rules={this.rules}>
        {this.renderInput()}
      </el-form-item>
    )
  }
}
</script>
