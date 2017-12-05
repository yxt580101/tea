<template>
  <header class="header">
    <div class="header-left">
      <i 
      class="fa fa-angle-left" 
      @click="clickleft"
      v-if="showLeft"
      ></i>
    </div>
    <div class="header-title">
      {{title}}
    </div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
export default {
  props: ["title", "showLeft"],
  methods: {
    clickleft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/_index.scss";
.header {
  display: flex;
  padding-top: px2rem(45);
  justify-content: space-around;
  // background: red;
  text-align: center;
  border-bottom: 1px solid #e2dcdc;
  &-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @include singleLineCenter(px2rem(88));
    i{
      font-size: 2em;
       color:#a2a3a8;
    }
  }
  &-title {
    flex: 2;
    color: $primary-color;
    font-size: px2rem(34);
    @include singleLineCenter(px2rem(88));
  }
  &-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @include singleLineCenter(px2rem(88));
    i{
      font-size: 1.5em;
      margin: 0 5px;  
      color:#a2a3a8;
    }
    i+i{
        margin-left: px2rem(50);
    }
  }
}
</style>


