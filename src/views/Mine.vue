<!--
 * @Author: your name
 * @Date: 2021-01-16 11:33:57
 * @LastEditTime: 2021-01-19 15:58:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目\waimai\waimai\src\views\Mine.vue
-->
<template>
    <div class="mine">
        <Header title="我的"></Header>
        <div class="top">
            <div class="user">
                <img src="./../assets/images/user_normal.jpg" alt="">
            </div>
            <div class="login">
                <div v-if="unLogin">
                    <p>
                        <router-link to="/login">登录/注册</router-link>
                    </p>
                    <p><span class="iconfont icon-shouji1"></span>暂无绑定手机号</p>
                </div>
                <div class="isLogin" v-if="isLogin">
                    <p><span class="iconfont icon-shouji1"></span>{{phone}}</p>
                </div>
            </div>
            <div class="next">
                <span class="iconfont icon-qianjin"></span>
            </div>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <p><span>0.00</span>元</p>
                    <p>我的余额</p>
                </li>
                <li>
                    <p><span>0</span>元</p>
                    <p>我的优惠</p>
                </li>
                <li>
                    <p><span>0</span>元</p>
                    <p>我的积分</p>
                </li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li>
                    <div class="left">
                        <span class="iconfont icon-dingdan"></span>我的订单
                    </div>
                    <div class="right">
                        <span class="iconfont icon-qianjin"></span>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <span class="iconfont icon-tubiao309"></span>积分商城
                    </div>
                    <div class="right">
                        <span class="iconfont icon-qianjin"></span>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <span class="iconfont icon-jifen"></span>蜂鸟外卖会员卡
                    </div>
                    <div class="right">
                        <span class="iconfont icon-qianjin"></span>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="left">
                        <span class="iconfont icon-chengshi"></span>服务中心
                    </div>
                    <div class="right">
                        <span class="iconfont icon-qianjin"></span>
                    </div>
                </li>   
            </ul>
        </div>
        <button class="logout" v-if="isLogin" @click="logout()">退出登录</button>
        
        
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './../components/header.vue'
import Footer from './../components/footer.vue'
export default {
    props: {

    },
    data() {
        return {
            phone: "",
            unLogin: true,
            isLogin: true,
        };
    },
    mounted () {
        //将url路径存入storage······
        localStorage.setItem("path", window.location.href.replace(window.location.host, "").replace(window.location.protocol, "").slice(4)); 
        //检测是否登录
        if(localStorage.getItem('phone') != null || localStorage.getItem('phone') != undefined){
            this.unLogin = false;
            this.isLogin = true;
            this.phone = localStorage.getItem('phone');
        }else{
            this.unLogin = true;
            this.isLogin = false;
        }  
    },
    methods: {
        logout(){
            //询问框
            layer.open({
                title: [
                    '提示',
                    'font-size: 1.4rem; color: black'
                ]
                ,style: 'font-size: 1.4rem; color: #bababa'
                ,content: '确认退出吗？'
                ,btn: ['确定', '取消']
                ,yes: function(index){
                    localStorage.removeItem('phone');
                    window.location.reload();
                    layer.close(index);
                }
            });
        }
    },
    components: {
        Header,
        Footer
    },
};
</script>

<style scoped lang="less">
.mine{
    padding-bottom: 5rem;
    box-sizing: border-box;
    .top{
        width: 100%;
        height: 9.9rem;
        border-top: 1px solid #ffffff;
        background-color: #02a774;
        padding: 2rem 2rem 2rem 1.2rem;
        box-sizing: border-box;
        overflow: hidden;
        .user{
            float: left;
            img{
                width: 6rem;
                height: 100%;
                border-radius: 50%;
            }
        }
        .login{
            float: left;
            margin-left: 1.6rem;
            a{
                color: #ffffff;
                font-size: 1.6rem;
                font-weight: bold;
            }
            p{
                margin-top: 0.5rem;
                font-size: 1.2rem;
                color: #ffffff;
                .icon-shouji1{
                    font-size: 1.4rem;
                }
                a{
                    font-size: 1.8rem;
                }
            }
            .isLogin{
                p{
                    margin-top: 1.5rem;
                    font-size: 1.4rem;
                    .icon-shouji1{
                        font-size: 1.4rem;
                    }
                }
            }
        }
        .next{
            float: right;
            margin-top: 2rem;
            .icon-qianjin{
                color: #ffffff;
                font-size: 1.8rem;
            }
        }
    }
    .nav{
        height: 8rem;
        border-bottom: 1px solid #cccccc;
        ul{
            height: 100%;
            li{
                display: inline-block;
                width: 33.33333%;
                height: 100%;
                border-right: 1px solid #cccccc;
                padding: 2rem 1.6rem .8rem 2.6rem;
                text-align: center;
            }
            li:nth-of-type(1){
                span{
                    color: #ff9900;
                    font-weight: bold;
                    font-size: 2.2rem;
                }
            }
            li:nth-of-type(2){
                span{
                    color: #ff5f3e;
                    font-weight: bold;
                    font-size: 2.2rem;
                }
            }
            li:nth-of-type(3){
                span{
                    color: #6ac20b;
                    font-weight: bold;
                    font-size: 2.2rem;
                }
            }
        }
    }
    .content{
        ul{
            width: 100%;
            border-top: 1px solid #cccccc;
            padding-left: 3.2rem;
            margin-top: 1rem;
            li{
                border-bottom: 1px solid #cccccc;
                height: 5rem;
                padding: 1.8rem 0;
                padding-right: 1rem;
                font-size: 1.4rem;
                position: relative;
                .left{
                    float: left;
                    span{
                        position: absolute;
                        left: -2.5rem;
                        font-size: 2rem;
                    }
                    .icon-dingdan{
                        color: rgb(63, 152, 119);
                    }
                    .icon-tubiao309{
                        color: #ff5f3e;
                    }
                    .icon-jifen{
                        color: #ff9a02;
                    }
                    .icon-chengshi{
                        color: #02a774;
                    }
                }
                .right{
                    float: right;
                }
            }
        }
    }
    .logout{
        margin-top: 1rem;
        text-align: center;
        width: 100%;
        height: 4rem;
        color: white;
        font-size: 1.3rem;
        background: #ef4f4f;
        border-radius: 0.5rem;
    }
}
</style>

