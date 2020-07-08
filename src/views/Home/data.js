// 鏌ヨ琛ㄥご閰嶇疆鍜孫ptions
export const headConfig = {
  tableConfig: [
    {
      colName: '前端选中标识',
      colTag: 'selectedFlag',
      moduleType: '21',
      editable: false,
      rule: {
        min: null,
        max: null,
        minLength: null,
        precision: null,
        maxLength: null,
        required: true
      },
      dataSource: null
    },
    {
      colName: '属性代码',
      colTag: 'attributeCode',
      moduleType: '10',
      editable: false,
      rule: null,
      dataSource: null
    },
    {
      colName: '属性描述',
      colTag: 'attributeDesc',
      moduleType: '10',
      editable: false,
      rule: null,
      dataSource: null
    },
    {
      colName: '属性类型',
      colTag: 'attributeType',
      moduleType: '12',
      editable: false,
      rule: {
        min: null,
        max: null,
        minLength: null,
        precision: null,
        maxLength: null,
        required: true
      },
      dataSource: 'attributeType'
    },
    {
      colName: '显示类型',
      colTag: 'displayType',
      moduleType: '12',
      editable: false,
      rule: {
        min: null,
        max: null,
        minLength: null,
        precision: null,
        maxLength: null,
        required: true
      },
      dataSource: 'displayType'
    },
    {
      colName: '数据类型',
      colTag: 'dataType',
      moduleType: '12',
      editable: false,
      rule: {
        min: null,
        max: null,
        minLength: null,
        precision: null,
        maxLength: null,
        required: true
      },
      dataSource: 'dataType'
    },
    {
      colName: '前端必填标识',
      colTag: 'requiredFlag',
      moduleType: '21',
      editable: false,
      rule: {
        min: null,
        max: null,
        minLength: null,
        precision: null,
        maxLength: null,
        required: true
      },
      dataSource: null
    },
    {
      colName: '前端可编辑标识',
      colTag: 'editableFlag',
      moduleType: '21',
      editable: true,
      rule: {
        min: null,
        max: null,
        minLength: null,
        precision: null,
        maxLength: null,
        required: true
      },
      dataSource: null
    },
    {
      colName: '前端隐藏标识',
      colTag: 'hiddenFlag',
      moduleType: '21',
      editable: true,
      rule: {
        min: null,
        max: null,
        minLength: null,
        precision: null,
        maxLength: null,
        required: true
      },
      dataSource: null
    },
    {
      colName: '基本属性默认值',
      colTag: 'attributeValue',
      moduleType: null,
      editable: false,
      rule: null,
      dataSource: null
    },
    {
      colName: '前端展示名称',
      colTag: 'attributeName',
      moduleType: '11',
      editable: true,
      rule: {
        min: null,
        max: null,
        minLength: null,
        precision: null,
        maxLength: 0,
        required: true
      },
      dataSource: null
    },
    {
      colName: '前端显示顺序',
      colTag: 'seqNo',
      moduleType: '20',
      editable: false,
      rule: null,
      dataSource: null
    }
  ],
  options: {
    "moduleType":[
			{
				"label": "文本展示",
				"value": "10"
			},
			{
				"label": "文本框",
				"value": "11"
			},
			{
				"label": "单选",
				"value": "12"
			},
			{
				"label": "多选",
				"value": "13"
			},
			{
				"label": "日期",
				"value": "14"
			},
			{
				"label": "数字",
				"value": "15"
			},
			{
				"label": "时间",
				"value": "16"
			},
			{
				"label": "级联",
				"value": "18"
			},
			{
				"label": "不生成",
				"value": "19"
			},
			{
				"label": "顺序",
				"value": "20"
			}
		],
    "attributeType":[
			{
				"label": "基本",
				"value": "1"
			},
			{
				"label": "复合",
				"value": "2"
			}
		],
    "displayType":[
			{
				"label": "输入",
				"value": "11"
			},
			{
				"label": "单选",
				"value": "12"
			},
			{
				"label": "多选",
				"value": "13"
			},
			{
				"label": "范围",
				"value": "21"
			},
			{
				"label": "表格",
				"value": "22"
			},
			{
				"label": "级联",
				"value": "23"
			}
		],
    "dataType":[
			{
				"label": "字符",
				"value": "1"
			},
			{
				"label": "数值",
				"value": "2"
			}
			,
			{
				"label": "日期",
				"value": "3"
			}
			,
			{
				"label": "时间",
				"value": "4"
			}
		]
  }
}

export const options1 = {
  success: true,
  errCode: '0',
  errMessage: 'SUCCESS',
  data: {
    result: {
      errCode: '0',
      errApp: 'F-FASS',
      errMsg: 'SUCCESS',
      status: '0'
    },
    private: {
      dict0090: [
        {
          label: '浠峰唴娉�',
          value: '0'
        },
        {
          label: '浠峰娉�',
          value: '1'
        }
      ],
      dict0091: [
        {
          label: '淇濇湁閲戦',
          value: '0'
        },
        {
          label: '淇濇湁浠介',
          value: '1'
        }
      ],
      dict0092: [
        {
          label: 'T鏃ヤ繚鏈夐噺涓篢-1鏃ョ‘璁ゅ悗浠介',
          value: '0'
        },
        {
          label: 'T鏃ヤ繚鏈夐噺涓篢-N鏃ョ‘璁ゅ悗浠介',
          value: '1'
        }
      ],
      dict0017: [
        {
          label: '鍙栨秷',
          value: '0'
        },
        {
          label: '椤哄欢',
          value: '1'
        },
        {
          label: '鎸夋姇璧勮�呮剰鎰�',
          value: '2'
        }
      ],
      dict0019: [
        {
          label: '浠介 ',
          value: '0'
        },
        {
          label: '閲戦',
          value: '1'
        }
      ],
      dict0013: [
        {
          label: '鏈棩姣斾緥閰嶅敭',
          value: '0'
        },
        {
          label: '鍏ㄧ▼姣斾緥閰嶅敭',
          value: '1'
        }
      ],
      dict0058: [
        {
          label: '鎸夌敵璇烽噾棰�/鐢宠鏃堕棿/TA璐﹀彿',
          value: '0'
        },
        {
          label: '鎸夌敵璇锋椂闂�/鐢宠閲戦/TA璐﹀彿',
          value: '1'
        }
      ],
      dict0014: [
        {
          label: '鏈�楂樿妯′唤棰�',
          value: '1'
        },
        {
          label: '鏈�楂樿妯￠噾棰�',
          value: '2'
        },
        {
          label: '褰撴棩鏈�澶у噣鐢宠喘閲戦',
          value: '3'
        }
      ],
      dict0015: [
        {
          label: '鎸夋瘮渚嬬‘璁�',
          value: '1'
        },
        {
          label: '鎸変唬閿�鎺у埗',
          value: '2'
        },
        {
          label: '鍒嗛攢鍞晢鎸夋椂闂村鐞�',
          value: '3'
        },
        {
          label: '鍒嗛攢鍞晢鎸夋眹鎬婚噾棰�',
          value: '5'
        },
        {
          label: '鍒嗛攢鍞晢鎸夊崟绗旈噾棰�',
          value: '6'
        },
        {
          label: '涓嶅垎閿�鍞晢鎸夌敵璇锋椂闂�',
          value: '7'
        },
        {
          label: '涓嶅垎閿�鍞晢鎸夋眹鎬婚噾棰�',
          value: '8'
        },
        {
          label: '涓嶅垎閿�鍞晢鎸夊崟绗旈噾棰�',
          value: '9'
        }
      ],
      dict0010: [
        {
          label: '鍚�',
          value: '0'
        },
        {
          label: '鏄�',
          value: '1'
        }
      ],
      dict0055: [
        {
          label: '娲绘湡',
          value: '0'
        }
      ],
      dict0011: [
        {
          label: '鍚�',
          value: '0'
        },
        {
          label: '涓腐浜掕',
          value: '1'
        }
      ],
      dict0056: [
        {
          label: '璧庡洖',
          value: '03'
        },
        {
          label: '浜у搧杞崲',
          value: '13'
        }
      ],
      dict0094: [
        {
          label: '鎸夋湀',
          value: '1'
        },
        {
          label: '鎸夊',
          value: '2'
        }
      ],
      dict0095: [
        {
          label: '涓嶅紑閫�',
          value: '0'
        },
        {
          label: '寮�閫�',
          value: '1'
        }
      ],
      dict0028: [
        {
          label: '妫�鏌ョ壒娈�',
          value: '0'
        },
        {
          label: '纭鏁存暟鍊嶉噾棰�',
          value: '2'
        }
      ],
      dict0106: [
        {
          label: '浠ｈ〃璺熸墭绠¤娓呯畻',
          value: '0'
        },
        {
          label: '浠ｈ〃璺熼攢鍞晢娓呯畻',
          value: '1'
        },
        {
          label: '浠ｈ〃鎵樼琛岃浆鎹㈡竻绠楀ぉ鏁拌缃�',
          value: '2'
        }
      ],
      dict0029: [
        {
          label: '涓嶄繚鏈�',
          value: '0'
        },
        {
          label: '鎴愭湰姣斾緥娉曚繚鏈�',
          value: '1'
        }
      ],
      dict0107: [
        {
          label: '鏅�氭ā寮�',
          value: '0'
        },
        {
          label: '璁㈠崟鐙珛娓呯畻',
          value: '1'
        }
      ],
      dict0068: [
        {
          label: '杞崲鍑哄拰杞崲鍏ラ兘涓嶅厑璁�',
          value: '0'
        },
        {
          label: '鍙厑璁歌浆鎹㈠叆',
          value: '1'
        },
        {
          label: '鍙厑璁歌浆鎹㈠嚭',
          value: '2'
        },
        {
          label: '閮藉厑璁�',
          value: '3'
        }
      ],
      dict0024: [
        {
          label: '鍚庤繘鍏堝嚭',
          value: '0'
        },
        {
          label: '鍏堣繘鍏堝嚭',
          value: '1'
        }
      ],
      dict0069: [
        {
          label: '鎸夋瘮渚嬪甫璧�',
          value: '0'
        },
        {
          label: '璐熸敹鐩婃寜姣斾緥甯﹁蛋',
          value: '1'
        },
        {
          label: '閫�鍑哄悗鍓╀綑浠介甯傚�尖墹璐熸敹鐩婃椂璐熸敹鐩婃寜姣斾緥甯﹁蛋',
          value: '2'
        },
        {
          label: '閮戒笉甯﹁蛋',
          value: '3'
        }
      ],
      dict0103: [
        {
          label: '鏍稿闇�琛ユ鏃堕檺鍒�',
          value: '0'
        },
        {
          label: '鏃犳牳瀵归�氳繃鏃堕檺鍒�',
          value: '1'
        }
      ],
      dict0027: [
        {
          label: '灏忎唤棰濋兘寮鸿祹',
          value: '0'
        },
        {
          label: '鍙戠敓璧庡洖/杞崲鍑�/杞墭绠″嚭纭',
          value: '2'
        },
        {
          label: '涓嶅彂璧峰己鍒惰祹鍥�',
          value: '3'
        }
      ],
      dict0020: [
        {
          label: '鏈烘瀯',
          value: '0'
        },
        {
          label: '涓汉',
          value: '1'
        },
        {
          label: '浜у搧',
          value: '2'
        }
      ],
      dict0065: [
        {
          label: '涓嶅彲鐢�',
          value: '0'
        },
        {
          label: '鍙敤',
          value: '1'
        }
      ],
      dict0022: [
        {
          label: '褰掍骇鍝佽祫浜�',
          value: '0'
        },
        {
          label: '鍒╂伅杞唤棰�',
          value: '1'
        }
      ],
      dict0067: [
        {
          label: '椤哄欢鍒颁笅涓�宸ヤ綔鏃�',
          value: '0'
        },
        {
          label: '椤哄欢鍒颁笅涓�寮�鏀炬棩',
          value: '1'
        }
      ],
      dict0023: [
        {
          label: '鍚庤繘鍏堝嚭',
          value: '0'
        },
        {
          label: '鍏堣繘鍏堝嚭',
          value: '1'
        }
      ],
      dict0061: [
        {
          label: '鎸夋寔鏈夊ぉ鏁�',
          value: '0'
        },
        {
          label: '鎸夊埌鏈熷ぉ鏁�',
          value: '1'
        }
      ],
      dict0062: [
        {
          label: '姣忔棩娓呯畻',
          value: '0'
        },
        {
          label: '姣忓懆涓�',
          value: '1'
        },
        {
          label: '姣忓懆浜�',
          value: '2'
        },
        {
          label: '姣忓懆涓�',
          value: '3'
        },
        {
          label: '姣忓懆鍥�',
          value: '4'
        },
        {
          label: '姣忓懆浜�',
          value: '5'
        }
      ],
      dict0063: [
        {
          label: '鍖呭惈璁よ喘璐�',
          value: '0'
        },
        {
          label: '涓嶅寘鍚璐垂',
          value: '1'
        }
      ],
      dict0116: [
        {
          label: 'TA涓嶈绠楄繑杩�',
          value: '0'
        },
        {
          label: '鎸夊疄闄呭灚璧勫ぉ鏁拌繑杩�',
          value: '1'
        }
      ],
      dict0118: [
        {
          label: '韬唤璇�',
          value: '0'
        },
        {
          label: '涓浗鎶ょ収',
          value: '1'
        },
        {
          label: '鍐涘畼璇�',
          value: '2'
        },
        {
          label: '澹叺璇�',
          value: '3'
        },
        {
          label: '娓境灞呮皯鏉ュ線鍐呭湴閫氳璇�',
          value: '4'
        },
        {
          label: '鎴峰彛鏈�',
          value: '5'
        },
        {
          label: '澶栫睄鎶ょ収',
          value: '6'
        },
        {
          label: '鍏朵粬',
          value: '7'
        },
        {
          label: '鏂囪亴',
          value: '8'
        },
        {
          label: '璀﹀畼',
          value: '9'
        },
        {
          label: '鍙拌優璇� ',
          value: 'A'
        },
        {
          label: '澶栧浗浜烘案涔呭眳鐣欒瘉',
          value: 'B'
        },
        {
          label: '娓境鍙板眳姘戝眳浣忚瘉',
          value: 'C'
        }
      ],
      dict0079: [
        {
          label: '姣忓ぉ鐢熸垚浠介鏄庣粏;',
          value: '0'
        },
        {
          label: '姣忔湀涓�绗斿垎绾㈡槑缁�;',
          value: '1'
        },
        {
          label: '濮嬬粓涓�绗斿垎绾㈡槑缁�',
          value: '2'
        }
      ],
      dict0036: [
        {
          label: '姣忓ぉ',
          value: '0'
        },
        {
          label: '姣忓懆',
          value: '1'
        },
        {
          label: '姣忔湀',
          value: '2'
        },
        {
          label: '姣忓懆鏈拰姣忔湀鏈�',
          value: '3'
        },
        {
          label: '姣忓鐨勭涓�涓湀',
          value: '4'
        },
        {
          label: '姣忓鐨勭浜屼釜鏈�',
          value: '5'
        },
        {
          label: '姣忓鐨勭涓変釜鏈�',
          value: '6'
        }
      ],
      dict0037: [
        {
          label: '绾歌川鍚堝悓',
          value: '0'
        },
        {
          label: '鐢靛瓙鍚堝悓',
          value: '1'
        }
      ],
      dict0075: [
        {
          label: '鎬绘敹鐩婂垎閰�',
          value: '0'
        },
        {
          label: '鐙珛璁＄畻鏀剁泭',
          value: '1'
        }
      ],
      dict0032: [
        {
          label: '鍙厑璁搁儴鍒嗙‘璁�',
          value: '0'
        },
        {
          label: '鍙厑璁稿叏閮ㄧ‘璁�',
          value: '1'
        }
      ],
      dict0111: [
        {
          label: '鎸変竾浠芥敹鐩�',
          value: '0'
        },
        {
          label: '鎸夋�绘敹鐩�',
          value: '1'
        }
      ],
      dict0078: [
        {
          label: '鎸夋湀',
          value: '0'
        },
        {
          label: '鎸夋棩',
          value: '1'
        },
        {
          label: '鎸夊',
          value: '2'
        }
      ],
      dict0034: [
        {
          label: '澶�',
          value: '0'
        },
        {
          label: '鏈�',
          value: '1'
        },
        {
          label: '骞�',
          value: '2'
        }
      ],
      dict0074: [
        {
          label: '鍙備笌涓嬩釜宸ヤ綔鏃ョ殑鍒嗛厤',
          value: '0'
        },
        {
          label: '鎸夋寔鏈変唤棰濈敱澶у埌灏忔瘡鎴蜂竴鍒�;',
          value: '1'
        },
        {
          label: '鎸夋埅鍘荤殑鏀剁泭鐢卞ぇ鍒板皬姣忔埛涓�鍒�;',
          value: '2'
        },
        {
          label: '鎸夊巻鍙茬疮璁＄殑鎴幓鐨勬敹鐩婄敱澶у埌灏忔瘡鎴�1鍒�',
          value: '3'
        },
        {
          label: '鍘嗗彶绱鎴幓鏀剁泭澶熶竴鍒嗘椂鍏堝垎閰嶄竴鍒嗭紝鍐嶅垎閰嶅叾浠栵紙寰呯‘璁わ級',
          value: '4'
        }
      ],
      dict0030: [
        {
          label: '涓婁氦鎵�',
          value: '0'
        },
        {
          label: '娣变氦鎵�',
          value: '1'
        },
        {
          label: '娌℃湁寮�閫氫氦鏄撴墍鏍囧織',
          value: '9'
        }
      ],
      dict0080: [
        {
          label: '绗竴鏈�',
          value: '1'
        },
        {
          label: '绗簩鏈�',
          value: '2'
        },
        {
          label: '绗笁鏈�',
          value: '3'
        }
      ],
      dict0081: [
        {
          label: '鐜伴噾',
          value: '0'
        },
        {
          label: '缁撹浆鎴愪唤棰�',
          value: '1'
        }
      ],
      dict0006: [
        {
          label: '寮�鏀惧紡',
          value: '0'
        },
        {
          label: '灏侀棴寮�',
          value: '1'
        }
      ],
      dict0007: [
        {
          label: '澧冨唴',
          value: '0'
        },
        {
          label: '澧冨',
          value: '1'
        },
        {
          label: '澧冨唴澶�',
          value: '2'
        }
      ],
      dict0008: [
        {
          label: 'PR1',
          value: '1'
        },
        {
          label: 'PR2',
          value: '2'
        },
        {
          label: 'PR3',
          value: '3'
        },
        {
          label: 'PR4',
          value: '4'
        },
        {
          label: 'PR5',
          value: '5'
        }
      ],
      dict0009: [
        {
          label: '鍓嶆敹璐�',
          value: 'A'
        },
        {
          label: '鍚庢敹璐�',
          value: 'B'
        }
      ],
      dict0046: [
        {
          label: '鍗曠嫭鍒ゆ柇',
          value: '0'
        },
        {
          label: '鍚堝苟鍒ゆ柇',
          value: '1'
        }
      ],
      dict0002: [
        {
          label: '涓汉',
          value: '0'
        },
        {
          label: '鏈烘瀯',
          value: '1'
        },
        {
          label: '浜у搧',
          value: '2'
        }
      ],
      dict0047: [
        {
          label: '纭澶辫触',
          value: '0'
        },
        {
          label: '閮ㄥ垎澶辫触',
          value: '1'
        }
      ],
      dict0003: [
        {
          label: '璁よ喘鏈�',
          value: '0'
        },
        {
          label: '姝ｅ父寮�鏀�',
          value: '1'
        },
        {
          label: '鏆傚仠璧庡洖',
          value: '3'
        },
        {
          label: '鏆傚仠鐢宠喘',
          value: '4'
        },
        {
          label: '鏆傚仠浜ゆ槗',
          value: '5'
        },
        {
          label: '浜у搧缁堟',
          value: '6'
        },
        {
          label: '鍙戣澶辫触',
          value: '9'
        }
      ],
      dict0048: [
        {
          label: '鍥涜垗浜斿叆',
          value: '0'
        },
        {
          label: '鎴綅',
          value: '1'
        },
        {
          label: '杩涗綅',
          value: '2'
        }
      ],
      dict0004: [
        {
          label: '鍏嫙浜у搧',
          value: '0'
        },
        {
          label: '绉佸嫙浜у搧',
          value: '1'
        },
        {
          label: '涓�瀵瑰涓撴埛鐞嗚储浜у搧',
          value: '3'
        }
      ],
      dict0005: [
        {
          label: '璐у竵甯傚満浜у搧',
          value: '2'
        },
        {
          label: '鍏朵粬',
          value: '4'
        }
      ],
      dict0086: [
        {
          label: '鎸夌‘璁ら噾棰濅氦鏀�',
          value: '0'
        },
        {
          label: '鎸夋垚浜ら噾棰濅氦鏀�',
          value: '1'
        }
      ],
      dict0042: [
        {
          label: '浠峰唴娉�',
          value: '0'
        },
        {
          label: '浠峰娉�',
          value: '1'
        },
        {
          label: '浠峰娉曪紙鍏堢畻纭閲戦锛�',
          value: '2'
        }
      ],
      dict0087: [
        {
          label: '姣忓ぉT+n鍒拌处',
          value: '0'
        },
        {
          label: '鍕熼泦缁撴潫鏃�+n鍒拌处',
          value: '1'
        }
      ],
      dict0043: [
        {
          label: '鎸夊師濮嬫垚鏈环',
          value: '0'
        },
        {
          label: '鎸夋垚鏈环',
          value: '1'
        },
        {
          label: '鎸夌幇浠�',
          value: '2'
        },
        {
          label: '鎸夌幇浠蜂笌鍘熷鎴愭湰浠锋渶灏忓��',
          value: '3'
        },
        {
          label: '鎸夌幇浠蜂笌鎴愭湰浠锋渶灏忓��',
          value: '4'
        }
      ],
      dict0088: [
        {
          label: '璺ㄤ紤鎭棩',
          value: '0'
        },
        {
          label: '椤哄欢鍒颁笅宸ヤ綔鏃�',
          value: '1'
        }
      ],
      dict0044: [
        {
          label: '鍗曠瑪瓒呴檺纭澶辫触',
          value: '1'
        },
        {
          label: '褰撳ぉ绱瓒呴檺閮藉け璐�',
          value: '2'
        },
        {
          label: '鎸夐噾棰濈敱澶у埌灏忥紝瓒呴檺閮ㄥ垎澶辫触',
          value: '3'
        },
        {
          label: '鎸夌敵璇锋椂闂村厛鍚庯紝瓒呴檺閮ㄥ垎澶辫触',
          value: '4'
        }
      ],
      dict0089: [
        {
          label: '鎸夌収纭閲戦涓�瀹氭瘮渚�;',
          value: '0'
        },
        {
          label: '鎸夎垂鐜囪绠楀悗鍒嗘垚;',
          value: '1'
        },
        {
          label: '鎸夊墠鏀惰垂鐜囪缃绠�;',
          value: '2'
        },
        {
          label: '鎸夊墠鏀惰垂鐜囪缃強鍒嗘垚姣斾緥璁＄畻',
          value: '3'
        }
      ],
      dict0045: [
        {
          label: '涓嶅寘鍚�',
          value: '0'
        },
        {
          label: '鍖呭惈',
          value: '2'
        }
      ],
      dict0001: [
        {
          label: '绾㈠埄鍐嶆姇',
          value: '0'
        },
        {
          label: '鐜伴噾绾㈠埄',
          value: '1'
        }
      ],
      dict0040: [
        {
          label: '鍗曠瑪璁＄畻',
          value: '0'
        },
        {
          label: '褰撳ぉ鍚堝苟璁＄畻(鍒嗙被鍒�)',
          value: '1'
        }
      ],
      dict0085: [
        {
          label: '鎸夌‘璁ら噾棰濅氦鏀�',
          value: '0'
        },
        {
          label: '鎸夋垚浜ら噾棰濅氦鏀�',
          value: '1'
        }
      ],
      dict0041: [
        {
          label: '璐圭巼鎸夋湁鏁堢敵璇疯绠�',
          value: '1'
        },
        {
          label: '璐圭巼鎸夊師鐢宠棰濊绠�',
          value: '2'
        }
      ]
    },
    public: {
      serviceAlias: 'Fass_Prod_Tpl_Dict_Query_V1.0',
      appSeqNo: '2018-03-13T12:56:35.405+0800',
      appId: 'F-FTAS',
      timestamp: '2018-03-13T12:56:35.405+0800'
    }
  }
}

export const options2 = {
  catal0001: [
    {
      children: null,
      label: '姣忓ぉ',
      value: '0'
    },
    {
      children: [
        {
          children: null,
          label: '1-鍛ㄤ竴',
          value: '0'
        },
        {
          children: null,
          label: '2-鍛ㄤ簩',
          value: '1'
        },
        {
          children: null,
          label: '3-鍛ㄤ笁',
          value: '2'
        },
        {
          children: null,
          label: '4-鍛ㄥ洓',
          value: '3'
        },
        {
          children: null,
          label: '5-鍛ㄤ簲',
          value: '4'
        }
      ],
      label: '姣忓懆',
      value: '1'
    },
    {
      children: [
        {
          children: null,
          label: '1鍙�',
          value: '001'
        },
        {
          children: null,
          label: '2鍙�',
          value: '002'
        },
        {
          children: null,
          label: '3鍙�',
          value: '003'
        },
        {
          children: null,
          label: '4鍙�',
          value: '004'
        },
        {
          children: null,
          label: '5鍙�',
          value: '005'
        },
        {
          children: null,
          label: '6鍙�',
          value: '006'
        },
        {
          children: null,
          label: '7鍙�',
          value: '007'
        },
        {
          children: null,
          label: '8鍙�',
          value: '008'
        },
        {
          children: null,
          label: '9鍙�',
          value: '009'
        },
        {
          children: null,
          label: '10鍙�',
          value: '010'
        },
        {
          children: null,
          label: '11鍙�',
          value: '011'
        },
        {
          children: null,
          label: '12鍙�',
          value: '012'
        },
        {
          children: null,
          label: '13鍙�',
          value: '013'
        },
        {
          children: null,
          label: '14鍙�',
          value: '014'
        },
        {
          children: null,
          label: '15鍙�',
          value: '015'
        },
        {
          children: null,
          label: '16鍙�',
          value: '016'
        },
        {
          children: null,
          label: '17鍙�',
          value: '017'
        },
        {
          children: null,
          label: '18鍙�',
          value: '018'
        },
        {
          children: null,
          label: '19鍙�',
          value: '019'
        },
        {
          children: null,
          label: '20鍙�',
          value: '020'
        },
        {
          children: null,
          label: '21鍙�',
          value: '021'
        },
        {
          children: null,
          label: '22鍙�',
          value: '022'
        },
        {
          children: null,
          label: '23鍙�',
          value: '023'
        },
        {
          children: null,
          label: '24鍙�',
          value: '024'
        },
        {
          children: null,
          label: '25鍙�',
          value: '025'
        },
        {
          children: null,
          label: '26鍙�',
          value: '026'
        },
        {
          children: null,
          label: '27鍙�',
          value: '027'
        },
        {
          children: null,
          label: '28鍙�',
          value: '028'
        },
        {
          children: null,
          label: '29鍙�',
          value: '029'
        },
        {
          children: null,
          label: '30鍙�',
          value: '030'
        },
        {
          children: null,
          label: '31鍙�',
          value: '031'
        },
        {
          children: null,
          label: '绗�1涓伐浣滄棩',
          value: '101'
        },
        {
          children: null,
          label: '绗�2涓伐浣滄棩',
          value: '102'
        },
        {
          children: null,
          label: '绗�3涓伐浣滄棩',
          value: '103'
        },
        {
          children: null,
          label: '绗�4涓伐浣滄棩',
          value: '104'
        },
        {
          children: null,
          label: '绗�5涓伐浣滄棩',
          value: '105'
        },
        {
          children: null,
          label: '绗�6涓伐浣滄棩',
          value: '106'
        },
        {
          children: null,
          label: '绗�7涓伐浣滄棩',
          value: '107'
        },
        {
          children: null,
          label: '绗�8涓伐浣滄棩',
          value: '108'
        },
        {
          children: null,
          label: '绗�9涓伐浣滄棩',
          value: '109'
        },
        {
          children: null,
          label: '绗�10涓伐浣滄棩',
          value: '110'
        },
        {
          children: null,
          label: '绗�11涓伐浣滄棩',
          value: '111'
        },
        {
          children: null,
          label: '绗�12涓伐浣滄棩',
          value: '112'
        },
        {
          children: null,
          label: '绗�13涓伐浣滄棩',
          value: '113'
        },
        {
          children: null,
          label: '绗�14涓伐浣滄棩',
          value: '114'
        },
        {
          children: null,
          label: '绗�15涓伐浣滄棩',
          value: '115'
        },
        {
          children: null,
          label: '绗�16涓伐浣滄棩',
          value: '116'
        },
        {
          children: null,
          label: '绗�17涓伐浣滄棩',
          value: '117'
        },
        {
          children: null,
          label: '绗�18涓伐浣滄棩',
          value: '118'
        },
        {
          children: null,
          label: '绗�19涓伐浣滄棩',
          value: '119'
        },
        {
          children: null,
          label: '绗�20涓伐浣滄棩',
          value: '120'
        },
        {
          children: null,
          label: '绗�21涓伐浣滄棩',
          value: '121'
        },
        {
          children: null,
          label: '绗�22涓伐浣滄棩',
          value: '122'
        },
        {
          children: null,
          label: '绗�23涓伐浣滄棩',
          value: '123'
        },
        {
          children: null,
          label: '绗�24涓伐浣滄棩',
          value: '124'
        }
      ],
      label: '姣忔湀',
      value: '2'
    },
    {
      children: null,
      label: '姣忓懆鏈拰姣忔湀鏈�',
      value: '3'
    },
    {
      children: [
        {
          children: null,
          label: '1鍙�',
          value: '001'
        },
        {
          children: null,
          label: '2鍙�',
          value: '002'
        },
        {
          children: null,
          label: '3鍙�',
          value: '003'
        },
        {
          children: null,
          label: '4鍙�',
          value: '004'
        },
        {
          children: null,
          label: '5鍙�',
          value: '005'
        },
        {
          children: null,
          label: '6鍙�',
          value: '006'
        },
        {
          children: null,
          label: '7鍙�',
          value: '007'
        },
        {
          children: null,
          label: '8鍙�',
          value: '008'
        },
        {
          children: null,
          label: '9鍙�',
          value: '009'
        },
        {
          children: null,
          label: '10鍙�',
          value: '010'
        },
        {
          children: null,
          label: '11鍙�',
          value: '011'
        },
        {
          children: null,
          label: '12鍙�',
          value: '012'
        },
        {
          children: null,
          label: '13鍙�',
          value: '013'
        },
        {
          children: null,
          label: '14鍙�',
          value: '014'
        },
        {
          children: null,
          label: '15鍙�',
          value: '015'
        },
        {
          children: null,
          label: '16鍙�',
          value: '016'
        },
        {
          children: null,
          label: '17鍙�',
          value: '017'
        },
        {
          children: null,
          label: '18鍙�',
          value: '018'
        },
        {
          children: null,
          label: '19鍙�',
          value: '019'
        },
        {
          children: null,
          label: '20鍙�',
          value: '020'
        },
        {
          children: null,
          label: '21鍙�',
          value: '021'
        },
        {
          children: null,
          label: '22鍙�',
          value: '022'
        },
        {
          children: null,
          label: '23鍙�',
          value: '023'
        },
        {
          children: null,
          label: '24鍙�',
          value: '024'
        },
        {
          children: null,
          label: '25鍙�',
          value: '025'
        },
        {
          children: null,
          label: '26鍙�',
          value: '026'
        },
        {
          children: null,
          label: '27鍙�',
          value: '027'
        },
        {
          children: null,
          label: '28鍙�',
          value: '028'
        },
        {
          children: null,
          label: '29鍙�',
          value: '029'
        },
        {
          children: null,
          label: '30鍙�',
          value: '030'
        },
        {
          children: null,
          label: '31鍙�',
          value: '031'
        },
        {
          children: null,
          label: '绗�1涓伐浣滄棩',
          value: '101'
        },
        {
          children: null,
          label: '绗�2涓伐浣滄棩',
          value: '102'
        },
        {
          children: null,
          label: '绗�3涓伐浣滄棩',
          value: '103'
        },
        {
          children: null,
          label: '绗�4涓伐浣滄棩',
          value: '104'
        },
        {
          children: null,
          label: '绗�5涓伐浣滄棩',
          value: '105'
        },
        {
          children: null,
          label: '绗�6涓伐浣滄棩',
          value: '106'
        },
        {
          children: null,
          label: '绗�7涓伐浣滄棩',
          value: '107'
        },
        {
          children: null,
          label: '绗�8涓伐浣滄棩',
          value: '108'
        },
        {
          children: null,
          label: '绗�9涓伐浣滄棩',
          value: '109'
        },
        {
          children: null,
          label: '绗�10涓伐浣滄棩',
          value: '110'
        },
        {
          children: null,
          label: '绗�11涓伐浣滄棩',
          value: '111'
        },
        {
          children: null,
          label: '绗�12涓伐浣滄棩',
          value: '112'
        },
        {
          children: null,
          label: '绗�13涓伐浣滄棩',
          value: '113'
        },
        {
          children: null,
          label: '绗�14涓伐浣滄棩',
          value: '114'
        },
        {
          children: null,
          label: '绗�15涓伐浣滄棩',
          value: '115'
        },
        {
          children: null,
          label: '绗�16涓伐浣滄棩',
          value: '116'
        },
        {
          children: null,
          label: '绗�17涓伐浣滄棩',
          value: '117'
        },
        {
          children: null,
          label: '绗�18涓伐浣滄棩',
          value: '118'
        },
        {
          children: null,
          label: '绗�19涓伐浣滄棩',
          value: '119'
        },
        {
          children: null,
          label: '绗�20涓伐浣滄棩',
          value: '120'
        },
        {
          children: null,
          label: '绗�21涓伐浣滄棩',
          value: '121'
        },
        {
          children: null,
          label: '绗�22涓伐浣滄棩',
          value: '122'
        },
        {
          children: null,
          label: '绗�23涓伐浣滄棩',
          value: '123'
        },
        {
          children: null,
          label: '绗�24涓伐浣滄棩',
          value: '124'
        }
      ],
      label: '姣忓鐨勭涓�涓湀',
      value: '4'
    },
    {
      children: [
        {
          children: null,
          label: '1鍙�',
          value: '001'
        },
        {
          children: null,
          label: '2鍙�',
          value: '002'
        },
        {
          children: null,
          label: '3鍙�',
          value: '003'
        },
        {
          children: null,
          label: '4鍙�',
          value: '004'
        },
        {
          children: null,
          label: '5鍙�',
          value: '005'
        },
        {
          children: null,
          label: '6鍙�',
          value: '006'
        },
        {
          children: null,
          label: '7鍙�',
          value: '007'
        },
        {
          children: null,
          label: '8鍙�',
          value: '008'
        },
        {
          children: null,
          label: '9鍙�',
          value: '009'
        },
        {
          children: null,
          label: '10鍙�',
          value: '010'
        },
        {
          children: null,
          label: '11鍙�',
          value: '011'
        },
        {
          children: null,
          label: '12鍙�',
          value: '012'
        },
        {
          children: null,
          label: '13鍙�',
          value: '013'
        },
        {
          children: null,
          label: '14鍙�',
          value: '014'
        },
        {
          children: null,
          label: '15鍙�',
          value: '015'
        },
        {
          children: null,
          label: '16鍙�',
          value: '016'
        },
        {
          children: null,
          label: '17鍙�',
          value: '017'
        },
        {
          children: null,
          label: '18鍙�',
          value: '018'
        },
        {
          children: null,
          label: '19鍙�',
          value: '019'
        },
        {
          children: null,
          label: '20鍙�',
          value: '020'
        },
        {
          children: null,
          label: '21鍙�',
          value: '021'
        },
        {
          children: null,
          label: '22鍙�',
          value: '022'
        },
        {
          children: null,
          label: '23鍙�',
          value: '023'
        },
        {
          children: null,
          label: '24鍙�',
          value: '024'
        },
        {
          children: null,
          label: '25鍙�',
          value: '025'
        },
        {
          children: null,
          label: '26鍙�',
          value: '026'
        },
        {
          children: null,
          label: '27鍙�',
          value: '027'
        },
        {
          children: null,
          label: '28鍙�',
          value: '028'
        },
        {
          children: null,
          label: '29鍙�',
          value: '029'
        },
        {
          children: null,
          label: '30鍙�',
          value: '030'
        },
        {
          children: null,
          label: '31鍙�',
          value: '031'
        },
        {
          children: null,
          label: '绗�1涓伐浣滄棩',
          value: '101'
        },
        {
          children: null,
          label: '绗�2涓伐浣滄棩',
          value: '102'
        },
        {
          children: null,
          label: '绗�3涓伐浣滄棩',
          value: '103'
        },
        {
          children: null,
          label: '绗�4涓伐浣滄棩',
          value: '104'
        },
        {
          children: null,
          label: '绗�5涓伐浣滄棩',
          value: '105'
        },
        {
          children: null,
          label: '绗�6涓伐浣滄棩',
          value: '106'
        },
        {
          children: null,
          label: '绗�7涓伐浣滄棩',
          value: '107'
        },
        {
          children: null,
          label: '绗�8涓伐浣滄棩',
          value: '108'
        },
        {
          children: null,
          label: '绗�9涓伐浣滄棩',
          value: '109'
        },
        {
          children: null,
          label: '绗�10涓伐浣滄棩',
          value: '110'
        },
        {
          children: null,
          label: '绗�11涓伐浣滄棩',
          value: '111'
        },
        {
          children: null,
          label: '绗�12涓伐浣滄棩',
          value: '112'
        },
        {
          children: null,
          label: '绗�13涓伐浣滄棩',
          value: '113'
        },
        {
          children: null,
          label: '绗�14涓伐浣滄棩',
          value: '114'
        },
        {
          children: null,
          label: '绗�15涓伐浣滄棩',
          value: '115'
        },
        {
          children: null,
          label: '绗�16涓伐浣滄棩',
          value: '116'
        },
        {
          children: null,
          label: '绗�17涓伐浣滄棩',
          value: '117'
        },
        {
          children: null,
          label: '绗�18涓伐浣滄棩',
          value: '118'
        },
        {
          children: null,
          label: '绗�19涓伐浣滄棩',
          value: '119'
        },
        {
          children: null,
          label: '绗�20涓伐浣滄棩',
          value: '120'
        },
        {
          children: null,
          label: '绗�21涓伐浣滄棩',
          value: '121'
        },
        {
          children: null,
          label: '绗�22涓伐浣滄棩',
          value: '122'
        },
        {
          children: null,
          label: '绗�23涓伐浣滄棩',
          value: '123'
        },
        {
          children: null,
          label: '绗�24涓伐浣滄棩',
          value: '124'
        }
      ],
      label: '姣忓鐨勭浜屼釜鏈�',
      value: '5'
    },
    {
      children: [
        {
          children: null,
          label: '1鍙�',
          value: '001'
        },
        {
          children: null,
          label: '2鍙�',
          value: '002'
        },
        {
          children: null,
          label: '3鍙�',
          value: '003'
        },
        {
          children: null,
          label: '4鍙�',
          value: '004'
        },
        {
          children: null,
          label: '5鍙�',
          value: '005'
        },
        {
          children: null,
          label: '6鍙�',
          value: '006'
        },
        {
          children: null,
          label: '7鍙�',
          value: '007'
        },
        {
          children: null,
          label: '8鍙�',
          value: '008'
        },
        {
          children: null,
          label: '9鍙�',
          value: '009'
        },
        {
          children: null,
          label: '10鍙�',
          value: '010'
        },
        {
          children: null,
          label: '11鍙�',
          value: '011'
        },
        {
          children: null,
          label: '12鍙�',
          value: '012'
        },
        {
          children: null,
          label: '13鍙�',
          value: '013'
        },
        {
          children: null,
          label: '14鍙�',
          value: '014'
        },
        {
          children: null,
          label: '15鍙�',
          value: '015'
        },
        {
          children: null,
          label: '16鍙�',
          value: '016'
        },
        {
          children: null,
          label: '17鍙�',
          value: '017'
        },
        {
          children: null,
          label: '18鍙�',
          value: '018'
        },
        {
          children: null,
          label: '19鍙�',
          value: '019'
        },
        {
          children: null,
          label: '20鍙�',
          value: '020'
        },
        {
          children: null,
          label: '21鍙�',
          value: '021'
        },
        {
          children: null,
          label: '22鍙�',
          value: '022'
        },
        {
          children: null,
          label: '23鍙�',
          value: '023'
        },
        {
          children: null,
          label: '24鍙�',
          value: '024'
        },
        {
          children: null,
          label: '25鍙�',
          value: '025'
        },
        {
          children: null,
          label: '26鍙�',
          value: '026'
        },
        {
          children: null,
          label: '27鍙�',
          value: '027'
        },
        {
          children: null,
          label: '28鍙�',
          value: '028'
        },
        {
          children: null,
          label: '29鍙�',
          value: '029'
        },
        {
          children: null,
          label: '30鍙�',
          value: '030'
        },
        {
          children: null,
          label: '31鍙�',
          value: '031'
        },
        {
          children: null,
          label: '绗�1涓伐浣滄棩',
          value: '101'
        },
        {
          children: null,
          label: '绗�2涓伐浣滄棩',
          value: '102'
        },
        {
          children: null,
          label: '绗�3涓伐浣滄棩',
          value: '103'
        },
        {
          children: null,
          label: '绗�4涓伐浣滄棩',
          value: '104'
        },
        {
          children: null,
          label: '绗�5涓伐浣滄棩',
          value: '105'
        },
        {
          children: null,
          label: '绗�6涓伐浣滄棩',
          value: '106'
        },
        {
          children: null,
          label: '绗�7涓伐浣滄棩',
          value: '107'
        },
        {
          children: null,
          label: '绗�8涓伐浣滄棩',
          value: '108'
        },
        {
          children: null,
          label: '绗�9涓伐浣滄棩',
          value: '109'
        },
        {
          children: null,
          label: '绗�10涓伐浣滄棩',
          value: '110'
        },
        {
          children: null,
          label: '绗�11涓伐浣滄棩',
          value: '111'
        },
        {
          children: null,
          label: '绗�12涓伐浣滄棩',
          value: '112'
        },
        {
          children: null,
          label: '绗�13涓伐浣滄棩',
          value: '113'
        },
        {
          children: null,
          label: '绗�14涓伐浣滄棩',
          value: '114'
        },
        {
          children: null,
          label: '绗�15涓伐浣滄棩',
          value: '115'
        },
        {
          children: null,
          label: '绗�16涓伐浣滄棩',
          value: '116'
        },
        {
          children: null,
          label: '绗�17涓伐浣滄棩',
          value: '117'
        },
        {
          children: null,
          label: '绗�18涓伐浣滄棩',
          value: '118'
        },
        {
          children: null,
          label: '绗�19涓伐浣滄棩',
          value: '119'
        },
        {
          children: null,
          label: '绗�20涓伐浣滄棩',
          value: '120'
        },
        {
          children: null,
          label: '绗�21涓伐浣滄棩',
          value: '121'
        },
        {
          children: null,
          label: '绗�22涓伐浣滄棩',
          value: '122'
        },
        {
          children: null,
          label: '绗�23涓伐浣滄棩',
          value: '123'
        },
        {
          children: null,
          label: '绗�24涓伐浣滄棩',
          value: '124'
        }
      ],
      label: '姣忓鐨勭涓変釜鏈�',
      value: '6'
    }
  ],
  catal0002: [
    {
      children: [
        {
          children: null,
          label: '1鍙�',
          value: '0'
        },
        {
          children: [
            {
              children: null,
              label: '1鍙�',
              value: '0'
            },
            {
              children: null,
              label: '2鍙�',
              value: '1'
            },
            {
              children: null,
              label: '3鍙�',
              value: '2'
            },
            {
              children: null,
              label: '4鍙�',
              value: '3'
            },
            {
              children: null,
              label: '5鍙�',
              value: '4'
            },
            {
              children: null,
              label: '6鍙�',
              value: '5'
            },
            {
              children: null,
              label: '7鍙�',
              value: '6'
            },
            {
              children: null,
              label: '8鍙�',
              value: '7'
            },
            {
              children: null,
              label: '9鍙�',
              value: '8'
            },
            {
              children: null,
              label: '10鍙�',
              value: '9'
            },
            {
              children: null,
              label: '11鍙�',
              value: '10'
            },
            {
              children: null,
              label: '12鍙�',
              value: '11'
            },
            {
              children: null,
              label: '13鍙�',
              value: '12'
            },
            {
              children: null,
              label: '14鍙�',
              value: '13'
            },
            {
              children: null,
              label: '15鍙�',
              value: '14'
            },
            {
              children: null,
              label: '16鍙�',
              value: '15'
            },
            {
              children: null,
              label: '17鍙�',
              value: '16'
            },
            {
              children: null,
              label: '18鍙�',
              value: '17'
            },
            {
              children: null,
              label: '19鍙�',
              value: '18'
            },
            {
              children: null,
              label: '20鍙�',
              value: '19'
            },
            {
              children: null,
              label: '21鍙�',
              value: '20'
            },
            {
              children: null,
              label: '22鍙�',
              value: '21'
            },
            {
              children: null,
              label: '23鍙�',
              value: '22'
            },
            {
              children: null,
              label: '24鍙�',
              value: '23'
            },
            {
              children: null,
              label: '25鍙�',
              value: '24'
            },
            {
              children: null,
              label: '26鍙�',
              value: '25'
            },
            {
              children: null,
              label: '27鍙�',
              value: '26'
            },
            {
              children: null,
              label: '28鍙�',
              value: '27'
            },
            {
              children: null,
              label: '29鍙�',
              value: '28'
            },
            {
              children: null,
              label: '30鍙�',
              value: '29'
            },
            {
              children: null,
              label: '31鍙�',
              value: '30'
            }
          ],
          label: '2鍙�',
          value: '1'
        },
        {
          children: [
            {
              children: null,
              label: '1鍙�',
              value: '0'
            },
            {
              children: null,
              label: '2鍙�',
              value: '1'
            },
            {
              children: null,
              label: '3鍙�',
              value: '2'
            },
            {
              children: null,
              label: '4鍙�',
              value: '3'
            },
            {
              children: null,
              label: '5鍙�',
              value: '4'
            },
            {
              children: null,
              label: '6鍙�',
              value: '5'
            },
            {
              children: null,
              label: '7鍙�',
              value: '6'
            },
            {
              children: null,
              label: '8鍙�',
              value: '7'
            },
            {
              children: null,
              label: '9鍙�',
              value: '8'
            },
            {
              children: null,
              label: '10鍙�',
              value: '9'
            },
            {
              children: null,
              label: '11鍙�',
              value: '10'
            },
            {
              children: null,
              label: '12鍙�',
              value: '11'
            },
            {
              children: null,
              label: '13鍙�',
              value: '12'
            },
            {
              children: null,
              label: '14鍙�',
              value: '13'
            },
            {
              children: null,
              label: '15鍙�',
              value: '14'
            },
            {
              children: null,
              label: '16鍙�',
              value: '15'
            },
            {
              children: null,
              label: '17鍙�',
              value: '16'
            },
            {
              children: null,
              label: '18鍙�',
              value: '17'
            },
            {
              children: null,
              label: '19鍙�',
              value: '18'
            },
            {
              children: null,
              label: '20鍙�',
              value: '19'
            },
            {
              children: null,
              label: '21鍙�',
              value: '20'
            },
            {
              children: null,
              label: '22鍙�',
              value: '21'
            },
            {
              children: null,
              label: '23鍙�',
              value: '22'
            },
            {
              children: null,
              label: '24鍙�',
              value: '23'
            },
            {
              children: null,
              label: '25鍙�',
              value: '24'
            },
            {
              children: null,
              label: '26鍙�',
              value: '25'
            },
            {
              children: null,
              label: '27鍙�',
              value: '26'
            },
            {
              children: null,
              label: '28鍙�',
              value: '27'
            },
            {
              children: null,
              label: '29鍙�',
              value: '28'
            },
            {
              children: null,
              label: '30鍙�',
              value: '29'
            },
            {
              children: null,
              label: '31鍙�',
              value: '30'
            }
          ],
          label: '3鍙�',
          value: '2'
        },
        {
          children: [
            {
              children: null,
              label: '1鍙�',
              value: '0'
            },
            {
              children: null,
              label: '2鍙�',
              value: '1'
            },
            {
              children: null,
              label: '3鍙�',
              value: '2'
            },
            {
              children: null,
              label: '4鍙�',
              value: '3'
            },
            {
              children: null,
              label: '5鍙�',
              value: '4'
            },
            {
              children: null,
              label: '6鍙�',
              value: '5'
            },
            {
              children: null,
              label: '7鍙�',
              value: '6'
            },
            {
              children: null,
              label: '8鍙�',
              value: '7'
            },
            {
              children: null,
              label: '9鍙�',
              value: '8'
            },
            {
              children: null,
              label: '10鍙�',
              value: '9'
            },
            {
              children: null,
              label: '11鍙�',
              value: '10'
            },
            {
              children: null,
              label: '12鍙�',
              value: '11'
            },
            {
              children: null,
              label: '13鍙�',
              value: '12'
            },
            {
              children: null,
              label: '14鍙�',
              value: '13'
            },
            {
              children: null,
              label: '15鍙�',
              value: '14'
            },
            {
              children: null,
              label: '16鍙�',
              value: '15'
            },
            {
              children: null,
              label: '17鍙�',
              value: '16'
            },
            {
              children: null,
              label: '18鍙�',
              value: '17'
            },
            {
              children: null,
              label: '19鍙�',
              value: '18'
            },
            {
              children: null,
              label: '20鍙�',
              value: '19'
            },
            {
              children: null,
              label: '21鍙�',
              value: '20'
            },
            {
              children: null,
              label: '22鍙�',
              value: '21'
            },
            {
              children: null,
              label: '23鍙�',
              value: '22'
            },
            {
              children: null,
              label: '24鍙�',
              value: '23'
            },
            {
              children: null,
              label: '25鍙�',
              value: '24'
            },
            {
              children: null,
              label: '26鍙�',
              value: '25'
            },
            {
              children: null,
              label: '27鍙�',
              value: '26'
            },
            {
              children: null,
              label: '28鍙�',
              value: '27'
            },
            {
              children: null,
              label: '29鍙�',
              value: '28'
            },
            {
              children: null,
              label: '30鍙�',
              value: '29'
            },
            {
              children: null,
              label: '31鍙�',
              value: '30'
            }
          ],
          label: '4鍙�',
          value: '3'
        },
        {
          children: null,
          label: '5鍙�',
          value: '4'
        },
        {
          children: null,
          label: '6鍙�',
          value: '5'
        },
        {
          children: null,
          label: '7鍙�',
          value: '6'
        },
        {
          children: null,
          label: '8鍙�',
          value: '7'
        },
        {
          children: null,
          label: '9鍙�',
          value: '8'
        },
        {
          children: null,
          label: '10鍙�',
          value: '9'
        },
        {
          children: null,
          label: '11鍙�',
          value: '10'
        },
        {
          children: null,
          label: '12鍙�',
          value: '11'
        },
        {
          children: null,
          label: '13鍙�',
          value: '12'
        },
        {
          children: null,
          label: '14鍙�',
          value: '13'
        },
        {
          children: null,
          label: '15鍙�',
          value: '14'
        },
        {
          children: null,
          label: '16鍙�',
          value: '15'
        },
        {
          children: null,
          label: '17鍙�',
          value: '16'
        },
        {
          children: null,
          label: '18鍙�',
          value: '17'
        },
        {
          children: null,
          label: '19鍙�',
          value: '18'
        },
        {
          children: null,
          label: '20鍙�',
          value: '19'
        },
        {
          children: null,
          label: '21鍙�',
          value: '20'
        },
        {
          children: null,
          label: '22鍙�',
          value: '21'
        },
        {
          children: null,
          label: '23鍙�',
          value: '22'
        },
        {
          children: null,
          label: '24鍙�',
          value: '23'
        },
        {
          children: null,
          label: '25鍙�',
          value: '24'
        },
        {
          children: null,
          label: '26鍙�',
          value: '25'
        },
        {
          children: null,
          label: '27鍙�',
          value: '26'
        },
        {
          children: null,
          label: '28鍙�',
          value: '27'
        },
        {
          children: null,
          label: '29鍙�',
          value: '28'
        },
        {
          children: null,
          label: '30鍙�',
          value: '29'
        },
        {
          children: null,
          label: '31鍙�',
          value: '30'
        }
      ],
      label: '鎸夋湀',
      value: '0'
    },
    {
      children: null,
      label: '鎸夋棩',
      value: '1'
    },
    {
      children: [
        {
          children: [
            {
              children: null,
              label: '1鍙�',
              value: '0'
            },
            {
              children: null,
              label: '2鍙�',
              value: '1'
            },
            {
              children: null,
              label: '3鍙�',
              value: '2'
            },
            {
              children: null,
              label: '4鍙�',
              value: '3'
            },
            {
              children: null,
              label: '5鍙�',
              value: '4'
            },
            {
              children: null,
              label: '6鍙�',
              value: '5'
            },
            {
              children: null,
              label: '7鍙�',
              value: '6'
            },
            {
              children: null,
              label: '8鍙�',
              value: '7'
            },
            {
              children: null,
              label: '9鍙�',
              value: '8'
            },
            {
              children: null,
              label: '10鍙�',
              value: '9'
            },
            {
              children: null,
              label: '11鍙�',
              value: '10'
            },
            {
              children: null,
              label: '12鍙�',
              value: '11'
            },
            {
              children: null,
              label: '13鍙�',
              value: '12'
            },
            {
              children: null,
              label: '14鍙�',
              value: '13'
            },
            {
              children: null,
              label: '15鍙�',
              value: '14'
            },
            {
              children: null,
              label: '16鍙�',
              value: '15'
            },
            {
              children: null,
              label: '17鍙�',
              value: '16'
            },
            {
              children: null,
              label: '18鍙�',
              value: '17'
            },
            {
              children: null,
              label: '19鍙�',
              value: '18'
            },
            {
              children: null,
              label: '20鍙�',
              value: '19'
            },
            {
              children: null,
              label: '21鍙�',
              value: '20'
            },
            {
              children: null,
              label: '22鍙�',
              value: '21'
            },
            {
              children: null,
              label: '23鍙�',
              value: '22'
            },
            {
              children: null,
              label: '24鍙�',
              value: '23'
            },
            {
              children: null,
              label: '25鍙�',
              value: '24'
            },
            {
              children: null,
              label: '26鍙�',
              value: '25'
            },
            {
              children: null,
              label: '27鍙�',
              value: '26'
            },
            {
              children: null,
              label: '28鍙�',
              value: '27'
            },
            {
              children: null,
              label: '29鍙�',
              value: '28'
            },
            {
              children: null,
              label: '30鍙�',
              value: '29'
            },
            {
              children: null,
              label: '31鍙�',
              value: '30'
            }
          ],
          label: '绗竴鏈�',
          value: '1'
        },
        {
          children: [
            {
              children: null,
              label: '1鍙�',
              value: '0'
            },
            {
              children: null,
              label: '2鍙�',
              value: '1'
            },
            {
              children: null,
              label: '3鍙�',
              value: '2'
            },
            {
              children: null,
              label: '4鍙�',
              value: '3'
            },
            {
              children: null,
              label: '5鍙�',
              value: '4'
            },
            {
              children: null,
              label: '6鍙�',
              value: '5'
            },
            {
              children: null,
              label: '7鍙�',
              value: '6'
            },
            {
              children: null,
              label: '8鍙�',
              value: '7'
            },
            {
              children: null,
              label: '9鍙�',
              value: '8'
            },
            {
              children: null,
              label: '10鍙�',
              value: '9'
            },
            {
              children: null,
              label: '11鍙�',
              value: '10'
            },
            {
              children: null,
              label: '12鍙�',
              value: '11'
            },
            {
              children: null,
              label: '13鍙�',
              value: '12'
            },
            {
              children: null,
              label: '14鍙�',
              value: '13'
            },
            {
              children: null,
              label: '15鍙�',
              value: '14'
            },
            {
              children: null,
              label: '16鍙�',
              value: '15'
            },
            {
              children: null,
              label: '17鍙�',
              value: '16'
            },
            {
              children: null,
              label: '18鍙�',
              value: '17'
            },
            {
              children: null,
              label: '19鍙�',
              value: '18'
            },
            {
              children: null,
              label: '20鍙�',
              value: '19'
            },
            {
              children: null,
              label: '21鍙�',
              value: '20'
            },
            {
              children: null,
              label: '22鍙�',
              value: '21'
            },
            {
              children: null,
              label: '23鍙�',
              value: '22'
            },
            {
              children: null,
              label: '24鍙�',
              value: '23'
            },
            {
              children: null,
              label: '25鍙�',
              value: '24'
            },
            {
              children: null,
              label: '26鍙�',
              value: '25'
            },
            {
              children: null,
              label: '27鍙�',
              value: '26'
            },
            {
              children: null,
              label: '28鍙�',
              value: '27'
            },
            {
              children: null,
              label: '29鍙�',
              value: '28'
            },
            {
              children: null,
              label: '30鍙�',
              value: '29'
            },
            {
              children: null,
              label: '31鍙�',
              value: '30'
            }
          ],
          label: '绗簩鏈�',
          value: '2'
        },
        {
          children: [
            {
              children: null,
              label: '1鍙�',
              value: '0'
            },
            {
              children: null,
              label: '2鍙�',
              value: '1'
            },
            {
              children: null,
              label: '3鍙�',
              value: '2'
            },
            {
              children: null,
              label: '4鍙�',
              value: '3'
            },
            {
              children: null,
              label: '5鍙�',
              value: '4'
            },
            {
              children: null,
              label: '6鍙�',
              value: '5'
            },
            {
              children: null,
              label: '7鍙�',
              value: '6'
            },
            {
              children: null,
              label: '8鍙�',
              value: '7'
            },
            {
              children: null,
              label: '9鍙�',
              value: '8'
            },
            {
              children: null,
              label: '10鍙�',
              value: '9'
            },
            {
              children: null,
              label: '11鍙�',
              value: '10'
            },
            {
              children: null,
              label: '12鍙�',
              value: '11'
            },
            {
              children: null,
              label: '13鍙�',
              value: '12'
            },
            {
              children: null,
              label: '14鍙�',
              value: '13'
            },
            {
              children: null,
              label: '15鍙�',
              value: '14'
            },
            {
              children: null,
              label: '16鍙�',
              value: '15'
            },
            {
              children: null,
              label: '17鍙�',
              value: '16'
            },
            {
              children: null,
              label: '18鍙�',
              value: '17'
            },
            {
              children: null,
              label: '19鍙�',
              value: '18'
            },
            {
              children: null,
              label: '20鍙�',
              value: '19'
            },
            {
              children: null,
              label: '21鍙�',
              value: '20'
            },
            {
              children: null,
              label: '22鍙�',
              value: '21'
            },
            {
              children: null,
              label: '23鍙�',
              value: '22'
            },
            {
              children: null,
              label: '24鍙�',
              value: '23'
            },
            {
              children: null,
              label: '25鍙�',
              value: '24'
            },
            {
              children: null,
              label: '26鍙�',
              value: '25'
            },
            {
              children: null,
              label: '27鍙�',
              value: '26'
            },
            {
              children: null,
              label: '28鍙�',
              value: '27'
            },
            {
              children: null,
              label: '29鍙�',
              value: '28'
            },
            {
              children: null,
              label: '30鍙�',
              value: '29'
            },
            {
              children: null,
              label: '31鍙�',
              value: '30'
            }
          ],
          label: '绗笁鏈�',
          value: '3'
        }
      ],
      label: '鎸夊',
      value: '2'
    }
  ]
}

// 灞炴�ц〃鏍间俊鎭�
export const allAttributetable = {
  grp020100: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '2200001005'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧閿�鍞晢鍙傛暟'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryAgencyList\"}',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000062'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0085',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000167'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鐢宠喘璧勯噾浜ゆ敹鏂瑰紡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鐢宠喘璧勯噾浜ゆ敹鏂瑰紡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0086',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000168'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '璧庡洖璧勯噾浜ゆ敹鏂瑰紡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璧庡洖璧勯噾浜ゆ敹鏂瑰紡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0087',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000169'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '璁よ喘娆惧埌璐︽柟寮�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璁よ喘娆惧埌璐︽柟寮�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0088',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000170'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: 'T锛媙鏂瑰紡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: 'T锛媙鏂瑰紡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0089',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000171'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鍚庢敹璐瑰垎鎴愭ā寮�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍚庢敹璐瑰垎鎴愭ā寮�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0090',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000108'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鍚庢敹璐硅绠楁ā寮�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍚庢敹璐硅绠楁ā寮�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0091',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000173'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞湇鍔¤垂璁＄畻鏂瑰紡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞湇鍔¤垂璁＄畻鏂瑰紡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0092',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1200000174'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: 'T+N浜у搧缁熻妯″紡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: 'T+N浜у搧缁熻妯″紡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0.00'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000175'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�灏忕幇閲戠孩鍒�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�灏忕幇閲戠孩鍒�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 100,
              minLength: null,
              precision: 6,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000176'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞湇鍔¤垂璐圭巼锛�%锛�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞湇鍔¤垂璐圭巼锛�%锛�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000177'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '涓撴埛浜у搧鏈�澶ц处鎴锋暟'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '涓撴埛浜у搧鏈�澶ц处鎴锋暟'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '13',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0009',
            value: 'A銆丅'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1300000021'
          },
          displayType: {
            moduleType: null,
            value: '13'
          },
          attributeDesc: {
            moduleType: null,
            value: '浠ｉ攢浠介绫诲埆'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '浠ｉ攢浠介绫诲埆'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0094',
            value: '2'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000179'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈嶅姟璐规敮浠橀鐜�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈嶅姟璐规敮浠橀鐜�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0095',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000180'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '纭潈鐢宠寮�閫氭爣蹇�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '纭潈鐢宠寮�閫氭爣蹇�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0010',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000181'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏄惁鍏佽鍙戣捣杩濈害璧庡洖'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏄惁鍏佽鍙戣捣杩濈害璧庡洖'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0010',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000163'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏄惁鍙備笌淇濊瘉閲戠悊璐�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏄惁鍙備笌淇濊瘉閲戠悊璐�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0010',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000185'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '07鏂囦欢鏄惁闅愯棌鎬绘敹鐩婃�讳唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '07鏂囦欢鏄惁闅愯棌鎬绘敹鐩婃�讳唤棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0010',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1200000186'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏍稿鐢靛瓙鍚堝悓锛堜腑鐧绘ā寮忥級'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏍稿鐢靛瓙鍚堝悓锛堜腑鐧绘ā寮忥級'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0010',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1200000187'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鐢靛瓙鍚堝悓鎺у埗浜ゆ槗锛堜腑鐧绘ā寮忥級'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鐢靛瓙鍚堝悓鎺у埗浜ゆ槗锛堜腑鐧绘ā寮忥級'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0103',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1200000188'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鐢靛瓙鍚堝悓鎺у埗浜ゆ槗瑙勫垯锛堜腑鐧绘ā寮忥級'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鐢靛瓙鍚堝悓鎺у埗浜ゆ槗瑙勫垯锛堜腑鐧绘ā寮忥級'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0010',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1200000189'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鐢靛瓙鍚堝悓蹇呴』瀹屽叏鏍稿畬锛堢鐞嗕汉妯″紡锛�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鐢靛瓙鍚堝悓蹇呴』瀹屽叏鏍稿畬锛堢鐞嗕汉妯″紡锛�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0010',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1200000190'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鐢靛瓙鍚堝悓鎺у埗浜ゆ槗锛堢鐞嗕汉妯″紡锛�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鐢靛瓙鍚堝悓鎺у埗浜ゆ槗锛堢鐞嗕汉妯″紡锛�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000191'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�闀块『寤跺ぉ鏁帮紙绠＄悊浜烘ā寮忥級'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�闀块『寤跺ぉ鏁帮紙绠＄悊浜烘ā寮忥級'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '14',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 8,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '3'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000192'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '绛剧害璧峰鏃ユ湡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '绛剧害璧峰鏃ユ湡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '14',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 8,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '3'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000193'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞湇鍔¤垂璧峰鏃ユ湡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞湇鍔¤垂璧峰鏃ユ湡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '14',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 8,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '3'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000194'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞湇鍔¤垂鎴鏃ユ湡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞湇鍔¤垂鎴鏃ユ湡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000227'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '璁よ喘鎬婚搴﹂檺鍒�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璁よ喘鎬婚搴﹂檺鍒�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000228'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鍑�鐢宠喘棰濆害闄愬埗'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍑�鐢宠喘棰濆害闄愬埗'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 100,
              minLength: null,
              precision: 6,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000229'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '宸ㄩ鐢宠喘姣斾緥闄愬埗锛�%锛�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '宸ㄩ鐢宠喘姣斾緥闄愬埗锛�%锛�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 100,
              minLength: null,
              precision: 6,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000230'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '宸ㄩ璧庡洖姣斾緥闄愬埗锛�%锛�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '宸ㄩ璧庡洖姣斾緥闄愬埗锛�%锛�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000231'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞晢鏈�楂橀噾棰濊妯�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞晢鏈�楂橀噾棰濊妯�'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧閿�鍞晢鍙傛暟'
      }
    }
  ],
  grp010901: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 0
      },
      attributeValue: {
        moduleType: '18',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'catal0002',
        value: '1//'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '2300000223'
      },
      displayType: {
        moduleType: null,
        value: '23'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏀剁泭鍏戜粯棰戠巼/鏈粯鏀剁泭鍏戜粯鏈�/璐у竵浜у搧鏀剁泭鍏戜粯鏃ユ湡'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: '19',
            value: null
          },
          attributeValue: {
            moduleType: '19',
            value: null
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: '19',
            value: null
          },
          requiredFlag: {
            moduleType: '19',
            value: null
          },
          attributeCode: {
            moduleType: null,
            value: '1100000158'
          },
          displayType: {
            moduleType: '19',
            value: null
          },
          attributeDesc: {
            moduleType: null,
            value: '鏀剁泭鍏戜粯棰戠巼'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏀剁泭鍏戜粯棰戠巼'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: '19',
            value: null
          },
          attributeValue: {
            moduleType: '19',
            value: null
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: '19',
            value: null
          },
          requiredFlag: {
            moduleType: '19',
            value: null
          },
          attributeCode: {
            moduleType: null,
            value: '1100000160'
          },
          displayType: {
            moduleType: '19',
            value: null
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈粯鏀剁泭鍏戜粯鏈�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈粯鏀剁泭鍏戜粯鏈�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: '19',
            value: null
          },
          attributeValue: {
            moduleType: '19',
            value: null
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: '19',
            value: null
          },
          requiredFlag: {
            moduleType: '19',
            value: null
          },
          attributeCode: {
            moduleType: null,
            value: '1100000161'
          },
          displayType: {
            moduleType: '19',
            value: null
          },
          attributeDesc: {
            moduleType: null,
            value: '璐у竵浜у搧鏀剁泭鍏戜粯鏃ユ湡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璐у竵浜у搧鏀剁泭鍏戜粯鏃ユ湡'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '鏀剁泭鍏戜粯棰戠巼/鏈粯鏀剁泭鍏戜粯鏈�/璐у竵浜у搧鏀剁泭鍏戜粯鏃ユ湡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91001
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0069',
        value: '3'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000149'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璧庡洖銆佽浆鎹笟鍔″甫璧版敹鐩婅鍒�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璧庡洖銆佽浆鎹笟鍔″甫璧版敹鐩婅鍒�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91002
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000150'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '浼氳鏀剁泭姣忓ぉ缁撹浆鎴愪唤棰�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浼氳鏀剁泭姣忓ぉ缁撹浆鎴愪唤棰�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91003
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000151'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈粯鏀剁泭鍙備笌鏀剁泭鍒嗛厤'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈粯鏀剁泭鍙備笌鏀剁泭鍒嗛厤'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91004
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000152'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鎶曡祫浜ゆ槗鏀剁泭姣忓ぉ缁撹浆鎴愪唤棰�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鎶曡祫浜ゆ槗鏀剁泭姣忓ぉ缁撹浆鎴愪唤棰�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91005
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000153'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏂板鏀剁泭鎸夊垎绾㈠缁欐姇璧勪氦鏄�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏂板鏀剁泭鎸夊垎绾㈠缁欐姇璧勪氦鏄�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91006
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0074',
        value: '2'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000154'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏀剁泭灏惧樊澶勭悊鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏀剁泭灏惧樊澶勭悊鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91007
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0075',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000155'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璐︽埛鏀剁泭鍒嗛厤鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璐︽埛鏀剁泭鍒嗛厤鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91008
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000156'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '褰撴棩鏂板鏀剁泭鏄惁鍙備笌鍏戜粯'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '褰撴棩鏂板鏀剁泭鏄惁鍙備笌鍏戜粯'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91009
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000157'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍒嗙孩鏁版嵁涓嶅缁欐姇璧勪氦鏄�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍒嗙孩鏁版嵁涓嶅缁欐姇璧勪氦鏄�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91011
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0079',
        value: '2'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000159'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '姣忔棩缁撹浆妯″紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '姣忔棩缁撹浆妯″紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91014
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0081',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000162'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈粯鏀剁泭鍏戜粯鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈粯鏀剁泭鍏戜粯鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91015
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000163'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁淇濊瘉閲戠悊璐骇鍝�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁淇濊瘉閲戠悊璐骇鍝�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91016
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000164'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁寰佹敹寮哄埗璧庡洖璐�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁寰佹敹寮哄埗璧庡洖璐�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 91017
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000165'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁鏃ョ粨璐у竵'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁鏃ョ粨璐у竵'
      }
    }
  ],
  grp060000: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '2200001009'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: 'T+0浜у搧寮�鏀炬湡鏃ラ棿娓呯畻鏃堕棿琛�'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '16',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 6,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '4'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000220'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: 'T+0浜у搧鏃ラ棿娓呯畻寮�濮嬫椂闂�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: 'T+0浜у搧鏃ラ棿娓呯畻寮�濮嬫椂闂�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '16',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 6,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '4'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000221'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: 'T+0浜у搧鏃ラ棿娓呯畻缁撴潫鏃堕棿'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: 'T+0浜у搧鏃ラ棿娓呯畻缁撴潫鏃堕棿'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: 'T+0浜у搧寮�鏀炬湡鏃ラ棿娓呯畻鏃堕棿琛�'
      }
    }
  ],
  grp040000: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '2200001007'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: 'T+0浜у搧鏂规璁剧疆'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryAgencyList\",\"optionAll:\"true\"}',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000062'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0107',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000209'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '璁㈠崟绯荤粺娓呯畻娴佺▼妯″紡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璁㈠崟绯荤粺娓呯畻娴佺▼妯″紡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0010',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1200000210'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鐢宠喘鏃ユ槸鍚︽湁鏀剁泭'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鐢宠喘鏃ユ槸鍚︽湁鏀剁泭'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0010',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1200000211'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏀剁泭鏄惁姣忔棩缁撹浆鎴愪唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏀剁泭鏄惁姣忔棩缁撹浆鎴愪唤棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0010',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000212'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏄惁鏀寔浠介鍙樺寲娴佹按'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏄惁鏀寔浠介鍙樺寲娴佹按'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0111',
            value: '2'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000213'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鑺傚亣鏃ユ敹鐩婂垎閰嶆柟寮�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鑺傚亣鏃ユ敹鐩婂垎閰嶆柟寮�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0010',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000026'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏄惁涓轰綑棰濈悊璐�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏄惁涓轰綑棰濈悊璐�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0010',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000215'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀹㈡湇鎺ュ彛鏄惁瀵煎嚭鏁版嵁'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀹㈡湇鎺ュ彛鏄惁瀵煎嚭鏁版嵁'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0010',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000216'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏀寔涓嬪彂02/04鏂囦欢'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏀寔涓嬪彂02/04鏂囦欢'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0010',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000217'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鍨祫鎴锋槸鍚﹀弬涓庢敹鐩婂垎閰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍨祫鎴锋槸鍚﹀弬涓庢敹鐩婂垎閰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0116',
            value: '1'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000218'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '蹇�熻繃鎴锋椂鍨祫鎴锋敹鐩婅繑杩樿绠楁柟寮�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '蹇�熻繃鎴锋椂鍨祫鎴锋敹鐩婅繑杩樿绠楁柟寮�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0010',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000219'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鍏ㄩ儴璧庡洖鏄惁甯﹁蛋鏀剁泭'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍏ㄩ儴璧庡洖鏄惁甯﹁蛋鏀剁泭'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '16',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 6,
              required: false
            },
            dataSource: null,
            value: '090000'
          },
          dataType: {
            moduleType: null,
            value: '4'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000224'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀹炴椂浜ゆ槗寮�濮嬫椂闂�(鏍煎紡HHMMSS)'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀹炴椂浜ゆ槗寮�濮嬫椂闂�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '16',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 6,
              required: false
            },
            dataSource: null,
            value: '150000'
          },
          dataType: {
            moduleType: null,
            value: '4'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000225'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀹炴椂浜ゆ槗鎴鏃堕棿(鏍煎紡HHMMSS)'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀹炴椂浜ゆ槗鎴鏃堕棿'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000226'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '姣忔棩绱蹇�熻祹鍥炴渶澶т唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '姣忔棩绱蹇�熻祹鍥炴渶澶т唤棰�'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: 'T+0浜у搧鏂规璁剧疆'
      }
    }
  ],
  grp010301: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 31001
      },
      attributeValue: {
        moduleType: '16',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 6,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '4'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000083'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '璁よ喘鎴鏃堕棿(鏍煎紡HHMMSS)'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璁よ喘鎴鏃堕棿'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 31002
      },
      attributeValue: {
        moduleType: '16',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 6,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '4'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000084'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '寮�鏀炬湡浜ゆ槗鎴鏃堕棿(鏍煎紡HHMMSS)'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '寮�鏀炬湡浜ゆ槗鎴鏃堕棿'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31003
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0022',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000085'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璁よ喘鍒╂伅澶勭悊鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璁よ喘鍒╂伅澶勭悊鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 31004
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0023',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000086'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璧庡洖浠介鏄庣粏澶勭悊鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璧庡洖浠介鏄庣粏澶勭悊鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31005
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0024',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000087'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '杞崲浠介鏄庣粏澶勭悊鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '杞崲浠介鏄庣粏澶勭悊鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31006
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000088'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁鍏堣繘琛屾槑缁嗙簿搴﹀鐞�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁鍏堣繘琛屾槑缁嗙簿搴﹀鐞�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31007
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000089'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍙備笌鍗囬檷绾х被鍨�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍙備笌鍗囬檷绾х被鍨�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31008
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0027',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000090'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '寮哄埗璧庡洖鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '寮哄埗璧庡洖鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31009
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0028',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000091'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '绾у樊鐨勫鐞嗘柟寮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '绾у樊鐨勫鐞嗘柟寮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31010
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0029',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000092'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '淇濇湰鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '淇濇湰鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31011
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0030',
        value: '9'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000093'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '寮�閫氫氦鏄撴墍浜ゆ槗鏍囧織'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '寮�閫氫氦鏄撴墍浜ゆ槗鏍囧織'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 31012
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000094'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁鍥哄畾鍒嗙孩鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁鍥哄畾鍒嗙孩鏂瑰紡'
      }
    }
  ],
  grp010103: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 13001
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0013',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000030'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '閰嶅敭鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '閰嶅敭鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 13002
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 999999999,
          minLength: null,
          precision: 4,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: '1'
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000031'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍙戣浠锋牸'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍙戣浠锋牸'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 13003
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 9999999999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000032'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '璁よ喘鏈熼檺(澶�)'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璁よ喘鏈熼檺(澶�)'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 13004
      },
      attributeValue: {
        moduleType: '15',
        editable: true,
        rule: {
          min: 0,
          max: 99999999999999,
          minLength: null,
          precision: 2,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000033'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈�浣庡嫙闆嗛噾棰�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈�浣庡嫙闆嗛噾棰�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 13005
      },
      attributeValue: {
        moduleType: '15',
        editable: true,
        rule: {
          min: 0,
          max: 99999999999999,
          minLength: null,
          precision: 2,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000034'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈�楂樺嫙闆嗛噾棰�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈�楂樺嫙闆嗛噾棰�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 13006
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 99999999999999,
          minLength: null,
          precision: 2,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000035'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '瀹為檯鍕熼泦閲戦'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瀹為檯鍕熼泦閲戦'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 13007
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 100,
          minLength: null,
          precision: 6,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000036'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧鎴愮珛纭姣斾緥锛�%锛�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧鎴愮珛纭姣斾緥锛�%锛�'
      }
    }
  ],
  grp010401: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 41001
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0048',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000113'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璐圭敤鐨勭簿搴﹀鐞嗘柟寮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璐圭敤鐨勭簿搴﹀鐞嗘柟寮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 41002
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0048',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000114'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '閲戦鐨勭簿搴﹀鐞嗘柟寮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '閲戦鐨勭簿搴﹀鐞嗘柟寮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 41003
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0048',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000115'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '浠介鐨勭簿搴﹀鐞嗘柟寮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浠介鐨勭簿搴﹀鐞嗘柟寮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 41004
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0048',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000116'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍒嗙孩鐨勭簿搴﹀鐞嗘柟寮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍒嗙孩鐨勭簿搴﹀鐞嗘柟寮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 41005
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0048',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000117'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍒╂伅鐨勭簿搴﹀鐞嗘柟寮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍒╂伅鐨勭簿搴﹀鐞嗘柟寮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 41006
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0048',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000118'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '褰掕祫浜ц垂鐢ㄧ殑绮惧害澶勭悊鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '褰掕祫浜ц垂鐢ㄧ殑绮惧害澶勭悊鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 41007
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0048',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000119'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏀剁泭鐜囩殑绮惧害澶勭悊鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏀剁泭鐜囩殑绮惧害澶勭悊鏂瑰紡'
      }
    }
  ],
  grp010302: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 32001
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0032',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000095'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '灏侀棴浜у搧纭瑙勫垯'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '灏侀棴浜у搧纭瑙勫垯'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 32002
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000096'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍒嗙孩鍐嶆姇浠介鏄惁鐢熸垚鏄庣粏'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍒嗙孩鍐嶆姇浠介鏄惁鐢熸垚鏄庣粏'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 32003
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0034',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1200000097'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '灏侀棴鍛ㄦ湡鍗曚綅'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '灏侀棴鍛ㄦ湡鍗曚綅'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 32004
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 9999999999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000098'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '灏侀棴鍛ㄦ湡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '灏侀棴鍛ㄦ湡'
      }
    }
  ],
  grp010104: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 14001
      },
      attributeValue: {
        moduleType: '14',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 8,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '3'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000037'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍕熼泦璧峰鏃ユ湡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍕熼泦璧峰鏃ユ湡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 14002
      },
      attributeValue: {
        moduleType: '14',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 8,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '3'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000038'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍕熼泦缁撴潫鏃ユ湡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍕熼泦缁撴潫鏃ユ湡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 14003
      },
      attributeValue: {
        moduleType: '14',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 8,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '3'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000039'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鎴愮珛鏃ユ湡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鎴愮珛鏃ユ湡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 14004
      },
      attributeValue: {
        moduleType: '14',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 8,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '3'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000040'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '灏侀棴缁撴潫鏃ユ湡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '灏侀棴缁撴潫鏃ユ湡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 14005
      },
      attributeValue: {
        moduleType: '14',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 8,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '3'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000041'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍕熼泦澶辫触鏃ユ湡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍕熼泦澶辫触鏃ユ湡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 14006
      },
      attributeValue: {
        moduleType: '14',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 8,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '3'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000042'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍒版湡鏃ユ湡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍒版湡鏃ユ湡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 14007
      },
      attributeValue: {
        moduleType: '14',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 8,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '3'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000043'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '灏侀棴寮忚嚜鍔ㄦ竻鐩樻棩鏈�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '灏侀棴寮忚嚜鍔ㄦ竻鐩樻棩鏈�'
      }
    }
  ],
  grp010101: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11001
      },
      attributeValue: {
        moduleType: '11',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 20,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000001'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧浠ｇ爜'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧浠ｇ爜'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11002
      },
      attributeValue: {
        moduleType: '11',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 100,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000002'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧鍚嶇О'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧鍚嶇О',
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11003
      },
      attributeValue: {
        moduleType: '11',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 100,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000003'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧鑻辨枃鍚嶇О'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧鑻辨枃鍚嶇О'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11004
      },
      attributeValue: {
        moduleType: '11',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 1000,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000004'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧鎻忚堪'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧鎻忚堪'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11005
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: '{\"className: \"dataCenterServiceImpl\",\"methodName:\"queryCurrencyList\"}',
        value: 'CNY'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000005'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '甯佺'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '甯佺'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11006
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 9,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: '4'
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000006'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍑�鍊肩簿搴�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍑�鍊肩簿搴�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11007
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0001',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000007'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '榛樿鍒嗙孩鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '榛樿鍒嗙孩鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11008
      },
      attributeValue: {
        moduleType: '13',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0002',
        value: '0,1,2'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1300000008'
      },
      displayType: {
        moduleType: null,
        value: '13'
      },
      attributeDesc: {
        moduleType: null,
        value: '閿�鍞璞�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '閿�鍞璞�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11009
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0003',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000009'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧鐘舵��'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧鐘舵��'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 11010
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 100,
          minLength: null,
          precision: 6,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000010'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '绠＄悊璐硅鎻愭瘮渚嬶紙%锛�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '绠＄悊璐硅鎻愭瘮渚嬶紙%锛�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11011
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: '{\"className: \"dataCenterServiceImpl\",\"methodName:\"queryWorkingCalendarList\"}',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000011'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧鍙板巻浠ｇ爜'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧鍙板巻浠ｇ爜'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11012
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryTrusteeList\"}',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1200000012'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鎵樼琛屼唬鐮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鎵樼琛屼唬鐮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 11013
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryTrusteeList\"}',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1200000013'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍥藉鎵樼琛屼唬鐮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍥藉鎵樼琛屼唬鐮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 11014
      },
      attributeValue: {
        moduleType: '11',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 20,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000014'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧鐧昏缂栫爜'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧鐧昏缂栫爜'
      }
    }
  ],
  grp010201: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '2200001001'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: '涓埛浜ゆ槗闄愬埗'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0020',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000061'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀹㈡埛绫诲瀷'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀹㈡埛绫诲瀷'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryAgencyList\",\"optionAll:\"true\"}',
            value: '***'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000062'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000063'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '棣栨鎶曡祫鏈�浣庨噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '棣栨鎶曡祫鏈�浣庨噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000064'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�灏戣拷鍔犻噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�灏戣拷鍔犻噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000065'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�楂樿璐檺棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�楂樿璐檺棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000066'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�楂樻寔鏈夐噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�楂樻寔鏈夐噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 100,
              minLength: null,
              precision: 6,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000067'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�楂樻寔鏈夋瘮渚嬶紙%锛�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�楂樻寔鏈夋瘮渚嬶紙%锛�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000068'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '澶ч鐢宠喘鏈�楂橀噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '澶ч鐢宠喘鏈�楂橀噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 1,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000069'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '澶ч鐢宠喘鏄惁鍖呭惈杞崲鍏�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '澶ч鐢宠喘鏄惁鍖呭惈杞崲鍏�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000070'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀹氭湡瀹氶鏈�浣庨噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀹氭湡瀹氶鏈�浣庨噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000071'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀹氭湡瀹氶鏈�楂橀噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀹氭湡瀹氶鏈�楂橀噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000072'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀹氭湡瀹氶璧庡洖鏈�浣庝唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀹氭湡瀹氶璧庡洖鏈�浣庝唤棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000073'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '杞崲鍏ユ渶浣庨噾棰濓紙鍚垂锛�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '杞崲鍏ユ渶浣庨噾棰濓紙鍚垂锛�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000074'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�浣庤浆鎹唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�浣庤浆鎹唤棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000075'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�浣庤祹鍥炰唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�浣庤祹鍥炰唤棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000076'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '绾у樊閲戦'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '绾у樊閲戦'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000077'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�浣庤处闈唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�浣庤处闈唤棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000078'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�浣庤处闈㈤噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�浣庤处闈㈤噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000079'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�澶х敵璐噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�澶х敵璐噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000080'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '褰撴棩绱鏈�澶х敵璐噾棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '褰撴棩绱鏈�澶х敵璐噾棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000081'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�澶ц祹鍥炰唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�澶ц祹鍥炰唤棰�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 99999999999999,
              minLength: null,
              precision: 2,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000082'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '褰撴棩绱鏈�澶ц祹鍥炰唤棰�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '褰撴棩绱鏈�澶ц祹鍥炰唤棰�'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '涓埛浜ゆ槗闄愬埗'
      }
    }
  ],
  grp010102: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 12001
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0004',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000015'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧绫诲埆'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧绫诲埆'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 12002
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0005',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000016'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鎶曡祫鏂瑰悜'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鎶曡祫鏂瑰悜'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 12003
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0006',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000017'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '杩愪綔鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '杩愪綔鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 12004
      },
      attributeValue: {
        moduleType: '11',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 4000,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000018'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: 'FOF浜у搧涓撶敤璐﹀彿'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: 'FOF浜у搧涓撶敤璐﹀彿'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 12005
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0007',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000019'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鎶曡祫鍖哄煙'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鎶曡祫鍖哄煙'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 12006
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0008',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000020'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧椋庨櫓绛夌骇'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧椋庨櫓绛夌骇'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 12007
      },
      attributeValue: {
        moduleType: '13',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0009',
        value: 'A,B'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1300000021'
      },
      displayType: {
        moduleType: null,
        value: '13'
      },
      attributeDesc: {
        moduleType: null,
        value: '浠介绫诲埆'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浠介绫诲埆'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 12008
      },
      attributeValue: {
        moduleType: '15',
        editable: true,
        rule: {
          min: 0,
          max: 999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000022'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鐢宠纭澶╂暟锛堢敵璐強鍏朵粬浜ゆ槗锛変笉鍚璐�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鐢宠纭澶╂暟锛堢敵璐強鍏朵粬浜ゆ槗锛変笉鍚璐�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 12009
      },
      attributeValue: {
        moduleType: '15',
        editable: true,
        rule: {
          min: 0,
          max: 999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000023'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '璧庡洖纭澶╂暟'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璧庡洖纭澶╂暟'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 12010
      },
      attributeValue: {
        moduleType: '11',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 20,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000024'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍏昏�侀噾浜у搧浠ｇ爜'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍏昏�侀噾浜у搧浠ｇ爜'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 12011
      },
      attributeValue: {
        moduleType: '11',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 20,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000025'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '瀵瑰浜у搧浠ｇ爜'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瀵瑰浜у搧浠ｇ爜'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 12012
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000026'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁涓轰綑棰濆疂'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁涓轰綑棰濆疂'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 12013
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0011',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000027'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁浜掕'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁浜掕'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 12014
      },
      attributeValue: {
        moduleType: '11',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 20,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000028'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '璺ㄥ閿�鍞殑浜у搧浠ｇ爜'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璺ㄥ閿�鍞殑浜у搧浠ｇ爜'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 12015
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000029'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁杩涘叆娓呯洏鏈�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁杩涘叆娓呯洏鏈�'
      }
    }
  ],
  grp010701: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '2200001004'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: '鎶曡祫缁忕悊'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0118',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000133'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鎶曡祫缁忕悊璇佷欢绫诲瀷'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鎶曡祫缁忕悊璇佷欢绫诲瀷'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 40,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000134'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鎶曡祫缁忕悊璇佷欢鍙风爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鎶曡祫缁忕悊璇佷欢鍙风爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 100,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000135'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鎶曡祫缁忕悊濮撳悕'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鎶曡祫缁忕悊濮撳悕'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '鎶曡祫缁忕悊'
      }
    }
  ],
  grp010305: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 35001
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000103'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '棣栨鎶曡祫鏄惁鍖呭惈璐圭敤'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '棣栨鎶曡祫鏄惁鍖呭惈璐圭敤'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 35002
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000104'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '杩藉姞鎶曡祫鏄惁鍖呭惈璐圭敤'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '杩藉姞鎶曡祫鏄惁鍖呭惈璐圭敤'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 35003
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0040',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000105'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璐圭巼鍚堝苟鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璐圭巼鍚堝苟鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 35004
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0041',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000106'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璐圭巼璁＄畻鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璐圭巼璁＄畻鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 35005
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0042',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000107'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璁ょ敵璐垂鐢ㄨ绠楁柟寮�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璁ょ敵璐垂鐢ㄨ绠楁柟寮�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 35006
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0043',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000108'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍚庢敹璐圭敤璁＄畻鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍚庢敹璐圭敤璁＄畻鏂瑰紡'
      }
    }
  ],
  grp010801: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 81001
      },
      attributeValue: {
        moduleType: '15',
        editable: true,
        rule: {
          min: 0,
          max: 9999999999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000136'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈�澶ц处鎴锋暟'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈�澶ц处鎴锋暟'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 81002
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0058',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000137'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鎴锋暟闄愬埗澶勭悊鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鎴锋暟闄愬埗澶勭悊鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81003
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000138'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍒嗛攢鍞晢鎺у埗鏈�澶ф埛鏁�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍒嗛攢鍞晢鎺у埗鏈�澶ф埛鏁�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81004
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000139'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鎴锋暟闄愬埗涓洿閿�浼樺厛'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鎴锋暟闄愬埗涓洿閿�浼樺厛'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81005
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0061',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000140'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璧庡洖鎸佹湁澶╂暟璁＄畻鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璧庡洖鎸佹湁澶╂暟璁＄畻鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81006
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0062',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000141'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '灏侀棴鏈熸竻绠楅鐜�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '灏侀棴鏈熸竻绠楅鐜�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81007
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0063',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000142'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍒╂伅璁＄畻鏄惁鍚垂'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍒╂伅璁＄畻鏄惁鍚垂'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81008
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000143'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '杩濈害璧庡洖鏄惁鏀跺彇浜ゆ槗璐�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '杩濈害璧庡洖鏄惁鏀跺彇浜ゆ槗璐�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81009
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0065',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000144'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '寮�鏀炬湡鐢宠喘浠介鏄惁鍙敤'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '寮�鏀炬湡鐢宠喘浠介鏄惁鍙敤'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81010
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000145'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璧庡洖鏈�浣庤处闈㈤噾棰濆惈鏀剁泭'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璧庡洖鏈�浣庤处闈㈤噾棰濆惈鏀剁泭'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81011
      },
      attributeValue: {
        moduleType: '11',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: 0,
          precision: null,
          maxLength: 20,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '1'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000146'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '涓撴埛浠ｇ爜'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '涓撴埛浠ｇ爜'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81012
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0067',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000147'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '宸ㄩ璧庡洖椤哄欢鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '宸ㄩ璧庡洖椤哄欢鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 81013
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0068',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000148'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '涓撴埛浜у搧杞崲闄愬埗鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '涓撴埛浜у搧杞崲闄愬埗鏂瑰紡'
      }
    }
  ],
  grp010306: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 36001
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0044',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000109'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '澶ч浜ゆ槗闄愬埗鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '澶ч浜ゆ槗闄愬埗鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 36002
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0045',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000110'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏄惁鍖呭惈浜у搧杞崲'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏄惁鍖呭惈浜у搧杞崲'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 36003
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0046',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000111'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '瀵瑰垎绾т骇鍝佹槸鍚﹀悎骞跺垽鏂�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瀵瑰垎绾т骇鍝佹槸鍚﹀悎骞跺垽鏂�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 36004
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0047',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000112'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '澶ч浜ゆ槗瓒呴檺纭鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '澶ч浜ゆ槗瓒呴檺纭鏂瑰紡'
      }
    }
  ],
  grp010501: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '2200001002'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍒╂伅璁＄畻鍙傛暟'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryAgencyList\",\"optionAll:\"true\"}',
            value: '***'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000062'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0055',
            value: '0'
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000121'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '鍒╃巼绫诲瀷'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍒╃巼绫诲瀷'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 1000,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: '0'
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000122'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '璁℃伅璧峰澶╂暟'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璁℃伅璧峰澶╂暟'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '14',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 8,
              required: true
            },
            dataSource: null,
            value: '19000101'
          },
          dataType: {
            moduleType: null,
            value: '3'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000123'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '璁℃伅鎴鏃ユ湡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璁℃伅鎴鏃ユ湡'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 8,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000124'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '璁よ喘鍒╂伅閫�杩樻棩'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璁よ喘鍒╂伅閫�杩樻棩'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '鍒╂伅璁＄畻鍙傛暟'
      }
    }
  ],
  grp010303: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 0
      },
      attributeValue: {
        moduleType: '18',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'catal0001',
        value: '0/'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '2300000222'
      },
      displayType: {
        moduleType: null,
        value: '23'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍑�鍊煎叕甯冮鐜�/鍑�鍊煎叕甯冩棩'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: '19',
            value: null
          },
          attributeValue: {
            moduleType: '19',
            value: null
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: '19',
            value: null
          },
          requiredFlag: {
            moduleType: '19',
            value: null
          },
          attributeCode: {
            moduleType: null,
            value: '1100000100'
          },
          displayType: {
            moduleType: '19',
            value: null
          },
          attributeDesc: {
            moduleType: null,
            value: '鍑�鍊煎叕甯冮鐜�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍑�鍊煎叕甯冮鐜�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: '19',
            value: null
          },
          attributeValue: {
            moduleType: '19',
            value: null
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: '19',
            value: null
          },
          requiredFlag: {
            moduleType: '19',
            value: null
          },
          attributeCode: {
            moduleType: null,
            value: '1100000101'
          },
          displayType: {
            moduleType: '19',
            value: null
          },
          attributeDesc: {
            moduleType: null,
            value: '鍑�鍊煎叕甯冩棩'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍑�鍊煎叕甯冩棩'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '鍑�鍊煎叕甯冮鐜�/鍑�鍊煎叕甯冩棩'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 33001
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0010',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000099'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍑�鍊煎鍏ユ槸鍚︽牎楠屼唤棰�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍑�鍊煎鍏ユ槸鍚︽牎楠屼唤棰�'
      }
    }
  ],
  grp010105: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15001
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0014',
        value: '2'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000044'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '瓒呴鐢宠喘鍒ゆ柇'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瓒呴鐢宠喘鍒ゆ柇'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15002
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0015',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000045'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '瓒呴鐢宠喘澶勭悊妯″紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瓒呴鐢宠喘澶勭悊妯″紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15003
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0010',
        value: '1'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000046'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '瓒呴璁ょ敵璐槸鍚﹂儴鍒嗙‘璁�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瓒呴璁ょ敵璐槸鍚﹂儴鍒嗙‘璁�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15004
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 99999999999999,
          minLength: null,
          precision: 2,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000047'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈�楂樹唤棰濊妯�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈�楂樹唤棰濊妯�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 15005
      },
      attributeValue: {
        moduleType: '15',
        editable: true,
        rule: {
          min: 0,
          max: 99999999999999,
          minLength: null,
          precision: 2,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000048'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈�楂橀噾棰濊妯�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈�楂橀噾棰濊妯�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 15006
      },
      attributeValue: {
        moduleType: '15',
        editable: true,
        rule: {
          min: 0,
          max: 99999999999999,
          minLength: null,
          precision: 2,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000049'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '褰撴棩鏈�澶у噣鐢宠喘閲戦'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '褰撴棩鏈�澶у噣鐢宠喘閲戦'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15007
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 100,
          minLength: null,
          precision: 6,
          maxLength: null,
          required: true
        },
        dataSource: null,
        value: '0'
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000050'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '瓒呴鐢宠喘纭姣斾緥锛�%锛�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瓒呴鐢宠喘纭姣斾緥锛�%锛�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 15008
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0017',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000051'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '宸ㄩ璧庡洖澶勭悊鏂瑰紡'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '宸ㄩ璧庡洖澶勭悊鏂瑰紡'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 15009
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0010',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1200000052'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '宸ㄩ璧庡洖鏄惁璋冩暣姣斾緥'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '宸ㄩ璧庡洖鏄惁璋冩暣姣斾緥'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15010
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 100,
          minLength: null,
          precision: 6,
          maxLength: null,
          required: true
        },
        dataSource: null,
        value: '0.1'
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000053'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '宸ㄩ璧庡洖纭姣斾緥锛�%锛�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '宸ㄩ璧庡洖纭姣斾緥锛�%锛�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15011
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 9999999999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: true
        },
        dataSource: null,
        value: '0'
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000054'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈�浣庤处鎴锋暟閲忥紙鎴凤級'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈�浣庤处鎴锋暟閲忥紙鎴凤級'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15012
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 9999999999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: true
        },
        dataSource: null,
        value: '30'
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000055'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '瀹㈡埛杩囧皯鏈熼檺锛堝ぉ锛�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瀹㈡埛杩囧皯鏈熼檺锛堝ぉ锛�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15013
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 9999999999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: true
        },
        dataSource: null,
        value: '30'
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000056'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '浠介杩囦綆鏈熼檺锛堝ぉ锛�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '浠介杩囦綆鏈熼檺锛堝ぉ锛�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15014
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 9999999999,
          minLength: null,
          precision: 0,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000057'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '瀛樼画鏈熼檺(鏈�)'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '瀛樼画鏈熼檺(鏈�)'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 15015
      },
      attributeValue: {
        moduleType: '12',
        editable: true,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: false
        },
        dataSource: 'dict0019',
        value: ''
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000058'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '璧勪骇杩囦綆鍒ゆ柇绫诲瀷'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '璧勪骇杩囦綆鍒ゆ柇绫诲瀷'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: null,
        value: 15016
      },
      attributeValue: {
        moduleType: '15',
        editable: true,
        rule: {
          min: 0,
          max: 99999999999999,
          minLength: null,
          precision: 2,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: true
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1100000059'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '鏈�浣庤祫浜ч檺棰�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鏈�浣庤祫浜ч檺棰�'
      }
    },
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 15017
      },
      attributeValue: {
        moduleType: '15',
        editable: false,
        rule: {
          min: 0,
          max: 100,
          minLength: null,
          precision: 6,
          maxLength: null,
          required: false
        },
        dataSource: null,
        value: ''
      },
      dataType: {
        moduleType: null,
        value: '2'
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '1100000060'
      },
      displayType: {
        moduleType: null,
        value: '11'
      },
      attributeDesc: {
        moduleType: null,
        value: '闆嗕腑搴﹁秴闄愭瘮渚嬶紙%锛�'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '闆嗕腑搴﹁秴闄愭瘮渚嬶紙%锛�'
      }
    }
  ],
  grp010601: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: true,
        value: false
      },
      attributeCode: {
        moduleType: null,
        value: '2200001003'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: '璧庡洖銆佽浆鎹㈠綊璧勪骇姣斾緥'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 2,
              required: true
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000125'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '涓氬姟绫诲瀷'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '涓氬姟绫诲瀷'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '13',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: 'dict0009',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1300000021'
          },
          displayType: {
            moduleType: null,
            value: '13'
          },
          attributeDesc: {
            moduleType: null,
            value: '浠介绫诲埆'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '浠介绫诲埆'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 20,
              required: true
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000127'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀵规柟浜у搧浠ｇ爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀵规墜鏂逛骇鍝佷唬鐮�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 1,
              required: true
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000128'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀵规柟浜у搧浠介绫诲埆'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀵规柟浜у搧浠介绫诲埆'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: true
            },
            dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryAgencyList\"}',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000062'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 1000,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: true
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000130'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�浣庢寔鏈夊ぉ鏁�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�浣庢寔鏈夊ぉ鏁�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 1000,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000131'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鏈�楂樻寔鏈夊ぉ鏁�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鏈�楂樻寔鏈夊ぉ鏁�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 100,
              minLength: null,
              precision: 6,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000132'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '褰掕祫浜ф瘮渚�(%)'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '褰掕祫浜ф瘮渚�(%)'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '璧庡洖銆佽浆鎹㈠綊璧勪骇姣斾緥'
      }
    }
  ],
  grp010304: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: true
      },
      seqNo: {
        moduleType: null,
        value: 34001
      },
      attributeValue: {
        moduleType: '12',
        editable: false,
        rule: {
          min: null,
          max: null,
          minLength: null,
          precision: null,
          maxLength: null,
          required: true
        },
        dataSource: 'dict0037',
        value: '0'
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: null,
        value: false
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '1200000102'
      },
      displayType: {
        moduleType: null,
        value: '12'
      },
      attributeDesc: {
        moduleType: null,
        value: '鍚堝悓绫诲瀷'
      },
      children: null,
      attributeType: {
        moduleType: null,
        value: '1'
      },
      attributeName: {
        moduleType: null,
        value: '鍚堝悓绫诲瀷'
      }
    }
  ],
  grp050000: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '2200001008'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: '浜у搧鍨祫TA璐︽埛璁剧疆'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryAgencyList\",\"optionAll:\"true\"}',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000062'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 12,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000207'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '浜у搧鍨祫TA璐︽埛'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '浜у搧鍨祫TA璐︽埛'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '浜у搧鍨祫TA璐︽埛璁剧疆'
      }
    }
  ],
  grp030000: [
    {
      selectedFlag: {
        moduleType: null,
        value: true
      },
      hiddenFlag: {
        moduleType: null,
        value: false
      },
      seqNo: {
        moduleType: '19',
        value: null
      },
      attributeValue: {
        moduleType: '19',
        value: null
      },
      dataType: {
        moduleType: '19',
        value: null
      },
      editableFlag: {
        moduleType: '19',
        value: null
      },
      requiredFlag: {
        moduleType: null,
        editable: false,
        value: true
      },
      attributeCode: {
        moduleType: null,
        value: '2200001006'
      },
      displayType: {
        moduleType: null,
        value: '22'
      },
      attributeDesc: {
        moduleType: null,
        value: '娓呯畻澶╂暟璁剧疆'
      },
      children: [
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: '{\"className: \"cossCorporationInfoServiceImpl\",\"methodName:\"queryAgencyList\",\"optionAll:\"true\"}',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000062'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '閿�鍞晢浠ｇ爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '11',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 20,
              required: true
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '1'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000195'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '瀵规墜鏂逛骇鍝佷唬鐮�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '瀵规柟浜у搧浠ｇ爜'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '12',
            editable: true,
            rule: {
              min: null,
              max: null,
              minLength: null,
              precision: null,
              maxLength: null,
              required: false
            },
            dataSource: 'dict0106',
            value: ''
          },
          dataType: {
            moduleType: '19',
            value: null
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1200000196'
          },
          displayType: {
            moduleType: null,
            value: '12'
          },
          attributeDesc: {
            moduleType: null,
            value: '娓呯畻绫诲瀷'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '娓呯畻绫诲瀷'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000197'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '璁よ喘娓呯畻澶╂暟'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璁よ喘娓呯畻澶╂暟'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000198'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鐢宠喘娓呯畻澶╂暟'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鐢宠喘娓呯畻澶╂暟'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000199'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '璧庡洖娓呯畻澶╂暟'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璧庡洖娓呯畻澶╂暟'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000200'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鍒嗙孩娓呯畻澶╂暟'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鍒嗙孩娓呯畻澶╂暟'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000201'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '杞崲鍑哄ぉ鏁�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '杞崲鍑哄ぉ鏁�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: false,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000202'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '杞崲鍏ュぉ鏁�'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '杞崲鍏ュぉ鏁�'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000203'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '鎴愮珛澶辫触澶╂暟'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '鎴愮珛澶辫触澶╂暟'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: false
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '15',
            editable: true,
            rule: {
              min: 0,
              max: 9999999999,
              minLength: null,
              precision: 0,
              maxLength: null,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '2'
          },
          editableFlag: {
            moduleType: null,
            value: true
          },
          requiredFlag: {
            moduleType: null,
            editable: false,
            value: true
          },
          attributeCode: {
            moduleType: null,
            value: '1100000204'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '浜у搧缁堟澶╂暟'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '浜у搧缁堟澶╂暟'
          }
        },
        {
          selectedFlag: {
            moduleType: null,
            value: true
          },
          hiddenFlag: {
            moduleType: null,
            value: true
          },
          seqNo: {
            moduleType: null,
            value: 0
          },
          attributeValue: {
            moduleType: '14',
            editable: false,
            rule: {
              min: null,
              max: null,
              minLength: 0,
              precision: null,
              maxLength: 8,
              required: false
            },
            dataSource: null,
            value: ''
          },
          dataType: {
            moduleType: null,
            value: '3'
          },
          editableFlag: {
            moduleType: null,
            value: false
          },
          requiredFlag: {
            moduleType: null,
            editable: true,
            value: false
          },
          attributeCode: {
            moduleType: null,
            value: '1100000205'
          },
          displayType: {
            moduleType: null,
            value: '11'
          },
          attributeDesc: {
            moduleType: null,
            value: '璐圭敤缁撶畻鏃ユ湡'
          },
          children: null,
          attributeType: {
            moduleType: null,
            value: '1'
          },
          attributeName: {
            moduleType: null,
            value: '璐圭敤缁撶畻鏃ユ湡'
          }
        }
      ],
      attributeType: {
        moduleType: null,
        value: '2'
      },
      attributeName: {
        moduleType: null,
        value: '娓呯畻澶╂暟璁剧疆'
      }
    }
  ]
}

// 灞炴�ц彍鍗曚俊鎭�
export const tabs = {
  tabs: [
    {
      children: [
        {
          children: [
            {
              children: null,
              name: 'grp010101',
              label: '鍩烘湰淇℃伅'
            },
            {
              children: null,
              name: 'grp010102',
              label: '鍩烘湰灞炴��'
            },
            {
              children: null,
              name: 'grp010103',
              label: '鍕熼泦淇℃伅'
            },
            {
              children: null,
              name: 'grp010104',
              label: '鏃ユ湡淇℃伅'
            },
            {
              children: null,
              name: 'grp010105',
              label: '闄愬埗淇℃伅'
            }
          ],
          name: null,
          label: '鍩烘湰淇℃伅'
        },
        {
          children: [
            {
              children: null,
              name: 'grp010201',
              label: '涓埛浜ゆ槗闄愬埗'
            }
          ],
          name: null,
          label: '涓埛浜ゆ槗闄愬埗'
        },
        {
          children: [
            {
              children: null,
              name: 'grp010301',
              label: '鍩烘湰瑙勫垯'
            },
            {
              children: null,
              name: 'grp010302',
              label: '浠介閿佸畾鏈�'
            },
            {
              children: null,
              name: 'grp010303',
              label: '鍑�鍊艰鍒�'
            },
            {
              children: null,
              name: 'grp010304',
              label: '鍏朵粬鍙傛暟'
            },
            {
              children: null,
              name: 'grp010305',
              label: '璐圭敤澶勭悊鏂瑰紡'
            },
            {
              children: null,
              name: 'grp010306',
              label: '澶ч闄愬埗'
            },
            {
              children: [
                {
                  children: null,
                  name: 'grp010401',
                  label: '绮惧害澶勭悊鏂瑰紡'
                }
              ],
              name: null,
              label: '绮惧害澶勭悊'
            }
          ],
          name: null,
          label: '鍏朵粬鍙傛暟淇℃伅'
        },
        {
          children: [
            {
              children: null,
              name: 'grp010501',
              label: '鍒╂伅璁＄畻鍙傛暟'
            }
          ],
          name: null,
          label: '鍒╂伅璁＄畻'
        },
        {
          children: [
            {
              children: null,
              name: 'grp010601',
              label: '璧庡洖銆佽浆鎹㈠綊璧勪骇姣斾緥'
            }
          ],
          name: null,
          label: '褰掕祫浜ф瘮渚�'
        },
        {
          children: [
            {
              children: null,
              name: 'grp010701',
              label: '鎶曡祫缁忕悊'
            }
          ],
          name: null,
          label: '鎶曡祫缁忕悊'
        },
        {
          children: [
            {
              children: null,
              name: 'grp010801',
              label: '涓撴埛鎴栫鍕熺壒鏈�'
            }
          ],
          name: null,
          label: '涓撴埛鎴栫鍕熺壒鏈�'
        },
        {
          children: [
            {
              children: null,
              name: 'grp010901',
              label: '璐у竵浜у搧鍙傛暟'
            }
          ],
          name: null,
          label: '璐у竵鍙傛暟'
        }
      ],
      name: null,
      label: '浜у搧淇℃伅'
    },
    {
      children: null,
      name: 'grp020100',
      label: '浜у搧閿�鍞晢鍙傛暟'
    },
    {
      children: null,
      name: 'grp030000',
      label: '娓呯畻澶╂暟璁剧疆'
    },
    {
      children: null,
      name: 'grp040000',
      label: 'T+0浜у搧鏂规璁剧疆'
    },
    {
      children: null,
      name: 'grp050000',
      label: '浜у搧鍨祫TA璐︽埛璁剧疆'
    },
    {
      children: null,
      name: 'grp060000',
      label: 'T+0浜у搧寮�鏀炬湡鏃ラ棿娓呯畻鏃堕棿琛�'
    }
  ]
}