import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";

import "vfonts/Lato.css";
import "vfonts/FiraCode.css";

import naive from "naive-ui";

createApp(App).use(router).use(naive).mount("#app");
