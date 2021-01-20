<template>
    <div class="message">
        <div class="code">
            <div class="get">
                <input type="number" placeholder="手机号" @input="getChange()" v-model="phone" :readonly="isReadonly">
                <span class="s0" v-if="isShow0">获取验证码</span>
                <span class="s1" v-if="isShow1" @click="getCode()">获取验证码</span>
                <span class="s2" v-if="isShow2">已发送（{{time}}s）</span>
            </div>
            <input type="text" placeholder="验证码" v-model="code">
            <p>温馨提示：未注册蜂鸟外卖账号的手机号，登录时 将自动注册，且代表已同意<span>《用户服务协议》</span></p>
            <button @click="login()">登录</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            urlPath: "",
            time: 15,
            isShow0: true,
            isShow1: false,
            isShow2: false,
            isReadonly: false,
            phone: "",
            code: "",
        };
    },
    mounted () {
        this.urlPath = localStorage.getItem('path');
    },
    methods: {
        getCode(){
            this.isShow1 = false;
            this.isShow2 = true;
            this.isReadonly = true;
            this.axios.get('http://192.168.31.110:3000/sendcode',{
                phone: this.phone
            }).then((res) => {
                console.log(res);
                let timer1 = setInterval(() => {
                    this.time --;
                }, 1000);
                let timer2 = setTimeout(() => {
                    this.isShow1 = true;
                    this.isShow2 = false;
                    this.time = 15;
                    clearInterval(timer1);
                    this.isReadonly = false;
                }, 15000);
            });
        },
        getChange(){
            if(this.phone.length == 11){
                this.isShow0 = false;
                this.isShow1 = true;
            }else{
                this.isShow0 = true;
                this.isShow1 = false;
            }
        },
        login(){
            this.axios.post('http://192.168.31.110:3000/login_sms',{
                phone: this.phone,
                colde: this.code,
            }).then((res) => {
                console.log(res.data.phone);
                localStorage.setItem('phone', res.data.phone);
                this.$router.push(this.urlPath);
            });
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .message{
        .code{
            width: 30rem;
            margin: 0 auto;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .get{
                position: relative;
                span{
                    position: absolute;
                    color: rgb(72, 72, 72);
                    font-size: 1.3rem;
                    white-space: nowrap;
                    right: 1rem;
                    top: 3.5rem;
                }
                .s0{
                    color: rgb(201, 201, 201);
                }
                .s2{
                    color: rgb(72, 72, 72);
                }
            }
            input{
                width: 100%;
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
            p{
                margin-top: 1.8rem;
                margin-bottom: 3.2rem;
                color: rgb(144, 144, 144);
                font-size: 1.3rem;
                span{
                    color: 02a774
                }
            }
            button{
                width: 100%;
                color: white;
                background: #4cd96f;
                border-radius: 0.5rem;
                height: 5rem;
                font-size: 1.4rem;
            }
        }
    }
</style>
