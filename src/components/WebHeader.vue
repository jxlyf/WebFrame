<template>
    <Header :style="{padding: 0}" class="layout-header-bar">
        <Menu mode="horizontal" active-name="1">
            <div class="layout-logo">
                <Icon @click="$emit('collapsedSider')" :class="rotateIcon" :style="{margin: '0 20px'}"
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
                <MenuItem name="3" >
                    <Icon type="ios-expand" color="blue" size="18" @click="toggleFullscreen" :class="[isFullscreen? 'fa-compress': 'fa-arrows-alt','fa ']"/>
                    Item 3
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-exit-outline" color="red" size="18"/>
                    Exit
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
    import "@/assets/libs/screenfull.js";
    export default {
        props:['isCollapsed'],
        name: "header",
        data(){
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
        methods:{
            toggleFullscreen() {
               //全屏
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
</style>