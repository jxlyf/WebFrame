<!--
404，页面不存在界面
-->
<template>
    <div>
        <div class="wrap">
            <div style="margin-top:-20px;">
                <Poptip trigger="hover" content="返回到上一页面">
                    <Icon type="md-arrow-round-back" @click="$router.go(-1)" size="40" />
                </Poptip>
                <Poptip trigger="hover"  content="返回登陆界面">
                    <Icon type="md-log-in" @click="$router.push('/login')" size="40" />
                </Poptip>
                <h1 class="animated swing">404</h1>
                <h2>对不起，您访问的页面不存在！</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'notFound'
    }

</script>


<style scoped lang="scss">
    .wrap {
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        h1 {
            text-align: center;
            font-size: 10em;
            font-family: fantasy;
            color: #475669;
            letter-spacing: 40px;
            margin: 0;
        }

        h4 {
            color: #666;
        }
    }
</style>

