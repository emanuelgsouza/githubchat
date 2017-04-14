import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuefire from 'vuefire'

Vue.use(vuefire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import { database } from './services/firebase/database'

window.onbeforeunload = function (e) {
  if (store.state.user === undefined) return
  database.ref('users').child(store.state.user.uid).child('online').set(false)
}
