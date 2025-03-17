import './assets/css/reset.css'
import './assets/css/site.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import {
    reCenterPopupFormProgressBar,
    reCenterScrollTopButton,
    showCartSummaryPopupButton,
    toggleScrollTopButton,
} from "./scripts/utilities"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

window.onresize = (e: Event) => {
    reCenterScrollTopButton()
}

window.onscroll = (e: Event) => {
    showCartSummaryPopupButton()
    reCenterPopupFormProgressBar()
    toggleScrollTopButton()
}