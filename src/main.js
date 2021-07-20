import { createApp } from "vue";

import ElementPlus, { Loading } from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookies from "js-cookie";
import CommonMins from "./assets/js/commonMins/CommonMins";

const app = createApp(App);
app.use(ElementPlus, { size: "small", zIndex: 30000 });
app.use(store);
app.use(router);
app.use(cookies);
app.mount("#app");

app.mixin(CommonMins);
