import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './storeVuex.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash ,faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css'

library.add(faTrash, faPenToSquare)

createApp(App)
.use(router)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

