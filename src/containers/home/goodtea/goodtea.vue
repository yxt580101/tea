<template>
  <section class="goodtea">
      <shopItem :shop="goodtea.example"></shopItem>
      <ul class="goodtea-lists">
          <li v-for="(suoluo,index) in goodtea.suoluo" :key="index">
              <h4>{{suoluo.name}}</h4>
              <p>{{suoluo.txt}}</p>
              <div class="thumb">
                  <img :src="suoluo.thumb" alt="">
              </div>
          </li>
      </ul>
  </section>
</template>
<script>
import shopItem from "../shop-item/shop-item";
export default {
  name: "goodtea",
  components: {
    shopItem
  },
  props: ["goodtea"]
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.goodtea {
  display: flex;
//   height: px2rem(125);
  &-lists {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      display: flex;
      width: 100%;
      height: px2rem(86);
      align-items: center;
      justify-content: space-around;
      h4 {
        font-size: px2rem(14);
        color: #535353;
        font-weight: 700;
      }
      p {
        color: #d2d2d2;
        font-weight: 400;
      }
      &:first-child {
        border-bottom: 1px solid #dddddf;
        padding-bottom: px2rem(40);
      }
      .thumb {
        width: px2rem(70);
        height: px2rem(53);
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
