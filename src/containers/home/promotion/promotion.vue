<template>
  <section class="promotion">
      <shop-item v-for="(promotion,index) in promotionlists" :key="index" :shop="promotion"></shop-item>
      
  </section>
</template>
<script>
import shopItem from "../shop-item/shop-item";
export default {
  name:"promotion",
  components:{
      shopItem
  },
  props:["promotionlists"]
}
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.promotion{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>
