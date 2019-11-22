import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';


import './styles/styles.scss';

Vue.config.productionTip = false
if(process.env.CORDOVA_PLATFORM !== 'browser'){
  store.dispatch('setPlatform', 'mobile')
}


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
