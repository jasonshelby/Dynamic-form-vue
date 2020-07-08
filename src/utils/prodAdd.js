function handelHeaderFilterVal() {
    // 表格表头
    let tHeader = [
        '销售商代码',
        '产品基本信息',
        '产品代码',
        '产品名称',
        '产品英文名称',
        '产品描述',
        '币种',
        '净值精度',
        '默认分红方式',
        '销售对象',
        '产品台历代码',
        '产品登记编码',
        '产品类别',
        '投资方向',
        '运作方式',
        '风险等级',
        '份额级别',
        '申请确认天数（申购及其他交易）不含认购',
        '赎回确认天数',
        '发行价格',
        '最低募集金额',
        '最高募集金额',
        '募集起始日期',
        '募集结束日期',
        '成立日期',
        '封闭结束日期',
        '到期日期',
        '封闭式自动清盘日期',
        '最高金额规模',
        '当日最大净申购金额',
        '巨额赎回处理方式',
        '巨额赎回是否调整比例',
        '个户交易限制',
        '客户类型',
        '首次投资最低金额',
        '最少追加金额',
        '最高认购限额',
        '级差金额',
        '客户类型',
        '首次投资最低金额',
        '最少追加金额',
        '最高认购限额',
        '级差金额',
        '客户类型',
        '首次投资最低金额',
        '最少追加金额',
        '最高认购限额',
        '级差金额',
        '其他参数信息',
        '认购截止时间(格式HHMMSS)',
        '开放期交易截止时间(格式HHMMSS)',
        '赎回份额明细处理方式',
        '净值公布频率',
        '净值公布日',
        '专户或私募特有',
        '最大账户数',
        '户数限制处理方式',
        '货币参数',
        '收益兑付频率',
        '未付收益兑付月',
        '货币产品收益兑付日期',
        '产品销售商参数',
        '最高金额规模',
        'T+N产品统计模式',
        '销售服务费费率',
        '认购总额度限制',
        '申购额度限制',
        '巨额申购比例限制',
        '巨额赎回比例限制',
        '服务费支付频率',
        '是否允许发起违约赎回',
        '日结型货币是否导出节假日收益',
        '非工作日收益下发方式',
        '签约起始日期',
        '销售服务费起始日期',
        '销售服务费截止日期',
        '清算天数设置',
        '认购清算天数',
        '申购清算天数',
        '赎回清算天数',
        '分红清算天数',
        '成立失败天数',
        '产品终止天数',
        '天数类型',
        'T+0产品方案设置',
        '申购日是否有收益',
        '收益是否每日结转成份额',
        '实时交易开始时间(格式HHMMSS)',
        '实时交易截止时间(格式HHMMSS)',
        '每日累计快速赎回最大份额'
    ]
    let TaddO = 'T+0产品开放期日间清算时间列表'
    //表格数据
    let filterVal = [
        'agencyNo',
        'prodCode',
        'prodCode',
        'prodName',
        'prodEnglishName',
        'prodDesc',
        'currency',
        'netPrecision',
        'defaultBonusType',
        'sellTarget',
        'calenderCode',
        'prodRegCode',
        'prodType',
        'investType',
        'operateType',
        'prodRiskLevel',
        'shareType',
        'confirmDays',
        'redeemConfirmDays',
        'issuePrice',
        'minIssueAmount',
        'maxIssueAmount',
        'issuStartDate',
        'issueEndDate',
        'setupDate',
        'lockEndDate',
        'prodEndDate',
        'closeAutoClearDate',
        'maxAllotShare',
        'maxDaySubAmount',
        'vastlyRedeemDealTypeDesc',
        'vastlyRedeemAdjustRatioFlag',
        'prodCode',
        'custType1',
        'firstMinAmount1',
        'stepAmount1',
        'maxSubAmount1',
        'gradeDiffAmount1',
        'custType2',
        'firstMinAmount2',
        'stepAmount2',
        'maxSubAmount2',
        'gradeDiffAmount2',
        'custType3',
        'firstMinAmount3',
        'stepAmount3',
        'maxSubAmount3',
        'gradeDiffAmount3',
        'prodCode',
        'reqCloseTime',
        'allotReqCloseTime',
        'redeemShareDealType',
        'navPublishFreqType',
        'navPublishDate',
        'prodCode',
        'maxAcctNum',
        'limitOrderType',
        'prodCode',
        'paymentPreqType',
        'moneyMonthType',
        'moneyDate',
        'prodCode',
        'agencyMaxAllotAsset',
        'tnStateType',
        'serviceFareRatio',
        'totalPurchaseLimit',
        'netPurchaseLimit',
        'vastlyPurchaseRatioLimit',
        'vastlyRedeemRatioLimit',
        'serviceFarePayFreq',
        'allowBreachRedeemFlag',
        'exportHolrevFlag',
        'restIncomeType',
        'contractStartDate',
        'serviceFareStartDate',
        'serviceFareEndDate',
        'prodCode',
        'subClearDays',
        'purchaseClearDays',
        'redeemClearDays',
        'bonusClearDays',
        'setupFailDays',
        'endDays',
        'clearType',
        'prodCode',
        'allotDayIncomeFlag',
        'incomeToShareFlag',
        'realtimeTradingStartTime',
        'realtimeTradingEndTime',
        'accuDailyRedeemMaxShare'
    ]
    let TaddoData = 'prodCode'
  return { tHeader, filterVal, TaddO, TaddoData }
}

function handelData(obj) {
    obj['custType1'] = '个人'
    obj['custType2'] = '机构'
    obj['custType3'] = '产品'
    for (let i = 1; i <= 3; i++) {
        obj['firstMinAmount' + i] = ''
        obj['stepAmount' + i] = ''
        obj['maxSubAmount' + i] = ''
        obj['gradeDiffAmount' + i] = ''
    }
    for (let i = 0; i < obj.prodTradeLimitInfo.length; i++) {
        let {
            custType,
            firstMinAmount,
            stepAmount,
            maxSubAmount,
            gradeDiffAmount
        } = obj.prodTradeLimitInfo[i]
        if (custType === '个人') {
            obj['firstMinAmount1'] = firstMinAmount
            obj['stepAmount1'] = stepAmount
            obj['maxSubAmount1'] = maxSubAmount
            obj['gradeDiffAmount1'] = gradeDiffAmount
        } else if (custType === '机构') {
            obj['firstMinAmount2'] = firstMinAmount
            obj['stepAmount2'] = stepAmount
            obj['maxSubAmount2'] = maxSubAmount
            obj['gradeDiffAmount2'] = gradeDiffAmount
        } else if (custType === '产品') {
            obj['firstMinAmount3'] = firstMinAmount
            obj['stepAmount3'] = stepAmount
            obj['maxSubAmount3'] = maxSubAmount
            obj['gradeDiffAmount3'] = gradeDiffAmount
        }
    }
}
// 处理获取到的表格数据 函数1
function handelObject(obj) {
    for (let key in obj) {
        if (
            obj[key] instanceof Object &&
            key != 'prodTradeLimitInfo' &&
            key != 'prodClearDateInfo' &&
            key != 'prodT0ClearDateInfo'
        ) {
            for (let k in obj[key]) {
                obj[k] = obj[key][k]
            }
        } else if (key === 'prodTradeLimitInfo') {
            handelData(obj)
        } else if (key === 'prodClearDateInfo') {
            let {
                subClearDays,
                purchaseClearDays,
                redeemClearDays,
                bonusClearDays,
                setupFailDays,
                endDays,
                clearType
            } = obj.prodClearDateInfo
            obj['subClearDays'] = subClearDays ? subClearDays : ''
            obj['purchaseClearDays'] = purchaseClearDays ? purchaseClearDays : ''
            obj['redeemClearDays'] = redeemClearDays ? redeemClearDays : ''
            obj['bonusClearDays'] = bonusClearDays ? bonusClearDays : ''
            obj['setupFailDays'] = setupFailDays ? setupFailDays : ''
            obj['endDays'] = endDays ? endDays : ''
            obj['clearType'] = clearType ? clearType : ''
        }
    }
    return obj
}
// 处理获取到的表格数据 函数2
function handelObjectLast(obj, thisHeader, thisFilterVal) {
    let header = []
    let filter = []
    for (let key in obj) {
        if (key === 'prodT0ClearDateInfo') {
            for (let i = 0; i < obj.prodT0ClearDateInfo.length; i++) {
                header.push(
                    '开始时间(格式HHMMSS)' + (i + 1),
                    '结束时间(格式HHMMSS)' + (i + 1)
                )
                obj['toStartTime' + i] = obj.prodT0ClearDateInfo[i].toStartTime
                obj['toEndTime' + i] = obj.prodT0ClearDateInfo[i].toEndTime
                filter.push('toStartTime' + i, 'toEndTime' + i)
            }
        }
    }
  let { tHeader, filterVal, TaddO, TaddoData } = handelHeaderFilterVal()
    let data = {}
    let object = handelObject(obj)
    if (object.confirmDays === '' || object.confirmDays === '0') {
        tHeader.push(TaddO)
        filterVal.push(TaddoData)
        thisHeader = tHeader.concat(header)
        thisFilterVal = filterVal.concat(filter)
      }else{
        tHeader.push('')
        filterVal.push('')
        thisHeader = tHeader
        thisFilterVal = filterVal
      }
    for (let key in object) {
        if (typeof object[key] != Object) {
            data[key] = object[key]
        }
    }
    let tableData = []
    for (let j = 0; j < thisFilterVal.length; j++) {
        tableData[j] = {
            title1: thisHeader[j],
            title2: data[thisFilterVal[j]]
        }
    }
    return tableData
}
export { handelObjectLast }