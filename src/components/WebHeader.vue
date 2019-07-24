<template>
    <Header :style="{padding: 0}" class="layout-header-bar">
        <Menu mode="horizontal" active-name="1">
            <div class="layout-logo">
                <Icon @click="$emit('collapsedSider')" :class="rotateIcon" :style="{margin: '0 20px'}"
                      type="md-menu" size="24"></Icon>
            </div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate" size="20"></Icon>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad" size="20"></Icon>
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-expand" color="blue" size="20" @click="toggleFullscreen"
                          :class="[isFullscreen? 'fa-compress': 'fa-arrows-alt','fa ']" title="全屏"/>
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-exit-outline" color="red" size="22" title="退出" @click="logout"/>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>

    import screenfull from 'screenfull'
    export default {
        props: ['isCollapsed'],
        name: "header",
        data() {
            return {
                isFullscreen: false
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
            toggleFullscreen() {
                if (!screenfull.enabled) {
                    this.$message.warning("您的浏览器不支持全屏");
                    return false;
                }
                screenfull.toggle();
                // isFullscreen 居然是反的
                this.isFullscreen = !screenfull.isFullscreen;
            },
            logout() {
                localStorage.clear();
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>
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
        width: 280px;
        margin: 0 auto;
        margin-right: 0px;
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
</style>