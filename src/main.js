import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";
import VueResource from "vue-resource";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: routes,
});

Vue.use(VueResource);
Vue.http.options.root = "https://prueba-392fd.firebaseio.com/";

Vue.filter("currency", (value) => {
  return value.toLocaleString() + "€";
});

new Vue({
  el: "#app",
  router: router,
  store: store,
  render: (h) => h(App),
});
