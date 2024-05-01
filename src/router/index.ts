import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue'
import SpreadsheetView from '../views/SpreadsheetView.vue'
import UserView from '@/views/UserView.vue'
import TodoView from '@/views/TodoView.vue'
import MouseTrackerView from '@/views/MouseTrackerView.vue'

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
      component: UserView
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView
    },
    {
      path: '/mouse-tracker',
      name: 'mouse-tracker',
      component: MouseTrackerView
    }
  ]
})

export default router
