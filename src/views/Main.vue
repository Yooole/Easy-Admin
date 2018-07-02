<template>
    <el-container class="easy-main">
        <easy-side-menu :folding="folding"></easy-side-menu>
        <el-container :style="{ paddingLeft: folding ? '64px' : '180px' }">
            <el-button @click="folding = !folding">asdasd</el-button>
            <easy-header-bar></easy-header-bar>
            <el-main class="easy-main-page" :style="{ left: folding ? '64px' : '180px' }">
                <div class="easy-page">
                    <keep-alive :include="includePage">
                        <router-view></router-view>
                    </keep-alive>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import EasySideMenu from '../components/main/easy-side-menu.vue';
    import EasyHeaderBar from '../components/main/easy-header-bar.vue';

    export default {
        data() {
            return {
                folding: false
            }
        },
        components: {
            EasySideMenu,
            EasyHeaderBar
        },
        computed: {
            includePage () {
                return [];
            },
        }
    }
</script>

<style lang="scss">
    .easy-main {
        position: absolute;
        width: 100%;
        height: 100%;
        .easy-main-page{
            position: absolute;
            top: 100px;
            right: 0;
            bottom: 0;
            overflow: auto;
            background-color: #ffffff;
            transition: left .3s;
            .easy-page{
                margin: 10px;
            }
        }
    }
</style>