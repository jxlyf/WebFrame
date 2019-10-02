<template>
    <div class="bg">
        <div class="login">
            <h1>WebFrame</h1>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="signin">
                <FormItem prop="user" class="login-input">
                    <Input type="text" v-model="formInline.user" placeholder="Username" clearable style="background-color: rgba(50, 50, 50, 0.5);">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <br>
                <FormItem prop="password" class="login-input">
                    <Input type="password" v-model="formInline.password" placeholder="Password" clearable >
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <br/>
                <FormItem class="login-input">
                    <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                    <Button @click="handleReset('formInline')" style="float: right">Reset</Button>
                </FormItem>
            </Form>
        </div>
        <!-- 粒子漂浮物 -->
        <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="30"
                       shapeType="star" :particleSize="5" linesColor="#fff" :linesWidth="2"
                       :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3"
                       :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"></vue-particles>
    </div>
</template>
<script>
    import Vue from "vue";
    import VueParticles from "vue-particles";
    Vue.use(VueParticles);
    export default {
        name: 'signin',
        data() {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        {required: true, message: 'Please fill in the user name', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'Please fill in the password.', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            message: 'The password length cannot be less than 6 bits',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$router.push('/table');
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style scoped lang="scss">
    .bg {
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#28343b+0,828c95+64,b5bdc8+100 */
        background: rgb(40,52,59); /* Old browsers */
        background: -moz-linear-gradient(top,  rgba(40,52,59,1) 0%, rgba(130,140,149,1) 64%, rgba(181,189,200,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  rgba(40,52,59,1) 0%,rgba(130,140,149,1) 64%,rgba(181,189,200,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  rgba(40,52,59,1) 0%,rgba(130,140,149,1) 64%,rgba(181,189,200,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#28343b', endColorstr='#b5bdc8',GradientType=0 ); /* IE6-9 */
        /*background-size: contain;*/
        #particles-js {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }

    .login {
        width: 310px;
        padding: 30px;
        z-index: 3;
        margin-right: -40%;
        position: relative;
        background: rgba(50, 50, 50, 0.5);
        border: rgba(100, 100, 100, 0.5) 1px solid;
        .login-input{
            width: 250px;
            margin-bottom: 30px;
        }
        h1{
            color: white;
            margin-bottom: 20px;
            text-align: center;
        }
    }
</style>
