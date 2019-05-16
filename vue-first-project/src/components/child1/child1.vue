<template>
  <div>
    <div class="breadCrumbBox">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/mainpage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>第一个模块</el-breadcrumb-item>
        <el-breadcrumb-item>菜单一</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <template>
      <el-table
        border
        style="width:100%"
        :data="tableData"
        height="calc(100% - 80px)"
      >
        <el-table-column
          prop="birthday"
          label="出生日期"
          width="220"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="380"
        ></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tableData.length"
      >
      </el-pagination>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getTableData: function() {
      this.$http
        .get("http://localhost:8080/static/jsondata/tableData.json")
        .then(res => {
          if (res.data.status === "0") {
            this.tableData = res.data.result;
          }
        });
    }
  },
  mounted: function() {
    this.getTableData();
  }
};
</script>


<style lang="less" scoped>
.breadCrumbBox {
  padding-bottom: 16px;
  box-sizing: border-box;
}
.el-pagination{
    padding-top: 16px;
}
</style>

