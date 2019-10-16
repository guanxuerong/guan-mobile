<template>
    <section class="index">
				<div class="title">页面</div>
        <van-button type="default" @click="toHome()" class="btn">返回首页</van-button>
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
        toHome() {
					this.$router.push('/index')
				}
    }
};
</script>
 
<style scoped lang='less'>
@import "../assets/css/app/index.less";
</style>
