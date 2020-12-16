import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home';
import NotFound from './pages/404';
import Example from './pages/Example';

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound,
		},
		{
			path: '/example',
			name: 'example',
			component: Example,
		},
	]
})
