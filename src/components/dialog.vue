<template>
    <section>
        <van-dialog
            v-model="show"
            :title="title"
            :show-confirm-button="showBtnGroup"
            :show-cancel-button="showBtnGroup"
            @confirm="handleConfirm()"
            @cancel="handleCancel()"
        >
            <slot name="main"></slot>
        </van-dialog>
    </section>
</template>
<script>
export default {
    data() {
        return {
            show: this.agreeShow,
            showBtnGroup: this.showBtn ? true : false
        };
    },
    props: ["title", "agreeShow", "showBtn"],
    watch: {
        agreeShow(news, old) {
            this.show = news;
        }
    },
    mounted() {},
    methods: {
        handleConfirm() {
            this.$emit("handleConfirm");
        },
        handleCancel() {
            this.$emit("handleCancel");
        }
    }
};
</script>
<style scoped lang='less'>
.close {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-icon {
        font-size: 18px;
        color: rgba(0, 0, 0, 0.3);
    }
}
</style>



