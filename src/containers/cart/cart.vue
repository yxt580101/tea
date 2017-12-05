<template>
  <section class="my">
    <wrapper>
      <vheader 
      title="购物车"
    >
      <div slot="right">
        <p>编辑</p>
      </div>
    </vheader>
    <cartRender :shoplists="shoplists" :singleMoney="1"></cartRender>
    <afterward :moneyAll="0" :count="2"></afterward>
    </wrapper>
    <footer-nav></footer-nav>
  </section>
</template>
<script>
import header from "../../components/header/header";
import footerNav from "../../components/footerNav/footerNav";
import cartRender from "./cartRender/cartRender";
import afterward from "./aferward/afterward";
import wrapper from "../../components/wrapper/wrapper"
export default {
  name: "cart",
  components: {
    vheader: header,
    footerNav,
    cartRender,
    afterward,
    wrapper
  },
  data(){
    return{
      shoplists:[]
    }
  },
  created(){
    Promise.all([
      this.$http.get(
        "http://easy-mock.com/mock/59fc28eb13b54e4771d558e3/my-tea/cart"
      )
    ]).then(result=>{
      const shoplists=this.hassuccess(result[0]);
      console.log(shoplists)
      this.shoplists=shoplists;
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

</style>

