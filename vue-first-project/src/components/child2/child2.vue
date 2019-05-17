<template>
  <div>
    <div class="breadCrumbBox">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/mainpage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>第一个模块</el-breadcrumb-item>
        <el-breadcrumb-item>菜单二</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="mainContent">
      <div class="searchForm">
        <el-form
          :inline="true"
          :model="serchForm"
        >
          <el-form-item label="用户名">
            <el-input
              v-model="serchForm.userName"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input
              v-model="serchForm.userAge"
              placeholder="请输入年龄"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="serchForm.gender">
              <template v-for="(item,index) in genderList">
                <el-option
                  :label="item.label"
                  :value="item.value"
                  :key="index"
                ></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              size="small"
              type="primary"
              @click="doSearch"
            >查询</el-button>
            <el-button
              size="small"
              type="primary"
              @click="doReset"
            >重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="operatedBtn">
        <el-button
          size="small"
          type="primary"
          @click="userAddDialogVisible=true"
        >添加</el-button>
        <el-button
          size="small"
          type="primary"
          @click="doUserEdit"
        >编辑</el-button>
        <el-button
          size="small"
          type="primary"
          @click="doDelUser"
        >删除</el-button>
      </div>
      <el-table
        border
        :fit="true"
        highlight-current-row
        style="width:100%"
        :data="tableData"
        height="calc(100% - 140px)"
        @current-change="handleCurrentChange"
        ref="userTable"
      >
        <el-table-column
          type="index"
          width="50"
        >
        </el-table-column>
        <el-table-column
          prop="birthday"
          label="出生日期"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
        ></el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
        ></el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="地址"
        ></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableAllow"
      >
      </el-pagination>
    </div>
    <el-dialog
      title="添加用户"
      :visible.sync="userAddDialogVisible"
      width="350px"
      class="userAddDialog"
    >
      <el-form :model="userAddForm">
        <el-form-item
          label="用户名"
          label-width="80px"
        >
          <el-input v-model="userAddForm.userName"></el-input>
        </el-form-item>
        <el-form-item
          label="年龄"
          label-width="80px"
        >
          <el-input v-model="userAddForm.userAge"></el-input>
        </el-form-item>
        <el-form-item
          label="用户性别"
          label-width="80px"
        >
          <el-select v-model="userAddForm.userGender">
            <template v-for="(item,index) in genderList">
              <el-option
                :label="item.label"
                :value="item.value"
                :key="index"
              ></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item
          label="地址"
          label-width="80px"
        >
          <el-input v-model="userAddForm.userAddress"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            size="small"
            type="primary"
            @click="userAddDialogVisible=false"
          >确定</el-button>
          <el-button
            size="small"
            @click="userAddDialogVisible=false"
          >取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="编辑用户"
      :visible.sync="userEditDialogVisible"
      width="350px"
      class="userAddDialog"
    >
      <el-form :model="userEditForm">
        <el-form-item
          label="用户名"
          label-width="80px"
        >
          <el-input v-model="userEditForm.userName"></el-input>
        </el-form-item>
        <el-form-item
          label="年龄"
          label-width="80px"
        >
          <el-input v-model="userEditForm.userAge"></el-input>
        </el-form-item>
        <el-form-item
          label="用户性别"
          label-width="80px"
        >
          <el-select v-model="userEditForm.userGender">
            <template v-for="(item,index) in genderList">
              <el-option
                :label="item.label"
                :value="item.value"
                :key="index"
              ></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item
          label="地址"
          label-width="80px"
        >
          <el-input v-model="userEditForm.userAddress"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            size="small"
            type="primary"
            @click="makesureUserEdit"
          >确定</el-button>
          <el-button
            size="small"
            @click="userEditDialogVisible=false"
          >取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="delUserDialogVisible"
      width="30%"
      modal
      class="delDialog"
    >
      <span>确定删除此数据？</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="macksureDelUser"
          size="small"
        >确定</el-button>
        <el-button size="small" @click="delUserDialogVisible=false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData: [],
      tableAllow: 0,
      serchForm: {
        userName: "",
        userAge: "",
        gender: ""
      },
      genderList: [
        {
          label: "男",
          value: "1"
        },
        {
          label: "女",
          value: "0"
        },
        {
          label: "其他",
          value: "2"
        }
      ],
      userAddDialogVisible: false,
      userAddForm: {
        userName: "",
        userAge: "",
        userGender: "",
        userAddress: ""
      },
      selectedTableData: null,
      userEditForm: {
        userName: "",
        userAge: "",
        userGender: "",
        userAddress: ""
      },
      userEditDialogVisible: false,
      delUserId: "",
      delUserDialogVisible:false
    };
  },
  methods: {
    getTableData: function() {
      this.$http
        .get("http://localhost:8080/static/jsondata/tableData.json")
        .then(res => {
          if (res.data.status === "0") {
            this.tableData = res.data.result;
            this.tableAllow = this.tableData.length;
          }
        });
    },
    doSearch: function() {
      this.setCurrentRow();
    },
    doReset: function() {
      this.serchForm = {
        userName: "",
        userAge: "",
        gender: ""
      };
    },
    handleCurrentChange: function(currentRow) {
      this.selectedTableData = currentRow;
    },
    doUserEdit: function() {
      if (this.selectedTableData) {
        this.userEditDialogVisible = true;
        this.userEditForm = {
          userName: this.selectedTableData.name,
          userAge: this.selectedTableData.age,
          userGender: this.selectedTableData.gender,
          userAddress: this.selectedTableData.address
        };
      } else {
        this.$message({
          message: "请选择一条数据之后在进行操作",
          type: "warning"
        });
      }
    },
    setCurrentRow: function(row) {
      this.$refs.userTable.setCurrentRow(row);
    },
    makesureUserEdit: function() {
      this.userEditDialogVisible = false;
      console.log(this.userEditForm);
    },
    doDelUser: function() {
      if (this.selectedTableData) {
        this.delUserId = this.selectedTableData.id;
        this.delUserDialogVisible=true;
      } else {
        this.$message({
          message: "请选择一条数据之后在进行操作",
          type: "warning"
        });
      }
    },
    macksureDelUser:function(){
        console.log(this.delUserId);
        this.delUserDialogVisible=false
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
.el-form-item {
  margin-bottom: 16px;
}
.mainContent {
  border: 1px solid #ccc;
  height: calc(100% - 30px);
  padding: 16px;
  box-sizing: border-box;
  .searchForm {
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .operatedBtn {
    text-align: left;
    padding: 16px 0;
    box-sizing: border-box;
  }
}
.userAddDialog {
  .el-select {
    width: 100%;
  }
}
.delDialog{
    text-align: left;
}
</style>

