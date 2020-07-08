const actionRequest = () => {}

// 查询表头配置和Options
export function attrTableHeaderQuery(data) {
  const serviceAlias = 'Fass_Attr_Table_Header_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

// 2006产品分类列表查询接口
export function prodKindListQuery(data) {
  const serviceAlias = 'Fass_Prod_Kind_List_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 2006产品模板列表查询接口
 * @param { String } reqData.templateCode 处理结果为0成功时，返回产品分类列表
 * @param { String } reqData.templateName
 * @param { String } reqData.kindId
 * @param	{ String } reqData.referenceTemplateCode
 * @param { Number } reqData.pageNum 当前页码
 * @param { Number } reqData.pageSize 每页大小（不能大于100）
 */
export function queryProdTemplateList(data) {
  const serviceAlias = 'Fass_Query_Prod_Template_List_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 产品模板维护新增申请
 * @param { String } prodTpl.templateCode
 * @param { String } prodTpl.templateName
 * @param { String } prodTpl.kindId
 */
export function prodtplApply(data) {
  const serviceAlias = 'Fass_Prodtpl_Apply_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板属性字典正式信息
 * @param { String } templateCode
 */
export function prodTplDictQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Dict_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板属性字典申请信息
 * @param { String } templateCode
 */
export function prodTplDictApplyQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Dict_Apply_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板属性正式信息
 * @param { String } templateCode
 */
export function prodTplAttrQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Attr_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板属性申请信息
 * @param { String } templateCode
 */
export function prodTplAttrApplyQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Attr_Apply_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板属性级联目录正式信息
 * @param { String } templateCode
 */
export function prodTplCascadeQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Cascade_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板属性级联目录正式信息
 * @param { String } templateCode
 */
export function prodTplCascadeApplyQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Cascade_Apply_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板属性集正式信息
 * @param { String } procInstId 审批流转号,流程中心流程唯一标识
 */
export function prodTplGroupQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Group_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板属性集申请信息
 * @param { String } procInstId 审批流转号,流程中心流程唯一标识
 */
export function prodTplGroupApplyQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Group_Apply_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板正式信息
 * @param { String } templateCode
 */
export function prodTplInfoQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Info_Query_V1.0'
  return actionRequest(serviceAlias, data)
}

/**
 * 查询产品模板申请信息
 * @param { String } templateCode
 */
export function prodTplInfoApplyQuery(data) {
  const serviceAlias = 'Fass_Prod_Tpl_Info_Apply_Query_V1.0'
  return actionRequest(serviceAlias, data)
}
