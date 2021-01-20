<template>
    <ul class="star">
        <!-- <li v-for="(item, index) in starList" :key="index"><img :src="item" alt=""></li> -->
        <li><img src="./../assets/images/star_active.png" alt=""></li>
        <li><img src="./../assets/images/star_active.png" alt=""></li>
        <li><img src="./../assets/images/star_active.png" alt=""></li>
        <li><img src="./../assets/images/star_active.png" alt=""></li>
        <li><img src="./../assets/images/half_star.png" alt=""></li>
    </ul>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            ratingList: [],
            starList: [],
        };
    },
    mounted () {
        this.ratingList = this.$store.starListHome;
        this.ratingList.forEach((item, index) => {
            let result = [];
            let score = Math.floor(item * 2) / 2;
            let hasDecimal = score % 1 !== 0;
            let integer = Math.floor(score);
            for (let i = 0; i < integer; i++) {
                result.push('./../assets/images/star_active.png');
            }
            // 是否有半个星星
            if (hasDecimal) {
                result.push('./../assets/images/half_star.png');
            }
            // 补齐
            if(result.length < 5){
                result.push('./../assets/images/star_normal.png')
            }
            this.starList.push(result);
        });
        // console.log(this.starList);
    },

    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .star{
        display: flex;
        margin-right: 0.2rem;
        li{
            img{
                width: 1.1rem;
            }
        }
    }
</style>
