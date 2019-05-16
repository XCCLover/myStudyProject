<template>
  <div id="homepage">
    <el-container class="contentainer">
      <el-container>
        <el-aside width="220px">
          <div class="user-message">
            用户信息
          </div>
          <el-menu
            :default-active="activeRoute"
            router
            @select="selectMenu"
          >
            <el-submenu
              v-for="item in menuDate"
              :key="item.menuPath"
              :index='item.menuPath'
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{item.menuName}}</span>
              </template>
              <template v-for="childItem in item.children">
                <el-menu-item
                  :index="childItem.menuPath"
                  :key="childItem.menuPath"
                >{{childItem.menuName}}</el-menu-item>
              </template>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header class="content-title">我的第一个vue项目</el-header>
          <el-main class="contentArea">
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeRoute: "",//当前激活的菜单路径
      menuDate: []//菜单数据
    };
  },
  methods: {
    selectMenu: function(index) {
      this.activeRoute = index;
    },
    geMenuData(){
        this.$http.get('http://localhost:8080/static/jsondata/menu.json').then(res=>{
            if(res.data.status==='0'){
                this.menuDate=res.data.result
            }
        }).catch(error=>{
            console.log(error);
        })
    }
  },
  mounted: function() {
    this.activeRoute = this.$route.path;
    this.geMenuData();
  }
};
</script>

<style lang="less" scoped>
#homepage {
  height: 100%;
  .contentainer {
    height: 100%;
    .el-header {
      line-height: 60px;
    }
    .user-message {
      height: 130px;
      line-height: 130px;
      background: #ccc;
    }
    .content-title {
      border-bottom: 1px solid #ccc;
      background: linear-gradient(to right,blue,green);
      color: #fff;
    }
    .contentArea {
      padding: 0 0 16px 0;
      box-sizing: border-box;
      .el-main{
          padding: 16px;
          padding-bottom: 0;
          box-sizing: border-box;
          height: 100%;
          >div{
              height: 100%;
          }
      }
    }
    .el-aside {
      border-right: 1px solid #ccc;
    }
    .el-menu {
      text-align: left;
      border-right: none;
    }
    .el-submenu .el-menu-item {
      padding-left: 52px !important;
    }
  }
}
</style>


