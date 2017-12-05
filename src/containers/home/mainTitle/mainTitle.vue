<template>
  <section class="main-title">
    <h2>{{title}}</h2>
  </section>
</template>
<script>
export default {
  props: ["title"]
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.main-title {
  h2 {
    @include singleLineCenter(px2rem(63));
    font-size: px2rem(26);
    color: $primary-color;
    
    padding-left: px2rem(51);
    position: relative;
    border-bottom: 1px solid #dddddf;
    &:before {
      content: "";
      position: absolute;
      left: px2rem(28);
      top: 50%;
      transform: translateY(-50%);
      @include circle(11);
      background: $primary-color;
    }
  }
}
</style>
