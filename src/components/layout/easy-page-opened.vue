
<template>
    <div ref="scrollCon" class="tags-outer-scroll-con">
        <div class="close-all-tag-con">
            <el-button size="mini" type="primary">关闭其他</el-button>
        </div>
        <div ref="scrollBody" class="tags-inner-scroll-body">
            <el-tag color="#ffffff" hit>控制台</el-tag>
            <el-tag color="#ffffff" closable hit>财务中心</el-tag>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'easyPageOpened',
    };
</script>