<template>
  <section class="login">
        <img class="logo" src="./chadian.png" alt="">
        <form action="">
            <div class="passname pass">
                <input class="text" type="text" placeholder="输入手机号/账号">
                <i class="fa fa-mobile fa-2x"></i>
            </div>
            <div class="password pass">
                <input class="text" type="password" placeholder="请输入密码">
                <i class="fa fa-lock fa-2x"></i>
            </div>
            <div class="btn">
                <input type="submit" value="登录">
            </div>
            <section class="register">
                <a href="">手机快速注册</a>
                <a href="">找回密码</a>
            </section>
        </form>
        <section class="line">
            <p>第三方账号登录</p>

        </section>
        <nav>
            <a href=""><i class="fa fa-weibo fa-2x"></i></a>
            <a href=""><i class="fa fa-weixin fa-2x"></i></a>
            <a href=""><i class="fa fa-qq fa-2x"></i></a>
        </nav>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../assets/scss/_index.scss";
.login {
  padding: px2rem(10.8*20) 10%;
  .logo {
    width: px2rem(8.32*20);
    height: px2rem(7*20);
    margin-left: 40%;
  }
  form {
    margin-top: px2rem(7.5*20);
    .pass {
      position: relative;
      height: px2rem(3.75*20);
      .text {
        width: 100%;
        height: 100%;

        font-size: px2rem(1.3*20);
        text-indent: 2em;
        outline: none;
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid #e9e9e9;
      }
      i {
        position: absolute;
        top: px2rem(20);
        left: 0;
      }
    }
    .btn {
      margin-top: px2rem(30);
      input {
        width: 100%;
        height: px2rem(3.75*20);
        font-size: px2rem(1.5*20);
        color: white;
        border-radius: px2rem(4);
        border: none;
        background: #cfa767;
      }
    }
    .register {
      width: 100%;
      margin-top: px2rem(36);
      display: flex;
      justify-content: space-between;
      a {
        font-size: px2rem(26);
        color: #949494;
      }
    }
  }
  .line {
    width: 100%;
    margin-top: px2rem(6.7*20);
    text-align: center;
    margin-bottom: px2rem(2*20);
    p {
      font-size: px2rem(1.4*20);
      color: #949494;
      &::before {
        content: "";
        display: inline-block;
        width: px2rem(15*20);
        height: 1px;
        vertical-align: middle;
        background: #949494;
      }
      &::after {
        content: "";
        display: inline-block;
        width: px2rem(15*20);
        height: 1px;
        vertical-align: middle;
        background: #949494;
      }
    }
  }
  nav {
    width: 100%;
    text-align: center;
    a + a {
      margin-left: 10%;
    }
    a:nth-of-type(1) i{
      color: #df241b;
    }
    a:nth-of-type(2) i{
      color: #86c610;
    }
    a:nth-of-type(3) i{
      color: #fff54e;
    }
  }
}
</style>
