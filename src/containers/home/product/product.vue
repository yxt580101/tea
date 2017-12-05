<template>
  <section class="product">
    <div class="product-list" v-for="(product,index) in products" :key="index">
      <div class="product-list-image">
        <img :src="product.thumg" alt="">
      </div>
      <div class="product-list-detail">
        <p>{{product.title}}</p>
        <div class="product-list-detail-price">
          <span>{{product.price}}</span>
          <small>免邮费</small>
        </div>
        <div class="product-list-detail-num">
          <span>{{product.num}}</span>
          <small>{{product.dianname}}</small>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "product",
  props: ["products"]
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.product {
  width: 100%;
  &-list {
    display: flex;
    border-bottom: 1px solid #dddddf;
    padding: {
      top: px2rem(20);
      left: px2rem(37);
      bottom: px2rem(20);
    }
    &-image {
      margin-right: px2rem(30);
    }
    &-detail{
      p{
        font-size: px2rem(25);
        font-weight: 700;
        color: #535353;
        margin-bottom: px2rem(30);
      }
      &-price{
        margin-bottom: px2rem(30);
        span{
          color: red;
          font-size: px2rem(30);
          margin-right: px2rem(15);
        }
        small{
          font-size: px2rem(20);
          color: #dcdcdc;
        }
      }
      &-num{
        span{
          font-size: px2rem(20);
          margin-right: px2rem(30);
          color: #535353;
        }
        small{
          font-size: px2rem(30);
          font-weight: bold;
          color: #535353;
        }
      }
    }
  }
}
</style>
