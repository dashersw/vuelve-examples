import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue'
import SpreadsheetView from '../views/SpreadsheetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/spreadsheet',
      name: 'spreadsheet',
      component: SpreadsheetView
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/mouse-tracker',
      name: 'mouse-tracker',
      component: () => import('../views/MouseTrackerView.vue')
    }
  ]
})

export default router
