<template>
  <section class="cartrender">
      <div class="car-list" v-for="(shoplist,index) in shoplists" :key="index">
          <div class="car-list-title">
              <input type="checkbox" id="car-list-title-singleall">
              <label for="car-list-title-singleall">{{shoplist.first.shopTitle}}</label>
              <span>></span>
          </div>
          <div class="car-list-nav" v-for="(nav,index) in shoplist.shopnav" :key="index">
              <input type="checkbox" id="car-list-nav-single">
              <img :src="nav.thumb" alt="">
              <div class="car-list-nav-text">
                  <p>{{shoplist.first.shopTitle}} {{nav.teaName}}</p>
                  <h4>{{nav.teaType}}</h4>
                  <h3>{{nav.price}}</h3>
                  <ul class="car-list-nav-text-num">
                      <li>-</li>
                      <li>{{singleMoney}}</li>
                      <li>+</li>
                  </ul>
              </div>
          </div>
          <block></block>
      </div>
  </section>
</template>
<script>
import block from "../../../components/kongbai/kongbai";
export default {
  name: "cartRender",
  components:{
      block
  },
  props: ["shoplists","singleMoney"]
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.car-list {
  width: 100%;
  input[type="checkbox"] {
    margin-left: px2rem(30);
  }
  &-title {
    @include singleLineCenter(px2rem(68));
    border: {
      top: 1px solid #dedede;
      bottom: 1px solid #dedede;
    }
    input {
      margin-right: px2rem(20);
    }
    label {
      margin-right: px2rem(20);
      font-weight: bold;
      font-size: px2rem(26);
    }
    span {
      font-weight: bold;
      font-size: px2rem(26);
    }
  }
  &-nav {
    width: 100%;

    display: flex;
    padding: {
      top: px2rem(55);
      bottom: px2rem(55);
    }
    input {
      display: flex;
      margin-top: px2rem(100);
    }
    img {
      margin-right: px2rem(30);
      margin-left: px2rem(30);
    }
    &-text {
      width: 68%;
      border-bottom: 1px solid #dedede;
      position: relative;
      
      p {
        margin-bottom: px2rem(30);
        font-size: px2rem(24);
        font-weight: bold;
      }
      h4 {
        margin-bottom: px2rem(50);
        font-size: px2rem(24);
        font-weight: bold;
      }
      h3 {
        color: red;
        font-size: px2rem(30);
      }
      &-num {
        position: absolute;
        width: px2rem(133);
        height: px2rem(50);
        display: flex;
        right: 0;
        bottom: px2rem(20);
        text-align: center;
        border: 2px solid #a0a0a0;
        border-radius: 3px;
        li{
            width: 33%;
            line-height: px2rem(50);
            font-size: px2rem(30);
            &:nth-of-type(2){
            color: #cfa869;
        }
        }
        
        li+li{
            border-left: 1px solid #a0a0a0;
        }

      }
    }
  }
}
</style>
