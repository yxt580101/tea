<template>
  <section class="maintitle">
      <h1>{{title}}</h1>
      <div class="maintitle-right">
          <p>更多</p>
          <i class="fa fa-angle-right "></i>
      </div>
  </section>
</template>
<script>
export default {
  name: "miantitle",
  props:["title"]
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.maintitle {
  display: flex;
  justify-content: space-between;
  margin-bottom: px2rem(28);
  h1 {
    font-size: px2rem(24);
    font-weight: bold;
  }
  &-right {
    display: flex;
    p {
      margin-right: px2rem(12);
      color: #9d9d9d;
      font-size: px2rem(22);
    }
    i {
      margin-right: px2rem(12);
      font-size: px2rem(22);
      color: #9d9d9d;
    }
  }
}
</style>
