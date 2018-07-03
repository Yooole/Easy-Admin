<style lang="scss">
    @import "../assets/css/main.scss";
    .logo-con {
        background-color: rgb(48, 65, 86);
        padding: 8px;
        text-align: center;
        img {
            height: 44px;
            width: auto;
        }
    }
</style>
<template>
    <el-container class="main" :class="{'main-hide-text': isCollapse}">
        <easy-side-menu>
            <div slot="logo" class="logo-con">
                <img v-show="isCollapse"  src="../assets/images/main_logo_close.png" key="max-logo" />
                <img v-show="!isCollapse" src="../assets/images/main_logo_open.png" key="min-logo" />
            </div>
        </easy-side-menu>
        <el-container>
            <div class="main-header-con" :style="{ paddingLeft: isCollapse ? '64px' : '180px' }">
                <easy-header-bar></easy-header-bar>
                <div class="tags-con">
                    <easy-page-opened></easy-page-opened>
                </div>
            </div>
            <el-main class="single-page-con" :style="{ left: isCollapse ? '64px' : '180px' }">
                <div class="single-page">
                    <keep-alive :include="includePage">
                        <router-view></router-view>
                    </keep-alive>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import EasySideMenu from '../components/layout/easy-side-menu.vue';
    import EasyHeaderBar from '../components/layout/easy-header-bar.vue';
    import EasyPageOpened from '../components/layout/easy-page-opened.vue';

    export default {
        components: {
            EasySideMenu,
            EasyHeaderBar,
            EasyPageOpened
        },
        computed: {
            isCollapse () {
                return this.$store.getters.is_collapse;
            },
            includePage() {
                return []
            }
        },
    }
</script>