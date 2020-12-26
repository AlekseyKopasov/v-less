// JS
import './js/'

// SCSS
import './assets/scss/main.scss'
// import Vuelidate from 'vuelidate/src';

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vuex
import store from './store'

// Vue Plugins
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Vue components (for use in html)
// Vue.component('example-component', require('./js/components/Example.vue').default)
// ui
Vue.component('notify-component', require('./js/components/UI/Notify.vue').default)

// controls
Vue.component('login-button', require('./js/components/UI/controls/buttons/Login.vue').default)
// Vue init
const app = new Vue({
	data: () => ({
		modalView: false,
	}),
	store,
  el: '#app'
})
