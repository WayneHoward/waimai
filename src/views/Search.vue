<!--
 * @Author: your name
 * @Date: 2021-01-16 11:33:57
 * @LastEditTime: 2021-01-19 11:32:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \waimai\waimai\src\views\Search.vue
-->
<template>
  <div class="search">
    <Header title="搜索"></Header>
    <div class="top">
      <input type="text" @focus="isshow = true" placeholder="请输入商家名称" v-model="shop"/>
      <img class="clear" v-show="isshow" @click="clear_shop()" src="./../assets/images/clear.png" alt="">
      <button @click="sub()">提交</button>
    </div>
    <ul>
        <li v-for="item in list" :key=item.id>
            <img :src="item.imaage_path" alt="">
            <div class="right">
                <p>{{ item.name}}</p>
                <p>月售 {{item.recent_order_num}} 单</p>
                <p>{{item.float_minimum_order_amount}}起送/距离{{item.distance}}</p>
                <p></p>
            </div>
        </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./../components/header.vue";
import Footer from "./../components/footer.vue";
export default {
  props: {},
  data() {
    return {
      shop: '',
      list: [],
      isshow:false,
    };
  },
  mounted () {
  },
  methods: {
    sub() {
        this.axios.get(`http://192.168.31.110:3000/search_shops?keyword=${this.shop}&geohash=40.10038,116.36867`, {
          // geohash: '40.10038,116.36867',
          // keyword: this.shop,
        })
        .then((res) => {
          console.log(res);
          this.list = res.data.data;
          console.log(this.list)
        });
        this.isshow = false;
        
    },
    clear_shop() {
        this.shop='';
    }
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="less">
.top {
  padding: 1.2rem 0.8rem 1rem 0.8rem;
  display: flex;
  input {
    width: 100%;
    height: 3.6rem;
    border: none;
    outline-style: none;
    background-color: #f2f2f2;
    color: #757575;
    padding-left: 0.8rem;
    font-size: 1.2rem;
    font-weight: bold;
    box-sizing: border-box;
    border-radius: 0.4rem;
    position: relative;
  }
  button {
    width: 6.5rem;
    height: 3.5rem;
    background-color: #02a774;
    color: #ffffff;
    font-size: 1.6rem;
    margin-left: 1rem;
    border-radius: 0.4rem;
  }
  .clear{
      width: 2rem;
      height: 2rem;
      position: absolute;
      right: 7.5rem;
      top: 6.5rem;
  }
}
ul{
    width: 100%;
    li{
        list-style: none;
        padding: 1rem 0 1rem 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #cccccc;
        display: flex;
        img{
            width: 4rem;
            height: 4rem;
            margin-right: 1rem;
        }
    }
}
</style>
