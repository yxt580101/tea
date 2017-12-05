<template>
  <section class="shop-item">
      <div class="shop-item-detail">
          <h4 class="shop-item-detail-name">{{shop.name}}</h4>
          <p class="shop-item-detail-year">{{shop.year}}</p>
          <p class="shop-item-detail-text">{{shop.text}}</p>
          <p class="shop-item-detail-price">{{shop.price}}.00</p>
          <p class="shop-item-detail-oldprice">{{shop.oldprice}}.00</p>
      </div>
      <div class="shop-item-thumb">
          <img :src="shop.thumb" alt="">
      </div>
  </section>
</template>
<script>
export default {
  name: "shop-item",
  props: {
    shop:{
      type:Object,
      default:function(){
        return {}
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.shop-item {
  width: 50%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddf;
  border-right: 1px solid #dddddf;
  padding: {
    top: px2rem(9);
    left: px2rem(23);
    right: px2rem(10);
    bottom: px2rem(9);
  }
  
  &-detail {
      
    &-name {
      font-size: px2rem(21);
      font-weight: 600;
      margin-bottom: px2rem(21);
      letter-spacing: 2px;
    }
    &-year {
      margin-bottom: px2rem(9);
    }
    &-text {
      margin-bottom: px2rem(60);
    }
    &-price {
      color: #e45254;
      margin-bottom: px2rem(17);
      font-weight: 400;
    }
    &-oldprice {
      text-decoration: line-through;
      color: #a0a0a0;
    }
  }
}
</style>
