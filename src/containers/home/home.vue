<template>
  <section class="home">
      <wrapper>
          <vHeader title="首页" @clickleft="clickleft">
              <div slot="right">
                  <i class="fa fa-search"></i>
                  <i class="fa fa-bell-o"></i>
              </div>
          </vHeader>
          <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="(braner,index) in braners" :key="index">
                <img :src="braner" alt="">
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
        <mianNav></mianNav>
        <kongbai></kongbai>
        <mainTitle title="热门促销"></mainTitle>
        <promotion :promotionlists="promotionlists"></promotion>
        <kongbai></kongbai>
        <mainTitle title="精选好茶"></mainTitle>
        <goodtea :goodtea="goodtea"></goodtea>
        <kongbai></kongbai>
        <product :products="products"></product>
      </wrapper>
      <footer-nav></footer-nav>
  </section>
</template>
<script>
import header from "../../components/header/header";
import footerNav from "../../components/footerNav/footerNav";
import wrapper from "../../components/wrapper/wrapper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import mianNav from "./mainNav/mainNav";
import kongbai from "../../components/kongbai/kongbai";
import mainTitle from "./mainTitle/mainTitle";
import promotion from "./promotion/promotion";
import goodtea from "./goodtea/goodtea";
import product from "./product/product"
export default {
  name: "home",
  components: {
    vHeader: header,
    footerNav: footerNav,
    wrapper,
    swiper,
    swiperSlide,
    mianNav,
    kongbai,
    mainTitle,
    promotion,
    goodtea,
    product
  },
  data() {
    return {
      braners: [
        require("./banner1.jpg"),
        require("./banner2.jpg"),
        require("./banner3.jpg")
      ],
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        autoplay: 1000, //时间控制
        pagination: ".swiper-pagination",
        loop: true
      },
      promotionlists:[],
      goodtea:{},
      products:[]
    }
  },
  created(){
    Promise.all([
      this.$http.get(
        "http://easy-mock.com/mock/59fc28eb13b54e4771d558e3/my-tea/promotion"
      ),
      this.$http.get(
        "http://easy-mock.com/mock/59fc28eb13b54e4771d558e3/my-tea/goodtea"
      ),
      this.$http.get(
        "http://easy-mock.com/mock/59fc28eb13b54e4771d558e3/my-tea/product"
      )
    ]).then(result=>{
      const product=this.hassuccess(result[2]);
      const promotion=this.hassuccess(result[0]);
      const goodtea=this.hassuccess(result[1]);
      console.log(product);
      this.promotionlists=promotion;
      this.goodtea=goodtea;
      this.products=product;
    })
  },
  methods: {
    clickleft() {
      console.log("Vheader左边");
    },
    hassuccess(result){
      result=result.body;
      if(result.code===200){
        return result.data;
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/_index.scss";

.swiper-container {
  img {
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
}
</style>
