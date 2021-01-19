<template>
  <div class="home">
    <Header :title="address">
      <template #icon-left>
        <span class="iconfont icon-search" @click="toSearch()"></span>
      </template>
      <template #icon-right>
        <p @click="toRorL">登录｜注册</p>
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
        <div class="swiper-pagination" slot="pagination" style="bottom:0px"></div>
      </swiper>
    <ul class="shopList">
      <li class="near">附近商家</li>
      <li v-for="(item, index) in shopList" :key="index">
        <img :src="item.image_path" alt="" />
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
            <span
              class="star-item"
              v-for="(itemClass, index) in stararr"
              :key="index"
              :class="itemClass"
            ></span>
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

// 星星总长度
const LENGTH = 5;

// 星星的状态
const CLS_ON = "on"; // 全星
const CLS_HALF = "half"; // 半星
const CLS_OFF = "off"; // 剩余未点亮的星星

export default {
  props: {},
  data() {
    return {
      address: "",
      foodList: [],
      shopList: [],
      stararr: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
        // autoplay: true,
      },
    };
  },
  methods: {
    toSearch() {
      this.$router.push("/search");
    },
    toRorL() {
      this.$router.push("/login");
    },
  },

  components: {
    Header,
    Footer,
  },
  mounted() {
    //位置
    axios
      .get("http://192.168.31.110:3000/position/40.10038,116.36867")
      .then((res) => {
        // console.log(res)
        this.address = res.data.name;
      }),
      //食品分类列表
      axios.get("http://192.168.31.110:3000/index_category").then((res) => {
        // console.log(res)
        this.foodList = res.data;
      }),
      //商家店铺列表
      axios.get(
          "http://192.168.31.110:3000/shops?latitude=40.10038&longitude=116.36867"
      ).then((res) => {
          this.shopList = res.data;
          res.data.forEach((item) => {
            let result = [];
            let score = Math.floor(item.rating * 2) / 2;
            let hasDecimal = score % 1 !== 0;
            let integer = Math.floor(score);
            for (let i = 0; i < integer; i++) {
              result.push(CLS_ON);
            }
            // 是否有半个星星
            if (hasDecimal) {
              result.push(CLS_HALF);
            }
            // 补齐
            while (result.length < LENGTH) {
              result.push(CLS_OFF);
            }
            return (this.stararr = result);
          });
      })
  },
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  .foodCategory {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #ccc;
    // .swiper-container-horizontal > .swiper-pagination-bullets {
    //   bottom: 0px;
    //   left: 0;
    //   width: 100%;
    // }
      padding-bottom: 1rem;
      padding-top: 1rem;
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
      img {
        width: 8rem;
        margin-right: 1rem;
      }
      div {
        width: 100%;
      }
      .brand {
        font-weight: bold;
        width: 2rem;
        background-color: #fcd730;
      }
      .name {
        font-size: 1.4rem;
      }
      .icon {
        float: right;
        span {
          border: 1px solid #ccc;
          color: #ccc;
        }
      }
      .middle {
        margin: 1rem 0;
        box-sizing: border-box;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
      .num {
        color: #666;
        margin: 0 0.5rem;
      }
      .rating {
        color: orange;
        vertical-align: middle;
      }
      .bird {
        display: block;
        height: 1.5rem;
        float: right;
        color: #5fc7a7;
        border: 1px solid #5fc7a7;
        border-radius: 0.2rem;
      }
      .tip {
        color: darkgray;
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

    /* 三种图片类型*/
    .on {
      background-image: url("../assets/image/star_active.png");
    }
    .half {
      background-image: url("../assets/image/hlaf_star.png");
    }
    .off {
      background-image: url("../assets/image/star_normal.png");
    }
  }
}
</style>
