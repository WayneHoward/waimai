<template>
    <ul class="comments">
        <li>
            <div class="left"><span class="iconfont icon-yonghu1"></span></div>
            <div class="right">
                <div class="line">
                    
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

        };
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

            }
        }
    }
</style>
