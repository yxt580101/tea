<template>
  <section class="hotshop">
      <div class="hotshop-list" v-for="(hotshop,index) in hotshoplists" :key="index">
          
              <img :src="hotshop.thumb" alt="">
              <h1>{{hotshop.name}}</h1>
              <div class="hotshop-list-text">
                  <div class="price">{{hotshop.price}}</div>
                  <div class="num">{{hotshop.num}}</div>
              </div>
          
      </div>
  </section>
</template>
<script>
export default {
  name: "hotshop",
  props: ["hotshoplists"]
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.hotshop {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fffff0;
  &-list {
    background: white;
    padding: px2rem(10) px2rem(34);
    margin-bottom: px2rem(20);
    h1{
        font-size: px2rem(20);
        font-weight: bold;
        margin-top: px2rem(14);
        margin-bottom: px2rem(14);
    }
    &-text{
        display: flex;
        justify-content: space-between;
        .price{
            color: red;
            font-size: px2rem(18);
            font-weight: bold;
        }
    }
  }
}
</style>
