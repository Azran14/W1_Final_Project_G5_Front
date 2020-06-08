import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Mailto from "@/components/ui-kit/Mailto.vue";

Vue.component("Mailto", Mailto);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
