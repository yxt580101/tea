import Vue from 'vue'
import Router from 'vue-router'
//品牌馆
import brandMuseum from '../containers/brandMuseum/brandMuseum';
//首页
import home from '../containers/home/home';
//购物车
import cart from '../containers/cart/cart';
//分类
import classify from '../containers/classify/classify';
//我的
import my from '../containers/my/my';
//登录
import login from '../containers/login/login';
//茶友圈
import teaCircle from '../containers/teaCircle/teaCircle';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }, {
      path: '/home',
      component: home
    }, {
      path: '/brandMuseum',
      component: brandMuseum
    }, {
      path: '/classify',
      component: classify
    }, {
      path: '/my',
      component: my
    }, {
      path: '/login',
      component: login
    }, {
      path: '/cart',
      component: cart
    }, {
      path: '/teaCircle',
      component: teaCircle
    }
  ]
})
