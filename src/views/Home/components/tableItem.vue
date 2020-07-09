<script>
import { createRulesByConfig } from '@/utils/productTemplate'

// 这个组件是每一个单元格，负责整理所有的配置信息，根据配置展示以及校验单元格
export default {
  inject: ['globalDisabled'],
  props: {
    AllOptions: Object,
    headConfig: Object,
    bodyConfig: Object,
    rowConfig: Object
  },
  data() {
    return {
      moduleType: '',
      dataSource: '',
      ruleInConfig: null,
      rules: [],
      colTag: ''
    }
  },
  created() {
    // 合并配置：每个单元格配置有两个来源，一个自身的配置，一个是表头的配置，自身的配置优先级更高
    this.moduleType = this.bodyConfig.moduleType || this.headConfig.moduleType
    this.dataSource = this.bodyConfig.dataSource || this.headConfig.dataSource
    this.editable = this.bodyConfig.editable || this.headConfig.editable
    this.colTag = this.headConfig.colTag
    this.colName = this.headConfig.colName
    this.ruleInConfig = this.bodyConfig.rule || this.headConfig.rule

    const { ruleInConfig, colName, moduleType } = this
    this.rules = createRulesByConfig(ruleInConfig, colName, moduleType)

    // 父级未选中，所有子集不能选中
    if (this.isSelectedFlagInParent) {
      try {
        this.changeChildrenSelectedFlag(this.rowConfig.selectedFlag.value)
      } catch (e) {
        console.log(e)
      }
    }
  },
  computed: {
    // 所有的options放在一起，dataSource是key值，拿到我们需要的options
    options() {
      return this.AllOptions[this.dataSource] || []
    },
    // 对于级联选择器，需要将xx/yy格式的值替换为【'xx', 'yy']格式
    valueForCascader: {
      get() {
        // 是空字符串的时候会解析成['']，所以做一次校验
        return this.bodyConfig.value ? [] : this.bodyConfig.value.split('/')
      },
      set(val) {
        this.bodyConfig.value = val.join('/')
      }
    },
    valueForMultipleSelect: {
      get() {
        return this.bodyConfig.value ? [] : this.bodyConfig.value.split(',')
      },
      set(val) {
        this.bodyConfig.value = val.join(',')
      }
    },
    rowIsSelected() {
      const { selectedFlag = {} } = this.rowConfig
      console.log(selectedFlag.value)
      return selectedFlag.value === true
    },
    rowIsHidden() {
      const { hiddenFlag = {} } = this.rowConfig
      return hiddenFlag.value === true
    },
    isSelectedFlagInParent() {
      return (
        this.colTag === 'selectedFlag' && Array.isArray(this.rowConfig.children)
      )
    },
    isDisabled() {
      // 全局配置优先级最高，全局不可更改，个体不可更改
      if (this.globalDisabled) return true
      // 如果是选中标识那一列，是可以更改的
      if (this.colTag === 'selectedFlag') return false
      // 根据整行的选中情况，和自身的配置进行判断是否可以更改
      return this.rowIsSelected ? this.editable === false : true
    },
    rowIsSelectedAndHidden() {
      return this.rowIsSelected && this.rowIsHidden
    },
    shouldInjectRules() {
      // 全局没有封掉，整行被选中，并且还有自己的校验规则
      return !this.globalDisabled && this.rowIsSelected && this.ruleInConfig
    }
  },
  watch: {
    //选中但是隐藏的属性 默认属性值改为必填
    rowIsSelectedAndHidden() {
      if (!this.rowConfig.attributeValue.rule) {
        this.rowConfig.attributeValue.rule = {}
      }
      this.rowConfig.attributeValue.rule.required = true
    }
  },
  methods: {
    changeChildrenSelectedFlag(val) {
      if (!val) {
        this.rowConfig.children.forEach(child => {
          child.selectedFlag.value = false
        })
        if (!this.rowConfig.selectedFlag.rule) {
          this.rowConfig.selectedFlag.rule = {}
        }
        this.rowConfig.selectedFlag.rule.editable = false
      }
    },
    renderInput() {
      // 合并配置：每个单元格配置有两个来源，一个自身的配置，一个是表头的配置，自身的配置优先级更高
      const { moduleType, colTag } = this
      const { parent } = this.rowConfig

      switch (moduleType) {
        // 文本展示
        case '10': {
          // 对于级联和表格类型的，需要对子集的属性描述加上‘ - ’前缀
          const isChild = colTag === 'attributeDesc' && parent
          return <span>{(isChild ? ' - ' : '') + this.bodyConfig.value}</span>
        }
        // 文本输入框
        case '11': {
          return (
            <el-input
              v-model={this.bodyConfig.value}
              disabled={this.isDisabled}
              placeholder="请输入内容"
            ></el-input>
          )
        }
        // 单选选择器
        case '12': {
          if (Array.isArray(this.bodyConfig.value)) {
            console.log(this.bodyConfig.value, this.colName, this.rowConfig)
          }
          return (
            // onChange={handleChange}
            <el-select
              v-model={this.bodyConfig.value}
              placeholder="请选择"
              class="is-no-asterisk"
              clearable
              disabled={this.isDisabled}
            >
              {this.options.map(({ value, label }) => {
                return (
                  <el-option
                    key={value}
                    label={label}
                    value={value}
                  ></el-option>
                )
              })}
            </el-select>
          )
        }
        // 多选选择器
        case '13': {
          return (
            // onChange={handleChange}
            <el-select
              v-model={this.valueForMultipleSelect}
              placeholder="请选择"
              disabled={this.isDisabled}
              multiple
              class="is-no-asterisk"
              clearable
            >
              {this.options.map(({ value, label }) => {
                return (
                  <el-option
                    key={value}
                    label={label}
                    value={value}
                  ></el-option>
                )
              })}
            </el-select>
          )
        }
        case '14': {
          return (
            <el-date-picker
              v-model={this.bodyConfig.value}
              disabled={this.isDisabled}
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          )
        }
        // 数字
        case '15': {
          return (
            <el-input
              type="number"
              disabled={this.isDisabled}
              v-model={this.bodyConfig.value}
              precision={this.ruleInConfig.precision}
              min={
                this.ruleInConfig.min === 0 ? this.ruleInConfig.min : -Infinity
              }
              max={this.ruleInConfig.max ? this.ruleInConfig.max : Infinity}
              placeholder="请输入数字"
            ></el-input>
          )
        }
        case '16': {
          return (
            <el-time-picker
              v-model={this.bodyConfig.value}
              onPickerOptions={{
                selectableRange: '18:30:00 - 20:30:00'
              }}
              disabled={this.isDisabled}
              placeholder="任意时间点"
            ></el-time-picker>
          )
        }
        case '18': {
          return (
            <el-cascader
              disabled={this.isDisabled}
              // onChange={updateParents}
              v-model={this.valueForCascader}
              clearable
              expand-trigger="hover"
              options={this.options}
            ></el-cascader>
          )
        }
        // 不生成
        case '19': {
          this.bodyConfig.value = '/'
          return <span>/</span>
        }
        // 上下拖动功能
        case '20': {
          return (
            <div>
              <el-button icon="el-icon-arrow-up" circle></el-button>
              <el-button icon="el-icon-arrow-down" circle></el-button>
            </div>
          )
        }
        // 开关
        case '21': {
          return (
            <el-checkbox
              disabled={this.isDisabled}
              type="checkbox"
              v-model={this.bodyConfig.value}
              onChange={val => {
                this.isSelectedFlagInParent &&
                  this.changeChildrenSelectedFlag(val)
              }}
            ></el-checkbox>
          )
        }
        default: {
          console.log('未设置' + moduleType + '类型', this.bodyConfig)
          return moduleType + '%'
        }
      }
    }
  },
  render() {
    return this.shouldInjectRules ? (
      <el-form-item prop="value" rules={this.rules}>
        {this.renderInput()}
      </el-form-item>
    ) : (
      <div>{this.renderInput()}</div>
    )
  }
}

// 必填标记
// function renderRequiredSign(rules) {
//   if (rules && rules.required) {
//     return <span style="color:red">*</span>
//   }
// }

// function handleChange() {}
</script>
