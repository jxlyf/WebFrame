<!--
    侧边栏，使用方法，<side-bar :is-collapsed="isCollapsed"></side-bar>
    属性：isCollapsed, 决定侧边栏是否收起。true-收起，false-展开。
    侧边栏导航数据来源：data中的menu数组。
-->
<template>
    <Sider hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed"
           style="box-shadow:1px 4px 10px #808695">
        <div style="height: 64px;color: #5cadff;text-align: center;line-height: 64px;">
            <!-- 顶部图标 -->
            <h3>
                <span>{{isCollapsed ? 'Web': 'WebFrame'}}</span>
            </h3>
        </div>
        <Menu active-name="1-3" theme="dark" width="auto" :class="menuitemClasses">
            <Submenu  v-for="item of menu" :key="item.title" :name="item.title">
                <template slot="title">
                    <Icon :type="item.icon"></Icon>
                    <span v-if="!isCollapsed">{{item.title}}</span>
                </template>
                <MenuItem v-for="it of item.menuItem" :name="it.name" :to="it.to" :key="it.name">
                    <Icon :type="item.icon"></Icon>
                    <span>{{it.name}}</span>
                </MenuItem>
            </Submenu>
        </Menu>
    </Sider>
</template>

<script>
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
            return {
                menu: [
                    {
                        title: 'Tables',
                        icon: 'ios-navigate',
                        menuItem: [
                            {
                                to: '/table/table',
                                name: 'table1',
                            }, {
                                to: '/table/table2',
                                name: 'table2',
                            }, {
                                to: '/table/table3',
                                name: 'table3',
                            }
                        ]
                    }, {
                        title: 'Forms',
                        icon: 'ios-keypad',
                        menuItem: [
                            {
                                to: '/form/form1',
                                name: 'form1',
                            }, {
                                to: '/form/form2',
                                name: 'form2',
                            }, {
                                to: '/form/form3',
                                name: 'form3',
                            }
                        ]
                    }, {
                        title: 'Carousel',
                        icon: 'ios-expand',
                        menuItem: [
                            {
                                to: '/carousel/carousel1',
                                name: 'carousel1',
                            }, {
                                to: '/carousel/carousel2',
                                name: 'carousel2',
                            }, {
                                to: '/carousel/carousel3',
                                name: 'carousel3',
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
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