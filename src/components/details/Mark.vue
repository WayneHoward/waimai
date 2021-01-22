<template>
    <div class="mark">
        <div class="ratInfo">
            <div class="left">
                <h2>{{ratInfoScore}}</h2>
                <p>综合评分</p>
                <span>高于周边商家{{ratHigh}}%</span>
            </div>
            <div class="right">
                <div class="line">
                    <img src="./../../assets/images/star_active.png" alt="">
                    <img src="./../../assets/images/star_active.png" alt="">
                    <img src="./../../assets/images/star_active.png" alt="">
                    <img src="./../../assets/images/star_active.png" alt="">
                    <img src="./../../assets/images/star_normal.png" alt="">
                    <p>服务态度<span>4.1</span></p>
                </div>
                <div class="line">
                    <img src="./../../assets/images/star_active.png" alt="">
                    <img src="./../../assets/images/star_active.png" alt="">
                    <img src="./../../assets/images/star_active.png" alt="">
                    <img src="./../../assets/images/star_active.png" alt="">
                    <img src="./../../assets/images/star_normal.png" alt="">
                    <p>商品评分<span>4.3</span></p>
                </div>
                <div class="line1">
                    <p>送达时间 <span>28分钟</span></p>
                </div>
            </div>
        </div>
        <div class="allComment">
            <router-link :to="{path: '/details/' + this.$route.params.id + '/' + 'mark/' + 'all'}">
                全部24
            </router-link>
            <router-link :to="{path: '/details/' + this.$route.params.id + '/' + 'mark/' + 'satisfaction'}">
                满意18
            </router-link>
            <router-link :to="{path: '/details/' + this.$route.params.id + '/' + 'mark/' + 'dissatisfaction'}">
                不满意6
            </router-link>
            <p><span class="iconfont icon-icon_duihao-mian"></span>只看有内容的评价</p>
        </div>
        <div class="ratings">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            ratInfoScore: 0,
            ratHigh: 0,
        };
    },
    mounted () {
        this.axios.get("/api/shops_details", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            this.goodsList = res.data.goods;
            //大评分
            this.ratInfoScore = res.data.info.score;
            this.ratHigh = res.data.info.sellCount;
        });  
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .mark{
        .ratInfo{
            width: 100%;
            height: 12rem;
            padding: 2rem 0rem;
            box-sizing: border-box;
            background: white;
            border-bottom: 1px solid rgb(220, 220, 220);
            display: flex;
            margin-bottom: 1.5rem;
            .left{
                width: 14rem;
                height: 100%;
                border-right: 1px solid rgb(220, 220, 220);
                box-sizing: border-box;
                text-align: center;
                h2{
                    color: #ff9900;
                    font-size: 3rem;
                }
                p{
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                    font-size: 1.1rem;
                }
                span{
                    font-size: 1.1rem;
                    color: rgb(178, 178, 178);
                }
            }
            .right{
                width: 23.5rem;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                .line{
                    display: flex;
                    margin: 0.7rem;
                    img{
                        display: block;
                        height: 1.5rem;
                        margin-right: 0.5rem;
                    }
                    p{
                        font-size: 1.2rem;
                        span{
                            color: #ff9900;
                        }
                    }
                }
                .line1{
                    position: absolute;
                    left: 3.5rem;
                    top: 6rem;
                    p{
                        font-size: 1.1rem;
                        span{
                            color: #a8a8a8;
                        }
                    }
                }
            }
        }
        .allComment{
            border-top: 1px solid rgb(220, 220, 220);
            width: 100%;
            height: 12rem;
            background: white;
            padding: 1.5rem 2rem;
            a{
                display: inline-block;
                color: rgb(91, 91, 91);
                background: #dbdddf;
                font-size: 1.2rem;
                padding: 1rem;
                margin-right: 2rem;
            }
            .light{
                color: white;
                background: #02a774;
            }
            p{
                font-size: 1.2rem;
                color: rgb(162, 162, 162);
                margin-top: 2rem;
                .iconfont{
                    display: inline-block;
                    margin-right: .5rem;
                    font-size: 2rem;
                    color: #02a774;
                    transform: translateY(0.3rem);
                }
            }
        }
    }
</style>
