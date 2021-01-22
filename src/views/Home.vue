<template>
  <div class="home">
    <Header title="昌平区北七家修正大厦(北清路北)">
      <template #icon-left>
        <span class="iconfont icon-search" @click="toSearch()"></span>
      </template>
      <template #icon-right>
        <p @click="toRorL" v-if="toLogin">登录｜注册</p>
        <span class="iconfont icon-tongxunlu" v-if="isLogin" @click="toMine()"></span>
      </template>
    </Header>
    
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <ul class="foodCategory">
            <li v-for="(item, index) in foodList" :key="index" >
              <img :src="'https://fuss10.elemecdn.com' + item.image_url"  v-if="index<8" />
              <span v-if="index<8">{{ item.title }}</span>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="foodCategory">
            <li v-for="(item, index) in foodList" :key="index">
              <img :src="'https://fuss10.elemecdn.com' + item.image_url" v-if="index>7" />
              <span v-if="index>7">{{ item.title }}</span>
            </li>
            </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" style="bottom:.5rem"></div>
      </swiper>
    <ul class="shopList">
      <li class="near">附近商家</li>
      <li v-for="(item, index) in shopList" :key="index" @click="toDetails(index)">
        <div class="left">
          <img :src="item.image_path" alt="" />
        </div>
        <div>
          <div>
            <span class="brand">品牌</span>
            <span class="name">{{ item.name }}</span>
            <span class="icon">
              <span>保</span>
              <span>准</span>
              <span>票</span>
            </span>
          </div>
          <div class="middle">
            <!-- <span
              class="star-item"
              v-for="(itemClass, index) in stararr"
              :key="index"
              :class="itemClass"
            ></span> -->
            <Star></Star>
            <span class="rating">{{ item.rating }}</span>
            <span class="num">月销{{ item.recent_order_num }}单</span>
            <span class="bird">蜂鸟专送</span>
          </div>
          <div class="tip">￥20专送/配送费约￥5</div>
        </div>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./../components/header";
import Footer from "./../components/footer.vue";
import axios from "axios";
import Star from "./../components/star.vue";

export default {
  props: {},
  data() {
    return {
      address: "",
      foodList: [],
      shopList: [],
      stararr: [],
      rating:[],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
        // autoplay: true,
      },
      toLogin: true,
      isLogin: false,
    };
  },
  methods: {
    toSearch() {
      this.$router.push("/search");
    },
    toRorL() {
      this.$router.push("/login");
    },
    toMine(){
      this.$router.push('/mine');
    },
    toDetails(index){
      this.$router.push('/details/' + (++index))
    }
  },

  components: {
    Header,
    Footer,
    Star,
  },
  mounted() {
    //将url路径存入storage
    localStorage.setItem("path", window.location.href.replace(window.location.host, "").replace(window.location.protocol, "").slice(4)); 
    //检测是否登录
    if(localStorage.getItem('phone') != null || localStorage.getItem('phone') != undefined){
      this.toLogin = false;
      this.isLogin = true;
    }else{
      this.toLogin = true;
      this.isLogin = false;
    }
    //位置
    axios
      .get("/api/position/40.10038,116.36867")
      .then((res) => {
        // console.log(res)
        this.address = res.data.name;
      }),
      //食品分类列表
      axios.get("/api/index_category").then((res) => {
        // console.log(res)
        this.foodList = res.data;
      }),
      //商家店铺列表
      axios.get(
          "/api/shops?latitude=40.10038&longitude=116.36867"
      ).then((res) => {
          this.shopList = res.data;
          res.data.forEach((item) => {
            this.rating.push(item.rating);
            this.$store.starListHome = this.rating;
          });
          // console.log(this.$store.starListHome)
      })
  },
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  padding-bottom: 5rem;
  box-sizing: border-box;
  .header{
    .icon-tongxunlu{
      display: inline-block;
      width: 5rem;
      position: absolute;
      left: 32.5rem;
      font-size: 2.5rem;
    }
  }
  // .swiper-pagination-bullet{
  //   background: red !important;
  //   font-size: 1rem !important;
  // }
  // .swiper-pagination-bullet-active{
  //   &:root{
  //     --swiper-theme-color: red !important;
  //   }
  // }
  .foodCategory {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0;
    border-bottom: 1px solid #ccc;
    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width:5rem;
        height:5rem;
      }
      span{
        font-size: 1.2rem;
        display: block;
        margin: 1rem;
      }
    }
    
  }
  .shopList {
    margin-top: 1rem;
    width: 100%;
    border: 1px solid #ccc;
    .near{
      font-size: 1.6rem;
    }
    li {
      color: black;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1rem 1rem;
      .left{
        margin-right: 1rem;
        width: 8rem;
        img {
          width: 100%;
        }
      }
      div {
        width: 100%;
      }
      .brand {
        font-weight: bold;
        padding: 0.1rem;
        font-size: 1rem;
        background-color: #fcd730;
        margin-right: 0.5rem;
      }
      .name {
        font-size: 1.4rem;
      }
      .icon {
        float: right;
        span {
          border: 1px solid #ccc;
          color: #ccc;
          font-size: 1.1rem;
        }
      }
      .middle {
        margin: 1rem 0;
        box-sizing: border-box;
        display: flex;
        img {
          width: 1rem;
          height: 1rem;
        }
        font-size: 1.2rem;
      }
      .num {
        color: #666;
        margin: 0 0.5rem;
        flex: 1;
      }
      .rating {
        color: orange;
        vertical-align: middle;
      }
      .bird {
        display: block;
        height: 1.5rem;
        color: #5fc7a7;
        border: 1px solid #5fc7a7;
        border-radius: 0.2rem;
      }
      .tip {
        color: darkgray;
        font-size: 1.1rem;
      }
    }
    .star-item {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-repeat: no-repeat;
      background-size: 10px 10px;
    }
  }
}
</style>
