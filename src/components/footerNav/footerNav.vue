<template>
    <nav class="footer-nav">
      <router-link to="/">
        <i class="icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/classify">
        <i class="icon-classify"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/cart">
        <i class="icon-cart"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/my">
        <i class="icon-my"></i>
        <span>我的</span>
      </router-link>
    </nav>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../assets/scss/_index.scss";
.footer-nav {
  display: flex;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: px2rem(98);
  border-top: 1px solid #dddddf;
  .router-link-exact-active.router-link-active {
    .icon {
      &-home {
        @include hoverImage("home");
      }
      &-classify {
        @include hoverImage("classify");
      }
      &-cart {
        @include hoverImage("cart");
      }
      &-my {
        @include hoverImage("my");
      }
    }
    span {
      color: $primary-color;
    }
  }
  a {
    display: flex;
    flex-direction: column;
    // text-align: center;
    width: 25%;
    align-items: center;
    justify-content: space-around;
    i {
        
      transform: scale(0.6);
    }
    span {
      font-size: 1.2em;
    }
    .icon {
      &-home {
        @include staticImage("home");
        //  transform: scale(0.8);
      }
      &-classify {
        @include staticImage("classify");
        //  transform: scale(1);
      }
      &-cart {
        @include staticImage("cart");
      }
      &-my {
        @include staticImage("my");
      }
    }
  }
}
</style>


