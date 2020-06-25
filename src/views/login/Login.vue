<template>
    <div class="login_form">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            ...mapActions("users",["login"]),
            submitForm() {
                this.login(this.form).then((result) => {
                    // 跳转到首页
                    this.$router.replace({path: "/index"});
                    console.log("*******");
                });
            },
            resetForm() {

            }
        }
    }
</script>

<style scoped>

    .login_form{
        width: 40%;
    }

</style>
