<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="/home">
                    <span class="iconfont icon-shouji1"></span>
                    <p>外卖</p>
                </router-link>
            </li>
            <li>
                <router-link to="/search">
                    <span class="iconfont icon-search1"></span>
                    <p>搜索</p>
                </router-link>
            </li>
            <li>
                <router-link to="/order">
                    <span class="iconfont icon-dingdan1"></span>
                    <p>订单</p>
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <span class="iconfont icon-yonghu"></span>
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .footer{
        border-top: 1px solid rgb(181, 181, 181);
        width: 100%;
        height: 5rem;
        position: fixed;
        bottom: 0;
        background: white;
        ul{
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                padding-top: 0.4rem;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                a{
                    span{
                        font-size: 2rem;
                    }
                    p{
                        margin-top: 0.3rem;
                        font-size: 1.2rem;
                    }
                }
                .light{
                    span{
                        color: #02a774;
                    }
                    p{
                        color: #02a774;
                    }
                }
            }
        }
    }
</style>
