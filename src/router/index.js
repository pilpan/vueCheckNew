import { createRouter, createWebHistory } from 'vue-router'

import MainView from '../views/MainView.vue';
import FindView from '../views/FindView.vue'
import CounterView from '../views/CounterView.vue'
const router = createRouter({
    routes:[
        {
            path: '/',
            name: 'MainPage',
            component: MainView,
        },
        {
            path: '/Finder',
            name: 'Finder',
            component: FindView,
        },
        {
            path: '/counter',
            name: 'counter',
            component: CounterView,
        },
    ],
    history: createWebHistory(),
})
export default router