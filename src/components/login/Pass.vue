<template>
    <div class="pass">
        <input type="text" placeholder="手机/邮箱/用户名">
        <div class="pass-input">
            <input :type="trueOrFalse" placeholder="密码">
            <span class="iconfont icon-kaiguanguan" v-if="close" @click="closeButton()"></span>
            <span class="iconfont icon-kaiguankai" v-if="open" @click="openButton()"></span>
        </div>
        <input type="text" placeholder="验证码" readonly>
        <button @click="login()">登录</button>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            close: true,
            open: false,
            trueOrFalse: 'password'
        };
    },
    mounted () {
        this.axios.get('http://192.168.31.110:3000/captcha',{

        }).then((res) => {
            console.log(res);
        })
    },
    methods: {
        closeButton(){
            this.close = false;
            this.open = true;
            this.trueOrFalse = 'text';
        },
        openButton(){
            this.close = true;
            this.open = false;
            this.trueOrFalse = 'password';
        },
        login(){
            
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .pass{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            width: 30rem;
            height: 5rem;
            border-radius: 0.5rem;
            border: 1px solid rgb(183, 183, 183);
            margin-top: 1.8rem;
            text-indent: 1rem;
            font-size: 1.3rem;
            color: rgb(74, 74, 74);
            &::placeholder{
                font-size: 1.3rem;
            }
        }
        .pass-input{
            position: relative;
            .iconfont{
                position: absolute;
                font-size: 4rem;
                top: 2.2rem;
                right: 1rem;
            }
            .icon-kaiguanguan{
                color: rgb(168, 168, 168);
            }
            .icon-kaiguankai{
                color: rgb(69, 139, 117);
            }
        }
        button{
            width: 30rem;
            color: white;
            background: #4cd96f;
            border-radius: 0.5rem;
            height: 5rem;
            font-size: 1.4rem;
            margin-top: 2.5rem;
        }
    }
</style>
