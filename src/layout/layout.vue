<template>
    <Layout class="layout ivu-layout ivu-layout-has-sider">
        <side-bar :is-collapsed="isCollapsed"></side-bar>
        <Layout>
            <top-bar :is-collapsed="isCollapsed" @collapsedSider="collapsedSider"></top-bar>
            <contents></contents>
            <!--<footer-info></footer-info>-->
        </Layout>
    </Layout>
</template>

<script>
    import WebSider from './WebSider';
    import WebHeader from './WebHeader';
    import WebContent from './WebContent';
    // import WebFooter from '../view/WebFooter';

    export default {
        name: "layout1",
        components: {
            'side-bar': WebSider,
            'top-bar': WebHeader,
            'contents': WebContent
            // 'footer-info': WebFooter
        },
        data() {
            return {
                isCollapsed: false
            }
        },
        methods: {
            collapsedSider() {
                // this.$refs.side1.toggleCollapse();
                this.isCollapsed = !this.isCollapsed;
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
</style>