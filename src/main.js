import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faInfo,
  faCompass,
  faExternalLinkAlt,
  faUniversity,
  faKeyboard,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome,
  faInfo,
  faCompass,
  faExternalLinkAlt,
  faUniversity,
  faKeyboard,
  faInfoCircle
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
