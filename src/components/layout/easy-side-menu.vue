<template>
    <el-aside  class="sidebar-menu-con" :style="{width: isCollapse ? '64px' : '180px', overflow: isCollapse ? 'visible' : 'auto'}">
        <el-menu class="ivu-shrinkable-menu" :collapse-transition="false" :collapse="isCollapse" :default-active="$route.path"
                 background-color="#304156"
                 text-color="rgb(191, 203, 217)"
                 active-text-color="rgb(64, 158, 255)">
            <slot name="logo"></slot>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航菜单栏</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">活动管理</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<script>
    export default {
        name: 'EasySideMenu',
        computed: {
            isCollapse () {
                return this.$store.getters.is_collapse;
            }
        }
    }
</script>