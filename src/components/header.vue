<template>
    <div class="header">
        <slot name="icon-left"></slot>
        <span>{{title}}</span>
        <slot name="icon-right"></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        }
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
    .header{
        width: 100%;
        height: 4.5rem;
        line-height: 4.5rem;
        background: rgb(92, 162, 148);
        padding: 0rem 1rem;
        text-align: center;
        position: fixed;
        top: 0;
        .iconfont{
            font-size: 2rem;
            position: absolute;
            left: 1rem;
        }
        span{
            color: white;
            font-size: 1.8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        p{
            position: absolute;
            right: 1rem;
            top: 0;
            color: white;
            font-size: 1.3rem;
        }
    }
</style>
