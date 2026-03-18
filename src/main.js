import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

import Filtros from './components/Filtros.vue'
import Tabela from './components/Tabela.vue'
import Pagina from './components/Pagina.vue'

Vue.component('filtro-do-ze', Filtros)
Vue.component('tabela-do-ze', Tabela)
Vue.component('pagina-do-ze', Pagina)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
