import './assets/main.scss'

import * as mdb from 'mdb-vue-ui-kit'; // lib
window.mdb = mdb; // add to global

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
