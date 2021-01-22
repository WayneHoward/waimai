<template>
    <div class="shop">
        <div class="sendMessage">
            <h2>配送信息</h2>
            <p><span>蜂鸟专送</span>由商家配送提供配送，约28分钟送法，距离1000m</p>
            <p>配送费¥4</p>
        </div>
        <ul class="act">
            <h2>活动与服务</h2>
            <li v-for="(item, index) in infoList.supports" :key="index">
                <span>{{item.name}}</span>
                {{item.content}}
            </li>
        </ul>
        <div class="real">
            <h2>商家实景</h2>
            <div class="photo">
                <img v-for="(item, index) in infoList.pics" :key="index" :src="item" alt="">
            </div>
        </div>
        <ul class="info">
            <h2>商家信息</h2>
            <li>
                <span>品类</span>
                <span>{{infoList.category}}</span>
            </li>
            <li>
                <span>商家电话</span>
                <span>{{infoList.phone}}</span>
            </li>
            <li>
                <span>地址</span>
                <span>{{infoList.address}}</span>
            </li>
            <li>
                <span>营业时间</span>
                <span>{{infoList.workTime}}</span>
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
            infoList: {}
        };
    },
    created () {
        this.axios.get("/api/shops_details", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            this.infoList = res.data.info;
        });
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .shop{
        z-index: 3;
        .sendMessage{
            width: 100%;
            height: 12rem;
            background: white;
            border-bottom: 1px solid rgb(220, 220, 220);
            padding: 2rem 1.5rem;
            box-sizing: border-box;
            margin-bottom: 1.5rem;
            h2{
                color: black;
                font-weight: bold;
                font-size: 1.6rem;
                margin-bottom: 1rem;
            }
            p{
                margin-bottom: 0.5rem;
                width: 30rem;
                span{
                    display: inline-block;
                    color: white;
                    background: #0097ff;
                    border-radius: 0.5rem;
                    padding: 0.3rem;
                    margin-right: 1rem;
                    font-size: 1.1rem;
                }
                font-size: 1.2rem;
                color: rgb(132, 132, 132);
            }
        }
        .act{
            width: 100%;
            background: white;
            padding: 2rem 1.5rem;
            box-sizing: border-box;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid rgb(220, 220, 220);
            border-top: 1px solid rgb(220, 220, 220);
            h2{
                color: black;
                font-weight: bold;
                font-size: 1.6rem;
                margin-bottom: 1rem;
            }
            li{
                color: rgb(134, 134, 134);
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
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
        .real{
            width: 100%;
            background: white;
            padding: 2rem 1.5rem;
            box-sizing: border-box;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid rgb(220, 220, 220);
            border-top: 1px solid rgb(220, 220, 220);
            h2{
                color: black;
                font-weight: bold;
                font-size: 1.6rem;
                margin-bottom: 1rem;
            }
            .photo{
                display: flex;
                overflow: auto;
                img{
                    display: inline-block;
                    width: 12rem;
                    height: 9rem;
                    margin-right: 1rem;
                }
            }
        }    
        .info{
            width: 100%;
            background: white;
            padding: 2rem 1.5rem;
            box-sizing: border-box;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid rgb(220, 220, 220);
            border-top: 1px solid rgb(220, 220, 220);
            h2{
                color: black;
                font-weight: bold;
                font-size: 1.6rem;
                margin-bottom: 1rem;
            }
            li{
                display: flex;
                justify-content: space-between;
                padding: 1.5rem 0rem;
                border-bottom: 1px solid rgb(220, 220, 220);
                span{
                    font-size: 1.1rem;
                    &:nth-child(1){
                        font-weight: bold;
                        color: rgb(59, 59, 59);
                    }
                }
            }
        }    
    }
</style>
