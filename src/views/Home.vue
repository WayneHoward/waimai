<template>
    <div class="home">
        <Header title="昌平区">
            <template #icon-left>
                <span class="iconfont icon-search" @click="toSearch()"></span>
            </template>
            <template #icon-right>
                <p @click="toRorL">登录｜注册</p>
            </template>
        </Header>
        <h1>首页</h1>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './../components/header'
import Footer from './../components/footer.vue'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        toSearch(){
            this.$router.push('/search');
        },
        toRorL(){
            this.$router.push('/login');
        }
    },
    components: {
        Header,
        Footer
    },
};
</script>

<style scoped lang="less">
    .home{

    }
</style>
