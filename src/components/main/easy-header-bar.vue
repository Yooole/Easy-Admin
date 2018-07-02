<template>
    <el-header style="height: 60px;
    background: #fff;
    box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
    position: relative;
    z-index: 11;
    width: 100%;">
        <el-button>收起</el-button>
    </el-header>
</template>
<script>
    export default {
        props: {
            folding: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>


</style>