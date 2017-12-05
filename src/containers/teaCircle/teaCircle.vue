<template>
  <section class="tea-circle">
    <wrapper>
      <vheader title="茶友圈" showLeft="true" @click="clickleft"></vheader>
      <div class="image">
        <img src="./ad-1.png" alt="">
      </div>
      <ul class="tea-router">
        <li>最新</li>
        <li>最热</li>
        <li>关注</li>
      </ul>
      <kongbai></kongbai>
      <discuss :discusslist="discuss"></discuss>
    </wrapper>
    <footer-nav></footer-nav>
  </section>
</template>
<script>
import header from "../../components/header/header";
import wrapper from "../../components/wrapper/wrapper";
import footerNav from "../../components/footerNav/footerNav";
import kongbai from "../../components/kongbai/kongbai";
import discuss from "./discuss/discuss"
export default {
  name:'tea-circle',
  components:{
    vheader:header,
    footerNav,
    kongbai,
    wrapper,
    discuss
  },
  data(){
    return{
      discuss:[]
    }
  },
  created(){
    Promise.all([
      this.$http.get(
        "http://easy-mock.com/mock/59fc28eb13b54e4771d558e3/my-tea/teaCircle"
      )
    ]).then(result=>{
      const discuss=this.hassuccess(result[0]);
      console.log(discuss);
      this.discuss=discuss;
    })
  },
  methods:{
    clickleft(){

    },
    hassuccess(result){
      result=result.body;
      if(result.success){
        return result.data;
      }
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/_index.scss";
.tea-router{
  display: flex;
  justify-content: space-around;
  li{
    @include singleLineCenter(px2rem(83));
    font-size: px2rem(28);
    font-weight: bold;
    &:hover{
    color: red;
  }
  }
  
  
}
</style>
