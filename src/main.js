import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Gstore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).provide("Gstore", Gstore).use(router).mount("#app");
