<template>
  <section class="router-login">
      <div class="router-login-nav">
          <div class="router-login-nav-image">

        </div>
      <div class="router-login-nav-btn">
          <router-link to="/login">
            <button>登录</button>
          <button>注册</button>
          </router-link>
      </div>
      </div>
  </section>
</template>
<script>
export default {
  name: "routerLogin"
};
</script>
<style lang="scss">
@import ".././../../assets/scss/_index.scss";
.router-login {
  width: 100%;
  height: height("./login-1.png");
  background: url("./login-1.png") no-repeat 0 0;
  background-size: 100%;
  position: relative;
  &-nav {
      width: px2rem(306);
    position: absolute;
    top: 30%;
    left: 40%;
    text-align: center;
    &-image {
      width: px2rem(180);
      height: px2rem(180);
      margin-left: 20%;
      background: blue;
      border: 2px white solid;
      border-radius: 50%;
      margin-bottom: px2rem(42);
      
    }
    button{
        width: px2rem(134);
        height: px2rem(53);
        border: 3px solid #cfa767;
        background: white;
        outline: none;
    }
  }
}
</style>
