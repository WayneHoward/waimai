<template>
    <div class="details">
        <div class="bgImg">
            <img :src="bgImg" alt="">
            <router-link to="/home">
                <span class="iconfont icon-fanhui"></span>
            </router-link>
        </div>
        <div class="info">
            <img class="profilePhoto" :src="profilePhoto" alt="">
            <van-cell is-link @click="showMessage()">
                <h1>
                    <span class="pin">品牌</span>
                    {{shopsName}}
                    <span class="iconfont icon-youjiantou"></span>
                </h1>
            </van-cell>
            <van-popup class="popupMessage" v-model="show" round>
                <span class="pin">品牌</span>
                {{shopsName}}
                <ul>
                    <li>
                        <span>{{list.score}}</span>
                        <span>评分</span>
                    </li>
                    <li>
                        <span>{{list.sellCount}}单</span>
                        <span>月售</span>
                    </li>
                    <li>
                        <span>蜂鸟专送</span>
                        <span>约{{list.deliveryTime}}分钟</span>
                    </li>
                    <li>
                        <span>{{list.deliveryPrice}}元</span>
                        <span>配送费用</span>
                    </li>
                    <li>
                        <span>{{list.distance}}</span>
                        <span>距离</span>
                    </li>
                </ul>
                <h3>--公告--</h3>
                <p>{{list.bulletin}}</p>
            </van-popup>
            <p class="influence">
                <span>{{rating}}&nbsp;&nbsp;&nbsp;</span>
                <span>月售{{sell}}单&nbsp;&nbsp;&nbsp;</span>
                <span>蜂鸟专送&nbsp;&nbsp;&nbsp;</span>
                <span>约{{needTime}}分钟&nbsp;&nbsp;&nbsp;</span>
                <span>距离{{km}}</span>
            </p>
            <van-cell is-link @click="showSale">
                <p class="discounts">
                    <span class="left">首单</span>
                    <span class="middle">新用户下单立减17元(不与其它活动同...</span>
                    <span class="right">{{discounts.length}}个优惠<span class="iconfont icon-xiajiantou"></span></span>
                </p>
            </van-cell>
            <van-popup class="popupSale" position="bottom" closeable v-model="show1">
                <h1>优惠活动</h1>
                <ul>
                    <li v-for="(item, index) in list.supports" :key="index">
                        <span>{{item.name}}</span>
                        {{item.content}}
                    </li>
                </ul>
            </van-popup>
            <p class="toNext">
                <router-link :to="{path: '/details/' + this.$route.params.id + '/' + 'menu'}">点餐</router-link>
                <router-link :to="{path: '/details/' + this.$route.params.id + '/' + 'mark'}">评价</router-link>
                <router-link :to="{path: '/details/' + this.$route.params.id + '/' + 'shop'}">商家</router-link>
            </p>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { Popup } from 'vant';
export default {
    props: {
        
    },
    data() {
        return {
            list: {},
            bgImg: "",
            profilePhoto: "",
            shopsName: "",
            rating: 0,
            sell: 0,
            needTime: 0,
            km: "",
            discounts: [],
            show: false,
            show1: false,
        };
    },
    mounted () {
        this.axios.get("/api/shops_details", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            // console.log(res);
            this.list = res.data.info;
            //背景图片
            this.bgImg = res.data.info.bgImg;
            //头像
            this.profilePhoto = res.data.info.avatar;
            //店名
            this.shopsName = res.data.info.name;
            //评分
            this.rating = res.data.info.score;
            //销量
            this.sell = res.data.info.sellCount;
            //配送时间
            this.needTime = res.data.info.deliveryTime;
            //距离
            this.km = res.data.info.distance;
            //优惠
            this.discounts = res.data.info.supports;
        });
    },
    methods: {
        showMessage(){
            this.show = true;
        },
        showSale(){
            this.show1 = true;
        },
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .details{
        background: #f3f5f7;
        padding-top: 18rem;
        height: 100%;
        padding-bottom: 0 !important;
        .van-icon{
            display: none;
        }
        .popupMessage{
            height: 25rem;
            width: 34rem;
            padding: 3rem 2rem;
            box-sizing: border-box;
            text-align: center;
            font-size: 1.8rem;
            font-weight: bold;
            color: rgb(48, 48, 48);
            .pin{
                font-size: 1.1rem;
                font-weight: 500;
                background: #fff004;
                display: inline-block;
                padding: 0.2rem 0.5rem;
                vertical-align: middle;
            }
            ul{
                margin-top: 2rem;
                margin-bottom: 2rem;
                display: flex;
                justify-content: space-around;
                li{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    span{
                        font-size: 1.2rem;
                        &:nth-child(1){
                            font-weight: bold;
                        }
                        &:nth-child(2){
                            color: rgb(159, 159, 159);
                        }
                    }
                }
            }
            h3{
                margin-bottom: 2rem;
                font-size: 1.1rem;
                color: rgb(154, 154, 154);
            }
            p{
                font-size: 1.3rem;
                text-align: left;
                color: rgb(96, 96, 96);
            }
        }
        .popupSale{
            width: 100%;
            height: 24rem;
            h1{
                text-align: center;
                font-weight: 600;
                font-size: 1.8rem;
                background: white;
                margin: 0rem 0rem !important;
                position: fixed;
                left: 50%;
                transform: translateX(-50%);
                height: 6rem;
                line-height: 6rem;
                width: 100%;
            }
            ul{
                margin-top: 6rem;
                width: 100%;
                background: white;
                padding: 0rem 2rem;
                box-sizing: border-box;
                li{
                    color: rgb(134, 134, 134);
                    font-size: 1.1rem;
                    margin-bottom: 1rem;
                    span{
                        display: inline-block;
                        border-radius: 0.3rem;
                        padding: 0.2rem 0.4rem;
                        color: white;
                        background: #f1884f;
                        margin-right: 0.5rem;
                    }
                    &:nth-child(2){
                        span{
                            background: #70bc46;
                        }
                    }
                    &:nth-child(3){
                        span{
                            background: #f07373;
                        }
                    }
                }
            }
        }
        .bgImg{
            width: 100%;
            height: 5rem;
            position: fixed;
            z-index: 7;
            top: 0;
            overflow: hidden;
            img{
                width: 100%;
            }
            .icon-fanhui{
                position: absolute;
                font-size: 2rem;
                top: 50%;
                left: 0.5rem;
                transform: translateY(-50%);
                color: white;
                font-weight: bold;
            }
        }
        .info{
            width: 100%;
            height: 17.5rem;
            background: white;
            border-bottom: 1px solid rgb(217, 217, 217);
            position: fixed;
            top: 5rem;
            z-index: 99;
            .profilePhoto{
                display: block;
                position: absolute;
                top: -4rem;
                left: 50%;
                transform: translateX(-50%);
                width: 7rem;
                z-index: 99;
                border: 0.5px solid rgb(225, 225, 225);
            }
            h1{
                text-align: center;
                font-size: 2.2rem;
                font-weight: bold;
                margin-top: 3.5rem;
                color: rgb(55, 55, 55);
                .pin{
                    font-size: 1.2rem;
                    font-weight: 500;
                    background: #fff004;
                    display: inline-block;
                    padding: 0.2rem 0.5rem;
                    vertical-align: middle;
                }
                .icon-youjiantou{
                    font-size: 1.4rem;
                    vertical-align: middle;
                }
            }
            .influence{
                margin-top: 1rem;
                margin-bottom: 1rem;
                text-align: center;
                span{
                    font-size: 1.2rem;
                }
            }
            .discounts{
                padding: 0.5rem;
                width: 32rem;
                margin: 0 auto;
                border: 1px solid rgb(203, 203, 203);
                font-size: 1.2rem;
                span{
                    display: inline-block;
                }
                .left{
                    font-size: 1rem;
                    color: white;
                    background: #70bc46;
                    padding: 0.2rem 0.5rem;
                    margin-right: 0.5rem;
                }
                .right{
                    margin-left: 0.5rem;
                    .icon-xiajiantou{
                        font-size: 0.1rem;
                        transform: translateY(-0.2rem);
                    }
                }
            }
            .toNext{
                margin-top: 1rem;
                display: flex;
                justify-content: space-around;
                a{
                    font-size: 1.5rem;
                }
                .light{
                    font-weight: bold;
                    color: #02a774;
                    border-bottom: 4px solid #02a774;
                    padding-bottom: 1rem;
                }
            }
        }
    }
</style>
