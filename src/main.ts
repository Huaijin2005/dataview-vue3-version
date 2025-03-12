import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "element-plus/dist/index.css";

import "./dataview.less";

// 路由守卫:跳转页面前从本地浏览器获取test_password，如果不存在或不正确，则跳转到登录页面
// router.beforeEach((to, from, next) => {
//   const password = localStorage.getItem("test_password");
//   if (!["/", "Login"].includes(to.name as string) && password != "132511")
//     next({ name: "Login" });
//   else next();
// });

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
