import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    }, 
    {
      path: '/my-tasks',      
      name: 'MyTasks',
      component: () => import('../views/MyTasksView.vue')
    },
    {
      path: '/all-tasks',      
      name: 'AllTasks',
      component: () => import('../views/AllTasksView.vue')
    },
    {
      path: '/new-task',      
      name: 'NewTask',
      component: () => import('../views/FormTaskView.vue')
    }
    ,
    {
      path: '/edit-tasks',      
      name: 'EditTask',
      component: () => import('../views/EditTaskView.vue')
    }
    
  ]
})

/* router.beforeEach( (to,from) => {

  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.username.isAuthenticated) {
    return { name: 'login'}
  }
})
  */

export default router
