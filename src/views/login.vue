<template>
    <section class="login">
        <div class="title">登录</div>
        <div class="login-card">
            <van-row class="item cell">
                <van-col span="6" class="label">用户名：</van-col>
                <van-col span="18">
                    <input v-model="form.username" placeholder="请输入用户名" @blur="onBlur" />
                </van-col>
            </van-row>
            <van-row class="item cell">
                <van-col span="6" class="label">密码：</van-col>
                <van-col span="18">
                    <input
                        type="password"
                        v-model="form.password"
                        placeholder="请输入密码"
                        @blur="onBlur"
                    />
                </van-col>
            </van-row>
            <van-button @click="handleLogin()" class="login-btn">登录</van-button>
        </div>
    </section>
</template>
<script>
import { Rule } from "../utils/rule";
import { storage } from "../utils/util";
export default {
    data() {
        return {
            form: {
                username: "guanguan",
                password: "guanguan"
            }
        };
    },
    mounted() {},
    methods: {
        //解決ios12表單輸入
        onBlur() {
            var u = navigator.userAgent;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isiOS) {
                setTimeout(() => {
                    const scrollHeight =
                        document.documentElement.scrollTop ||
                        document.body.scrollTop ||
                        0;
                    window.scrollTo(0, Math.max(scrollHeight - 1, 0));
                }, 100);
            }
        },
        //登录
        handleLogin() {
            if (!Rule.checkDataNull(this.form.username, "用户名不能为空!")) {
                return false;
            }
            if (!Rule.checkDataNull(this.form.password, "密码不能为空!")) {
                return false;
						}
						this.$toast('登录成功！')
            storage.setStorage("user", JSON.stringify(this.form));
            this.$router.push({
                path: "/index"
            });
        }
    }
};
</script>
<style scoped lang='less'>
@import "../assets/css/app/login.less";
</style>



