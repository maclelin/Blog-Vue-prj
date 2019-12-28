import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import App from "./App.vue";
import routes from "./routers/routes";
import stores from "./store/store";

// 性能监控
require("./utils/performMonitor");

console.log(process.env.MOCK);
require("./mock/index");

if (process.env.MOCK) {
}

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(stores);

const router = new VueRouter({
  mode: "history",
  routes
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // ...
  const loginStatus = sessionStorage.getItem("loginStatus");
  if (loginStatus !== "1" && to.path !== "/login") {
    next("/login");
    return;
  }
  // console.log("from", from, "to", to);
  // 这里的next可以传入一个url:string,类型，或者{path:...}：Object,用于拦截跳转到另外的URL中，实际场景可以模拟用户状态控制，没有登录跳转到登录页面
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
