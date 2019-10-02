<!--提供md5和base64加密方式-->
<template>
    <div>
        <Form :model="formItem" :label-width="80">
            <h2 style="text-align: center;margin-top: 20px">
                MD5:根据输入长度信息进行散列计算，得到固定长度输出，常用于密码保存(通常会加盐处理)，或用于验证信息的完整性。</h2>
            <FormItem label="MD5:">
                <Input v-model="formItem.md5" placeholder="Enter something..."/>
                <br/>
                <div style="padding: 20px;width: 380px;float:left;">
                   原字符串:"<span style="color: red">{{formItem.md5}}</span>"
                    <hr>
                    <br>md5-32位小写:"<span style="color: red">{{getMD5(formItem.md5)}}</span>"
                    <hr>
                    <br>
                    md5-32位大写:"<span style="color: red">{{getMD5(formItem.md5).toUpperCase()}}</span>"
                    <hr>
                    <br>
                    md5-16位小写:"<span style="color: red">{{getMD5(formItem.md5).substring(8,24)}}</span>"
                    <hr>
                    <br>
                    md5-16位大写:"<span style="color: red">{{(getMD5(formItem.md5).substring(8,24)).toUpperCase()}}</span>"
                    <hr>
                </div>
                <div style="float: right;border: rgba(50,50,50,0.5) 1px solid;width: 500px;margin-right: 100px;padding: 20px;margin-top: 20px">
                    <h3 style="text-align: center;color: red">js中MD5使用方法</h3>
                        1、安装依赖：npm install js-md5 --save;<br/>
                        2、导入：import md5 from 'js-md5';<br>
                        3、使用：md5(要被加密的字符串);<br>
                </div>
            </FormItem>
            <h2 style="text-align: center;margin-top: 20px">Base64:常用于在通常处理文本数据的场合，表示、传输、存储一些二进制数据（或不可打印的字符串）。</h2>
            <FormItem label="Base64">
                <Input v-model="formItem.base64" placeholder="Enter something..."/>
                <br/>
                <div style="padding: 20px;width: 450px;float: left">
                    Base64加密:"<span style="color: red">{{getBase64Encode(formItem.base64)}}</span>"
                    <hr>
                    <br>
                    Base64解密:"<span style="color: red">{{getBase64Decode(formItem.base64)}}</span>"
                    <hr>
                </div>
                <div style="float: right;border: rgba(50,50,50,0.5) 1px solid;width: 500px;margin-right: 100px;padding: 20px;margin-top: 20px">
                    <h3 style="text-align: center;color: red">js中Base64加密使用方法</h3>
                    1、安装依赖：npm install js-base64 --save;<br/>
                    2、导入：let base64 = require('js-base64').Base64;<br>
                    3、加密：base64.encode(加密字符串);<br>
                    4、解密：base64.decode(解密字符串);<br>
                </div>
            </FormItem>
        </Form>
        <div style="width: 500px;margin: 40px">
            <span>JSON对象通过JSON.stringify(Object))变成字符串</span><br>
            <br/>
            {{formItem}}
            <br/>
            <span style="color: red">{{getMD5(JSON.stringify(formItem))}}</span>
            <hr>
        </div>

    </div>
</template>

<script>
    import md5 from 'js-md5';

    let base64 = require('js-base64').Base64;
    export default {
        name: "util1",
        data() {
            return {
                formItem: {
                    md5: '',
                    base64: ''
                }
            }
        },
        methods: {
            getMD5(str) {
                return md5(str);
            },
            getBase64Encode(str) {
                return base64.encode(str);
            },
            getBase64Decode(str) {
                return base64.decode(str);
            }
        }

    }
</script>

<style scoped>

</style>