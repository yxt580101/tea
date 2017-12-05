<template>
  <section class="my">
    <wrapper>
      <vheader 
      title="我的"
    >
      <div slot="right">
        <i class="fa fa-cog "></i>
      </div>

    </vheader>
    <routerLogin></routerLogin>
    
    <mydetail></mydetail>
    
    </wrapper>
    
    <footer-nav></footer-nav>
  </section>
</template>
<script>
import header from "../../components/header/header";
import footerNav from "../../components/footerNav/footerNav";
import wrapper from "../../components/wrapper/wrapper";
import routerLogin from "./routerLogin/routerLogin";
import mydetail from "./myDetail/myDetail";
import kongbai from "../../components/kongbai/kongbai";
export default {
  name: "my",
  components: {
    vheader: header,
    footerNav,
    wrapper,
    routerLogin,
    mydetail,
    kongbai
  },
  methods: {
    clickleft() {
      console.log("首页组件使用了my组件的时间");
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/_index.scss";
.my{
 
}
</style>

