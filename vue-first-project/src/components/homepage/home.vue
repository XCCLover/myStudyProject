<template>
  <div id="homepage">
    <!-- <div class="banner">我的第一个vue项目</div>
        <div class="contentArae">
            <div class="aside"></div>
            <div class="content"></div>
        </div> -->
    <el-container class="contentainer">
      <el-header>我的第一个vue项目</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1">
            <el-submenu index='1'>
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>我的菜单一</span>
              </template>
              <el-menu-item index="1-1">我的菜单选项一</el-menu-item>
              <el-menu-item index="1-2">我的菜单选项二</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="contentArea">
          内容区域
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#homepage {
  height: 100%;
  background: #ccc;
  .contentainer {
    height: 100%;
    .el-header {
      line-height: 60px;
      color: #fff;
    }
  }
  .contentArea {
    padding: 16px;
    box-sizing: border-box;
    background: red;
  }
  .el-aside {
    background: blue;
  }
  .el-main,
  .el-aside {
    height: 100%;
  }
}
.banner {
  height: 64px;
  background: aquamarine;
  line-height: 64px;
}
</style>


