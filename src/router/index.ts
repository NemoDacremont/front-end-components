import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Buttons from '@/views/Buttons.vue';
import Inputs from '@/views/Inputs.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
			path: '/buttons',
			name: 'Buttons',
			component: Buttons
	},
	{
		path: '/inputs',
		name: 'Inputs',
		component: Inputs 
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
