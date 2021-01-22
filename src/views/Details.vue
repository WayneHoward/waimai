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
            <h1>
                <span class="pin">品牌</span>
                {{shopsName}}
                <span class="iconfont icon-youjiantou"></span>
            </h1>
            <p class="influence">
                <span>{{rating}}&nbsp;&nbsp;&nbsp;</span>
                <span>月售{{sell}}单&nbsp;&nbsp;&nbsp;</span>
                <span>蜂鸟专送&nbsp;&nbsp;&nbsp;</span>
                <span>约{{needTime}}分钟&nbsp;&nbsp;&nbsp;</span>
                <span>距离{{km}}</span>
            </p>
            <p class="discounts">
                <span class="left">首单</span>
                <span class="middle">新用户下单立减17元(不与其它活动同...</span>
                <span class="right">{{discounts.length}}个优惠<span class="iconfont icon-xiajiantou"></span></span>
            </p>
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
export default {
    props: {
        
    },
    data() {
        return {
            bgImg: "",
            profilePhoto: "",
            shopsName: "",
            rating: 0,
            sell: 0,
            needTime: 0,
            km: "",
            discounts: [],
        };
    },
    mounted () {
        this.axios.get("/api/shops_details", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            // console.log(res);
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

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .details{
        background: #f3f5f7;
        padding-top: 17rem;
        height: 100%;
        padding-bottom: 0 !important;
        .bgImg{
            width: 100%;
            height: 5rem;
            position: fixed;
            z-index: 0;
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
            height: 16.5rem;
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
                border: 0.5px solid rgb(225, 225, 225);
            }
            h1{
                text-align: center;
                font-size: 2.2rem;
                font-weight: bold;
                margin-top: 3.5rem;
                color: black;
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
