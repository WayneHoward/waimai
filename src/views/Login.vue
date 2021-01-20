<template>
    <div class="login-page">
        <span @click="goBack()" class="iconfont icon-fanhui"></span>
        <h1>蜂鸟外卖</h1>
        <ul>
            <li><router-link to="/login/message">短信登录</router-link></li>
            <li><router-link to="/login/pass">密码登录</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            urlPath: "",
        };
    },
    mounted () {
        this.urlPath = localStorage.getItem('path');
    },
    methods: {
        goBack(){
            this.$router.push(this.urlPath);
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .login-page{
        position: relative;
        padding-top: 4rem;
        .icon-fanhui{
            position: absolute;
            top: -3rem;
            left: 0.5rem;
            font-size: 2rem;
            color: gray;
        }
        h1{
            text-align: center;
            color: #02a774;
            font-size: 4rem;
            font-weight: bolder;
            margin-bottom: 5rem;
        }
        ul{
            display: flex;
            width: 15rem;
            margin: 0 auto;
            justify-content: space-between;
            li{
                a{
                    font-size: 1.4rem;
                }
                .light{
                    font-weight: bold;
                    color: #02a774;
                    border-bottom: 4px solid #02a774;
                    padding-bottom: 0.3rem;
                }
            }
        }
    }

</style>
