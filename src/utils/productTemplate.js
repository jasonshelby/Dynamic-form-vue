export function addChildrenParent(allAttributetable, attributesId) {
    const originData = allAttributetable[attributesId]
    let res = []
    originData.forEach(item => {
        res.push(item)
        if (item.children) {
            item.children.forEach(child => {
                child.parent = item
                res.push(child)
            })
        }
    })
    return res
}

export function deleteParentForChildren(allAttributetable) {
    Object.keys(allAttributetable).forEach(id => {
        const originData = allAttributetable[id]
        originData.forEach(item => {
            if (item.children) {
                item.children.forEach(child => {
                    if (child.parent) {
                        delete child.parent
                    }
                })
            }
        })
    })
}
// editable
export function createRulesByConfig(ruleInConfig, colName, moduleType) {
    ruleInConfig = ruleInConfig || {}
    const { required, maxLength, minLength } = ruleInConfig
    const rules = []
    if (required) {
        rules.push({
            required: true,
            message: '请输入' + colName,
            trigger: 'blur'
        })
    }
    if (moduleType === '11') {
        if (maxLength) {
            rules.push({
                min: minLength,
                max: maxLength,
                message: `限制输入长度为${minLength}-${maxLength}之间`
            })
        }
    }

    return rules
}