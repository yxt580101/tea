<template>
  <section class="main-nav">
    <router-link class="main-nav-item" to="/">
        <img src="./tuangou.png" alt="">
        <span>热门团购</span>
    </router-link>
    <router-link class="main-nav-item" to="/brandMuseum">
        <img src="./brand.png" alt="">
        <span>品牌馆</span>
      </router-link>
      <router-link class="main-nav-item" to="/teaCircle">
        <img src="./tea.png" alt="">
        <span>茶友圈</span>
      </router-link>
  </section>
</template>
<script>

export default {
  
}
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.main-nav{
    display: flex;
    justify-content: space-around;
    height: px2rem(133);
    &-item{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      img{
      width:px2rem(69);
      height:px2rem(69);
    }
    span{
      font-size: px2rem(22);
      color: #535353;
    }
    }
    
}
</style>
