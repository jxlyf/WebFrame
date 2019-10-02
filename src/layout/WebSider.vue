<!--
    侧边栏，使用方法，<side-bar :is-collapsed="isCollapsed"></side-bar>
    属性：isCollapsed, 决定侧边栏是否收起。true-收起，false-展开。
    侧边栏导航数据来源：data中的menu数组(在sider.json文件中)。
-->
<template>
    <Sider hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" id="sider" >
        <div style="height: 64px;color: deepskyblue;text-align: center;line-height: 64px;font-size: large">
            <!-- 顶部图标 -->
            <h3>
                <span>{{isCollapsed ? 'WebFrame': 'Web'}}</span>
            </h3>
        </div>
        <Menu active-name="1-3" theme="dark" width="auto" :class="menuitemClasses">
            <Submenu  v-for="item of menu" :key="item.title" :name="item.title">
                <template slot="title">
                    <Icon :type="item.icon"></Icon>
                    <span v-if="!isCollapsed">{{item.title}}</span>
                </template>
                <MenuItem v-for="it of item.menuItem" :name="it.name" :to="it.to" :key="it.name">
                    <Icon :type="it.icon" size="22"></Icon>
                    <span>{{it.name}}</span>
                </MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>

<script>
    const sideMenu = require("./sider");
    export default {
        props: ['isCollapsed'],
        name: "sider",
        computed: {
            menuitemClasses() {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        data() {
            return sideMenu;
        }
    }
</script>

<style scoped>
    #sider{
        box-shadow:1px 4px 10px #808695
    }
    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>