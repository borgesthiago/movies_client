import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import {i18n} from './plugins/i18n-vue'
import FlagIcon from 'vue-flag-icon'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(FlagIcon)

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app')
