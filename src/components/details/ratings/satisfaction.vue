<template>
    <ul class="comments">
        <li v-for="(item, index) in list" :key="index">
            <div class="left"><span class="iconfont icon-yonghu1"></span></div>
            <div class="right">
                <div class="line1">
                    <p>{{item.username}}</p>
                    <p>{{item.rateTime | time}}</p>
                </div>
                <div class="line2">
                    <img src="./../../../assets/images/star_active.png" alt="">
                    <img src="./../../../assets/images/star_active.png" alt="">
                    <img src="./../../../assets/images/star_active.png" alt="">
                    <img src="./../../../assets/images/star_active.png" alt="">
                    <img src="./../../../assets/images/star_normal.png" alt="">
                </div>
                <div class="line3">
                    {{item.text}}
                </div>
                <div class="line4">
                    <span class="iconfont icon-zan"></span>
                    <span v-for="(it, ind) in item.recommend" :key="ind">{{it}}</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            list: []
        };
    },
    created () {
        this.axios.get("/api/shops_details", {
            params: {
                id: this.$route.params.id
            }
        }).then((res) => {
            let com = res.data.ratings.filter(item => {
                return item.score > 3
            });
            this.list = com;
        });
    },
    filters: {
        time(v){
            let year = new Date(v).getFullYear();
            let month = new Date(v).getMonth() + 1;
            if(month < 10){
                month = '0' + month
            }
            let day = new Date(v).getDate();
            if(day < 10){
                day = '0' + day
            }
            let hour = new Date(v).getHours();
            if(hour < 10){
                hour = '0' + hour
            }
            let minute = new Date(v).getMinutes();
            if(minute < 10){
                minute = '0' + minute
            }
            let second = new Date(v).getSeconds();
            if(second < 10){
                second = '0' + second
            }
            return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        }  
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .comments{
        background: white;
        z-index: 6;
        li{
            width: 100%;
            padding: 2rem 2rem;
            box-sizing: border-box;
            border-top: 1px solid rgb(220, 220, 220);
            display: flex;
            .left{
                span{
                    font-size: 3rem;
                    color: #8db5e2;
                }
            }
            .right{
                width: 100%;
                margin-left: 1rem;
                .line1{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                    p{
                        font-size: 1.1rem;
                        &:nth-child(2){
                            color: rgb(186, 186, 186);
                        }
                    }
                }
                .line2{
                    display: flex;
                    margin-bottom: 1rem;
                    img{
                        height: 1rem;
                    }
                }
                .line3{
                    font-size: 1.18rem;
                    margin-bottom: 1rem;
                }
                .line4{
                    .iconfont{
                        color: #f5a100;
                        font-size: 1.4rem;
                        border: none;
                        padding: 0;
                    }
                    span{
                        display: inline-block;
                        font-size: 1.1rem;
                        color: rgb(185, 185, 185);
                        border: 1px solid rgb(185, 185, 185);
                        padding: 0.2rem 0.5rem;
                        margin-right: 1rem;
                        margin-bottom: 0.3rem;
                    }
                }
            }
        }
    }
</style>
