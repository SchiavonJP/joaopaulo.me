import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import veProgress from "vue-ellipse-progress";

const app = createApp(App)
app.use(VueSmoothScroll)
app.use(veProgress);
app.mount('#app')
