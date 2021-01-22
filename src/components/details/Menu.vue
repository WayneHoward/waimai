<template>
    <div class="menu">
        <div class="anchor-box" ref="menuWrapper" v-show="true">
            <ul class="anchor">
                <li v-for="(item, index) in goodsList" :key="index">
                    <img :src="item.icon" alt="">{{item.name}}
                </li>
            </ul>
        </div>
        <div class="goods" ref="foodsWrapper">
            <ul v-for="(item, index) in goodsList" :key="index">
                <h3>{{item.name}}</h3>
                <li v-for="(it, ind) in item.foods" :key="ind">
                    <div class="left">
                        <img :src="it.icon" alt="">
                    </div>
                    <div class="right">
                        <p>{{it.name}}</p>
                        <p>{{it.description}}</p>
                        <p>
                            <span>月售{{it.sellCount}}份</span>
                            <span>好评率{{it.rating}}%</span>
                        </p>
                        <p>¥{{it.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
//菜单
import BScroll from "better-scroll";

export default {
    props: {

    },
    data() {
        return {
            goodsList: [],
        };
    },

    mounted () {
        this.axios.get("/api/shops_details", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            this.goodsList = res.data.goods;
            // console.log(res);
        });
    },
    methods: {
        
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .menu{
        display: flex;
        .anchor-box{
        }
        .anchor{
            background: #f3f5f7;
            padding: 0 1rem;
            box-sizing: border-box;
            li{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 5.5rem;
                width: 8rem;
                line-height: 5.5rem;
                font-size: 1.4rem;
                border-bottom: 1px solid rgb(219, 219, 219);
                img{
                    height: 1.4rem;
                    margin-right: 0.7rem;
                }
            }
        }
        .goods{
            width: 100%;
            ul{
                width: 100%;
                background: white;
                // padding: 0rem 1.5rem;
                h3{
                    width: 100%;
                    background: #f3f5f7;
                    text-indent: 1.5rem;
                    font-size: 1.2rem;
                    border-left: 4px solid rgb(178, 178, 178);
                    color: rgb(110, 110, 110);
                    padding: 0.5rem 0rem;
                    box-sizing: border-box;
                }
                li{
                    padding: 2rem 1.5rem;
                    border-bottom: 1px solid rgb(220, 220, 220);
                    display: flex;
                    .left{
                        margin-right: 1.5rem;
                        img{
                            // width: 6rem;
                            height: 6rem;
                        }
                    }
                    .right{
                        p{
                            font-size: 1.2rem;
                            margin-bottom: 0.5rem;
                            &:nth-child(1){
                                color: rgb(66, 66, 66);
                            }
                            &:nth-child(2){
                                color: rgb(180, 180, 180);
                            }
                            &:nth-child(3){
                                color: rgb(180, 180, 180);
                                span{
                                    display: inline-block;
                                    margin-right: 1rem;
                                }
                            }
                            &:nth-child(4){
                                color: rgb(255, 83, 10);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
