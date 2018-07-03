<template>
    <el-header class="main-header">
        <div class="navicon-con">
            <el-button :style="{transform: 'rotateZ(' + (isCollapse ? '-90' : '0') + 'deg)'}" type="text" @click="toggleCollapse">
                <i class="el-icon-easy-menu"></i>
            </el-button>
        </div>

        <div class="header-middle-con">
            <div class="main-breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                    <el-breadcrumb-item>财务中心</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>

        <div class="header-avator-con">
            <easy-full-screen></easy-full-screen>
            <easy-message-tip></easy-message-tip>
            <div class="user-dropdown-menu-con">
                <el-row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                    <img class="ivu-avatar" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="头像">
                    <el-dropdown trigger="click">
                        <b class="main-user-name">Easy-Admin</b>
                        <i class="el-icon-caret-bottom"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item name="ownSpace"> 个人中心 </el-dropdown-item>
                            <el-dropdown-item name="loginout" divided> 安全退出 </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-row>
            </div>
        </div>
    </el-header>
</template>
<script>
    import EasyFullScreen from './easy-full-screen.vue'
    import EasyMessageTip from './easy-message-tip.vue'

    export default {
        name: 'EasyHeaderBar',
        components: {
            EasyFullScreen,
            EasyMessageTip
        },
        computed: {
            isCollapse () {
                return this.$store.getters.is_collapse;
            }
        },
        methods: {
            toggleCollapse() {
                this.$store.commit('changeCollapse', !this.isCollapse)
            }
        }
    }
</script>