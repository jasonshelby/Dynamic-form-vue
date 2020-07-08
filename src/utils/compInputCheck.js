//这个校验的代码可以优化

//文本输入框的内容校验
function textInputCheck(object, warnMessage) {
  //什么也没填
  if (
    object.value.length === 0 ||
    object.value[0] === null ||
    object.value[0] === '' ||
    object.value[0] === undefined
  ) {
    //要求必填
    if (object.rules.required === true) {
      return object.label + warnMessage[0]
    }
    //没有要求
    else {
      return 'success'
    }
  }
  //填了东西
  else {
    let reg = /^[\u4e00-\u9fa5a-zA-Z\d]+$/
    //特殊字符
    if (!reg.test(object.value[0])) {
      return object.label + warnMessage[1]
    }
    //长度太小
    else if (object.value[0].length < parseInt(object.rules.minLength)) {
      return object.label + warnMessage[2] + object.rules.minLength
    }
    //长度太大
    else if (object.value[0].length > parseInt(object.rules.maxLength)) {
      return object.label + warnMessage[3] + object.rules.maxLength
    }
    //校验通过
    else {
      return 'success'
    }
  }
}

//单独日期输入框内容校验
function datePickerCheck(object, warnMessage) {
  //没填内容
  if (
    object.value.length === 0 ||
    object.value[0] === null ||
    object.value[0] === '' ||
    object.value[0] === undefined
  ) {
    if (object.rules.required === true) {
      return object.label + warnMessage[0]
    } else {
      return 'success'
    }
  }
  //填了东西
  else {
    //日期的格式是value-format控制的，这里没什么好校验的
    return 'success'
  }
}

//单选框内容校验
function singleSelectCheck(object, warnMessage) {
  //没填内容
  if (
    object.value.length === 0 ||
    object.value[0] === null ||
    object.value[0] === '' ||
    object.value[0] === undefined
  ) {
    if (object.rules.required === true) {
      return object.label + warnMessage[0]
    } else {
      return 'success'
    }
  }
  //填了内容
  else {
    return 'success'
  }
}

//多选框内容校验
function multiSelectCheck(object, warnMessage) {
  //数组里一个都没选
  if (object.value.length === 0) {
    //要求必选
    if (object.rules.required === true) {
      return object.label + warnMessage[0]
    }
    //没有要求
    else {
      return 'success'
    }
  }
  //至少选择了一项
  else {
    return 'success'
  }
}

//数字输入框内容校验
function numberInputCheck(object, warnMessage) {
  //什么也没填
  if (
    object.value.length === 0 ||
    object.value[0] === null ||
    object.value[0] === '' ||
    object.value[0] === undefined
  ) {
    //要求必填
    if (object.rules.required === true) {
      return object.label + warnMessage[0]
    }
    //无要求
    else {
      return 'success'
    }
  }
  //填了内容
  else {
    //校验最小值
    if (object.value[0] < Number(object.rules.min)) {
      return object.label + warnMessage[1] + object.rules.min
    }
    //校验最大值
    else if (object.value[0] > Number(object.rules.max)) {
      return object.label + warnMessage[2] + object.rules.max
    }
    //校验通过
    else {
      return 'success'
    }
  }
}

//时间选择框
function timePickerCheck(object, warnMessage) {
  //没填内容
  if (
    object.value.length === 0 ||
    object.value[0] === null ||
    object.value[0] === '' ||
    object.value[0] === undefined
  ) {
    if (object.rules.required === true) {
      return object.label + warnMessage[0]
    } else {
      return 'success'
    }
  }
  //填了内容
  else {
    //时间输入格式有value-format控制
    return 'success'
  }
}

//级联选族框
function cascaderCheck(object, warnMessage) {
  //级联v-model的变量是个数组，每一级的value依次往下存
  if (object.value.length === 0) {
    if (object.rules.required === true) {
      return object.label + warnMessage[0]
    } else {
      return 'success'
    }
  } else {
    //级联也就是个复杂点的select，不校验内容
    return 'success'
  }
}

//表格行数校验 表格中至少要添加一行
export function tableCheck(object, warnMessage) {
  if (object.rules.required === true && object.value.length === 0) {
    return object.label + warnMessage[0]
  } else {
    return 'success'
  }
}

//组件内容校验
export function compInputCheck(object, warnMessage) {
  //文本输入框
  if (object.type === '11') {
    return textInputCheck(object, warnMessage)
  }
  //单选框
  if (object.type === '12') {
    return singleSelectCheck(object, warnMessage)
  }
  //多选框
  if (object.type === '13') {
    return multiSelectCheck(object, warnMessage)
  }
  //时间输入框
  if (object.type === '14') {
    return datePickerCheck(object, warnMessage)
  }
  //数字输入框
  if (object.type === '15') {
    return numberInputCheck(object, warnMessage)
  }
  //时间选择框
  if (object.type === '16') {
    return timePickerCheck(object, warnMessage)
  }
  //表格的校验不在这里做，添加一行点确定的时候做
  if (object.type === '17') {
    return tableCheck(object, warnMessage)
  }
  if (object.type === '18') {
    return cascaderCheck(object, warnMessage)
  }
  return 'unknown object type'
}

// 通过menuId递归获取该id在tabs中的label,这里可以拆成两个函数，不用每次查找都递归一遍，可优化
export function getMenuLabel(menuId, tabs, array = []) {
  tabs.forEach(item => {
    array.push({ name: item.name, label: item.label })
    if (item.children !== null) {
      getMenuLabel(menuId, item.children, array)
    }
  })
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === menuId) {
      return array[i].label
    }
  }
  return ''
}
