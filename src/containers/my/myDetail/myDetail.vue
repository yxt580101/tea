<template>
  <section class="mydetail">
      <ul class="mydetail-list">
          <li>
              <div class="list-header">
                  <img src="./book.png" alt="">
                    <h2>全部订单</h2>
              </div>
                <div class="list-right">
                    <p>查看全部订单</p>
                    <i class="fa fa-angle-right"></i>
                </div>
          </li>
          <li>
              <div class="list-header">
                  <img src="./adress.png" alt="">
                    <h2>收货地址</h2>
              </div>
                <div class="list-right">
                    <p>更改详细地址</p>
                    <i class="fa fa-angle-right"></i>
                </div>
          </li>
          <li>
              <div class="list-header">
                  <img src="./collection.png" alt="">
                    <h2>我的收藏</h2>
              </div>
                <div class="list-right">
                    <p>查看全部收藏</p>
                    <i class="fa fa-angle-right"></i>
                </div>
          </li>
          <li>
              <div class="list-header">
                  <img src="./coupon.png" alt="">
                    <h2>我的优惠券</h2>
              </div>
                <div class="list-right">
                    <p>查看全部优惠券</p>
                    <i class="fa fa-angle-right"></i>
                </div>
          </li>
          <li>
              <div class="list-header">
                  <img src="./servicer.png" alt="">
                    <h2>在线客服</h2>
              </div>
                <div class="list-right">
                    <p>智能自助服务</p>
                    <i class="fa fa-angle-right"></i>
                </div>
          </li>
      </ul>
  </section>
</template>
<script>
export default {
  name: "mydetail"
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.mydetail {
  &-list {
    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #c8c8c8;
      padding: px2rem(25) px2rem(24);
      .list-header {
        display: flex;
        img{
            width: px2rem(40);
            height: px2rem(40);
            margin-right: px2rem(20);
        }
        h2{
            margin-top: px2rem(8);
            font-weight: bold;
            font-size: px2rem(28);
        }
      }
      .list-right {
        display: flex;
        p{
            margin-top: px2rem(8);
            font-size: px2rem(22);
            color: #bbbbbb;
            margin-right: px2rem(35);
        }
        i{
            margin-top: px2rem(8);
            color: #bbbbbb;
        }
      }
    }
  }
}
</style>
