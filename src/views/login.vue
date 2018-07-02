<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <el-card shadow="hover" class="box-card" v-loading="loading" element-loading-text="正在登录中，请稍后...">
                <div slot="header">
                    <i class="el-icon-easy-jinrujiaoshi"></i>
                    欢迎登录Easy-Admin
                </div>
                <div class="form-con">
                    <el-form ref="loginForm" :rules="rules" :model="loginData">
                        <el-form-item prop="username">
                            <el-input type="text" v-model="loginData.username" prefix-icon="el-icon-easy-user-name" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="username">
                            <el-input type="password" v-model="loginData.password" prefix-icon="el-icon-easy-password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item prop="code">
                            <el-input type="text" v-model="loginData.code" prefix-icon="el-icon-easy-yanzhengma" placeholder="请输入验证码">
                                <template slot="append">
                                    <img class="login-captcha" :src="captchaLink" @click="refreshCode" alt="captcha">
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-button type="primary" class="login-button" @click="handleSubmit">登录</el-button>
                    </el-form>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,
                captchaLink: '',
                loginData: {
                    username: '',
                    password: '',
                    code: ''
                },
                rules: {
                    username: [
                        { required: true, message: ' ', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: ' ', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, len: 3,  message: ' ', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
            this.refreshCode();
        },
        methods: {
            handleSubmit() {
                this.$refs['loginForm'].validate(valid => {
                    if (valid) {
                        this.loading = true;
                        this.$store.dispatch('LoginByUsername', this.loginData).then((response) => {
                            if(!response.success) {
                                this.loading = false;
                                this.refreshCode();
                                this.$message.error(response.msg);
                                return false;
                            }
                            this.$router.push({ path: '/' });
                        });
                    }
                })
            },
            refreshCode() {
                this.loginData.code = '';
                this.captchaLink = process.env.BASE_API + '/captcha?_t=' + Date.now();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        width: 100%;
        height: 100%;
        background-image: url(../assets/images/login_bg.jpg);
        background-size: cover;
        position: relative;
        .login-con {
            position: absolute;
            right: 200px;
            top: 50%;
            width: 320px;
            transform: translateY(-60%);
            .form-con {
                .el-form-item {
                    margin-bottom: 12px;
                }
                .login-captcha {
                    width: 100px;
                    height: 34px;
                    margin: 0 -20px;
                }
                .login-button {
                    line-height: 12px;
                    margin: 12px 0;
                    width: 100%;
                }
            }
        }
    }
</style>