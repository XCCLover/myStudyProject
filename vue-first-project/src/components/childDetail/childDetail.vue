<template>
    <div>
        <el-button type="primary" size="small" @click="doback">返回</el-button>
        详情子组件
        <div>
            父页面参数id:{{this.$route.params.id}}
        </div>
    </div>
</template>

<script>
export default {
    mounted:function(){
        console.log(this.$route.params.id)
    },
    methods:{
        doback:function(){
            this.$router.push({
                path:'/child2'
            })
        }
    }
}
</script>

