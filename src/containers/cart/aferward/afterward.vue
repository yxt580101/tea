<template>
  <section class="aferward">
      <input type="checkbox" id="afterward-all">
      <label for="afterward-all">全选</label>
      <span>合计：{{moneyAll}}</span>
      <button>结算（{{count}}）</button>
  </section>
</template>

<script>
export default {
  name:"afterward",
  props:["moneyAll","count"],
  data(){
      return {
          
      }
  }
}
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.aferward{
    width: 100%;
    @include singleLineCenter(px2rem(90));
    position: fixed;
    bottom: px2rem(98);
    left: 0;
    background: white;
    border-top: 1px solid #dddddf;
    input[type="checkbox"]{
        margin-left: px2rem(30);
        margin-right: px2rem(30);
    }
    label{
        font-size: px2rem(28);
        font-weight: bold;
    }
    span{
        margin-left: px2rem(50);
        font-size: px2rem(28);
        font-weight: bold;
        
    }
    button{
        position: absolute;
        right: 0;
        width: px2rem(194);
        height: 100%;
        background: #d7b57f;
        border: none;
        color: white;
        font-size: px2rem(30);
        outline: none;
    }
}
</style>
