import { createApp } from 'vue'
import App from './App.vue'

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faStar as soStar} from '@fortawesome/free-solid-svg-icons'
import {faStar as reStar} from '@fortawesome/free-regular-svg-icons'


library.add(soStar, reStar)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
