import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookies from "js-cookie";
import CommonMins from "./assets/js/commonMins/CommonMins";
const app = createApp(App);

app.use(store);
app.use(router);
app.use(cookies);
app.mount("#app");

app.mixin(CommonMins);
