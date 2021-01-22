<!--
 * @Author: your name
 * @Date: 2021-01-16 11:33:57
 * @LastEditTime: 2021-01-16 12:39:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \waimai\waimai\src\views\Order.vue
-->
<template>
    <div class="order">
        <Header title="订单列表"></Header>
        <div class="content">
            <img src="./../assets/images/person_03.png" alt="">
            <p>登录后查看外卖订单</p>
            <button>立即登陆</button>
        </div>
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

        };
    },
    methods: {

    },
    components: {
        Header,
        Footer
    },
};
</script>

<style scoped lang="less">
.order{
    padding-bottom: 5rem;
    box-sizing: border-box;
}
.content{
    margin-top: 13.8rem;
    text-align: center;
    img{
        margin: 0 auto;
    }
    p{
        font-size: 1.4rem;
        color: #666;
    }
    button{
        width: 9.6rem;
        height: 3.9rem;
        border-radius: 6px;
        background-color: #02a774;
        color: #ffffff;
        font-size: 1.2rem;
        margin-top: 1rem;
    }
}
</style>
