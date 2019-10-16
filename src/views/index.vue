<template>
    <section class="index">
				<div class="title">首页</div>
        <van-button type="default" @click="toPage()" class="btn">页面跳转</van-button>
				<router-link to="/login">退出</router-link>
    </section>
</template> 
<script>
export default {
    data() {
        return {

        };
    },
    mounted() {},
    methods: {
        toPage() {
					this.$router.push('/page')
				}
    }
};
</script>
 
<style scoped lang='less'>
@import "../assets/css/app/index.less";
</style>
