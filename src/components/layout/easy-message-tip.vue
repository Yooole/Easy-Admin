<template>
    <div @click="showMessage" class="full-screen-btn-con">
        <el-tooltip class="item" effect="dark" content="消息" placement="bottom">
            <el-badge is-dot>
                <i class="el-icon-easy-xiaoxi"></i>
            </el-badge>
        </el-tooltip>
    </div>
</template>

<script>
export default {
    name: 'easyMessageTip',
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    methods: {
        showMessage () {
//            util.openNewPage(this, 'message_index');
//            this.$router.push({
//                name: 'message_index'
//            });
        }
    }
};
</script>