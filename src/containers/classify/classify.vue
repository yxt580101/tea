<template>
  <section class="my">
    <wrapper>
    <vheader title="分类">
      <div slot="right">
        <i class="fa fa-search "></i>
      </div>
    </vheader>
    <div class="main">
      <aside><Vaside></Vaside></aside>
      <div class="rside">
        <img class="ad" src="./ad-1.jpg" alt="">
        <maintitle title="热卖中"></maintitle>
        <hotshop :hotshoplists="hotshoplists"></hotshop>
      </div>
    </div>
    </wrapper>
    
    
    <footer-nav></footer-nav>
  </section>
</template>
<script>
import header from "../../components/header/header";
import footerNav from "../../components/footerNav/footerNav";
import wrapper from "../../components/wrapper/wrapper";
import aside from "./aside/aside";
import maintitle from "./maintitle/maintitle";
import hotshop from "./hotshop/hotshop";
export default {
  name: "classify",
  components: {
    vheader: header,
    footerNav,
    wrapper,
    Vaside:aside,
    maintitle,
    hotshop
  },
  data(){
    return {
      hotshoplists:[]
    }
  },
  created(){
    Promise.all([
      this.$http.get(
        "http://easy-mock.com/mock/59fc28eb13b54e4771d558e3/my-tea/hottea"
      )
    ]).then(result=>{
      const hottea=this.hassuccess(result[0]);
      this.hotshoplists=hottea;
    })
  },
  methods: {
    clickleft() {
      console.log("首页组件使用了my组件的时间");
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
.my {
    
  
  .main {
    background: #dedddd;
    display: flex;
    aside{
      width: px2rem(160);
      
      background: white;
      
    }
    .rside{
      width: 100%;
      padding: {
        top: px2rem(16);
        left: px2rem(16);
        right: px2rem(9);
      }
      .ad{
        width: 100%;
        margin-bottom: px2rem(45);
      }
    }
  }
}
</style>

