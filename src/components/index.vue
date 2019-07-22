<template>
    <div class="layout">
        <Layout style="height: 100%">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" style="box-shadow:1px 4px 15px #808695">
                <div style="height: 64px;color: #5cadff;text-align: center;line-height: 64px;">
                    <!-- 顶部图标 -->
                    <h3>
                        <span>{{isCollapsed ? 'Web': 'WebFrame'}}</span>
                    </h3>
                </div>
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-settings"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Menu mode="horizontal" active-name="1">
                        <div class="layout-logo">
                            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}"
                                  type="md-menu" size="24"></Icon>
                        </div>
                        <div class="layout-nav">
                            <MenuItem name="1">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="ios-paper"></Icon>
                                Item 4
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    Content
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon() {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses() {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider() {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
<style scoped>
    .layout {
        height: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-header-bar {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo {
        margin: 0 auto;
        float: left;
        position: relative;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .menu-icon {
        transition: all .3s;
    }

    .rotate-icon {
        transform: rotate(-90deg);
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