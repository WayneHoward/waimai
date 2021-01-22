<template>
    <div class="menu">
        <div class="anchor-box" ref="menuWrapper" v-show="true">
            <ul class="anchor">
                <li v-for="(item, index) in goodsList" :key="index">
                    <img :src="item.icon" alt="">{{item.name}}
                </li>
            </ul>
        </div>
        <div class="goods">
            <ul v-for="(item, index) in goodsList" :key="index">
                <h3>{{item.name}}</h3>
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
            console.log(res);
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
                h3{
                    width: 100%;
                    background: #f3f5f7;
                }
                li{

                }
            }
        }
    }
</style>
