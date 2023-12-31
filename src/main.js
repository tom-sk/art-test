import "./assets/main.css";

import VueVideoPlayer from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueVideoPlayer);

app.use(router);

app.mount("#app");
