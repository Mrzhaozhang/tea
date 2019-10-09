import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false
import 'vant/lib/index.css';
require('./directive/directiveWaves.js')
import {
	Button,
	NavBar,
	Icon,
	Tabbar,
	TabbarItem,
	Tab,
	Tabs
} from 'vant'

Vue.use(Tab).use(Tabs);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Button);
Vue.use(Icon);
Vue.use(NavBar, Icon);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
