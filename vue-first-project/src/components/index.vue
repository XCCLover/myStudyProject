<template>
  <div id="app">
    <div class="login-title">登录</div>
    <div class="login-content">
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formData.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="doLogin">登录</el-button>
            <el-button @click="doReset">重置</el-button>
        </el-form>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            formData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        doLogin(){
            this.$router.push('/home')
        },
        doReset(){
            this.formData.username='';
            this.formData.password=''; 
        }
    }
};
</script>


<style lang="less" scoped>
    #app{
        height: 100%;
        padding-top: 150px;
        box-sizing: border-box;
        .login-title{
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 16px;
        }
        .login-content{
            box-sizing: border-box;
            padding: 16px;
            width: 500px;
            margin: 0 auto;
            border: 1px solid #ccc;
            border-radius: 4px;
            .el-form{
                width: 300px;
                margin: 0 auto;
            }
        }
    }

</style>



