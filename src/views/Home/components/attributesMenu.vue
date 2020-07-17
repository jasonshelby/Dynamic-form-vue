<script>
import { tabs } from '../data'
console.log(tabs)

// 深度优先搜索所有name值
function findAllIds(list, res = []) {
  list.forEach(item => {
    if (item.children) {
      findAllIds(item.children, res)
    } else {
      res.push(item.name)
    }
  })
  return res
}

// 因为解析数据结构需要递归，需要js的完全编程能力，所以用jsx实现
export default {
  name: 'attributesMenu',
  props: ['isShowLast', 'isShowNext'],
  data() {
    return {
      tabs: [],
      idList: []
    }
  },
  created() {
    this.tabs = tabs.tabs
    this.idList = findAllIds(this.tabs)
    this.openMenuByIndex('grp010101')
  },
  mounted() {},
  methods: {
    handleSelect(key) {
      this.$emit('handleSelect', key, this.idList)
      this.handelBUtton(key)
    },
    handelBUtton(key) {
      for (let i = 0; i < this.idList.length; i++) {
        if (key === this.idList[i]) {
          if (i === 0) {
            this.$emit('isShow', false, true)
          } else if (i === this.idList.length - 1) {
            this.$emit('isShow', true, false)
          } else {
            this.$emit('isShow', true, true)
          }
        }
      }
    },
    openMenuByIndex(index) {
      this.handleSelect(index)
      this.$nextTick(() => {
        this.$refs['attributes-menu'].updateActiveIndex(index)
      })
    }
  },
  render() {
    function renderSubmenu(list) {
      return list.map((item, index) => {
        if (item.children) {
          return (
            <el-submenu index={String(index)}>
              <template slot="title">
                <span>{item.label}</span>
              </template>
              {renderSubmenu(item.children)}
            </el-submenu>
          )
        } else {
          // disabled
          return (
            <el-menu-item index={item.name}>
              <span slot="title">{item.label}</span>
            </el-menu-item>
          )
        }
      })
    }
    return (
      <el-row>
        <el-col>
          <el-menu
            ref="attributes-menu"
            class="el-menu-vertical-demo"
            default-active="grp010101"
            onSelect={this.handleSelect}
          >
            {renderSubmenu(this.tabs)}
          </el-menu>
        </el-col>
      </el-row>
    )
  }
}
</script>
<style scoped>
.el-menu {
  background-color: #fff;
  border: 0;
}

.el-menu-item {
  border: 0;
}

.el-menu-item.is-active {
  background-color: #fff !important;
  color: #fe715c !important;
}

.el-menu-item,
.el-submenu {
  background-color: #fff;
  color: #17233d;
}

.el-submenu >>> .el-submenu__title,
.el-submenu.is-active >>> .el-submenu__title {
  color: #17233d;
}
</style>

<style>
.el-submenu__title,
.el-submenu.is-active .el-submenu__title {
  border: 0;
}
</style>
