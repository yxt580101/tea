<template>
    <section class="brand-museum">
        <wrapper>
            <vheader class="brand-header" title="品牌馆" showLeft="true" @click="clickleft"></vheader>
            <section class="brand-imgs" v-for="(pic,index) in pics" :key="index">
                <img :src="pic" alt="">
                <kongbai></kongbai>
            </section>
        </wrapper>
        <footer-nav></footer-nav>
    </section>
   
  
    
</template>
<script>
import header from "../../components/header/header";
import wrapper from "../../components/wrapper/wrapper";
import footerNav from "../../components/footerNav/footerNav";
import kongbai from "../../components/kongbai/kongbai";
var pics=[1,2,3,4].map(function(item){
    return require(`./brand${item}.jpg`);
})
console.log(pics)
export default {
  name: "brand-museum",
  components: {
    vheader: header,
    wrapper,
    footerNav,
    kongbai
  },
  data(){
      return {pics};
  },
  methods:{
      clickleft(){
          console.log(this.$router.go(-1))
      }
  }
  
};
</script>
<style lang="scss">
@import "../../assets/scss/_index.scss";
    .brand-imgs{
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .brand-header{
        border-bottom: 1px solid #dddddf;
    }
</style>
