import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Dynamic from '../views/Home/Dynamic.vue'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: Home,
			children: [{
					path: '/',
					redirect: 'dynamic'
				}, //配置默认显示模板内容
				{
					path: '/dynamic',
					name: 'dynamic',
					component: Dynamic,
					meta:{
						pageIndex:1
					}
				}, //配置默认显示模板内容
				{
					path: '/mall',
					name: 'mall',
					component: () => import('../views/Home/Mall.vue'),
					meta:{
						pageIndex:2
					}
				},
				{
					path: '/message',
					name: 'message',
					component: () => import('../views/Home/Message.vue'),
					meta:{
						pageIndex:3
					}
				},
				{
					path: '/self',
					name: 'self',
					component: () => import('../views/Home/Self.vue'),
					meta:{
						pageIndex:4
					}
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/About.vue'),
			meta:{
				pageIndex:5
			}
		}
	]
})
