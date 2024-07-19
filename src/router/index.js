import { createRouter, createWebHistory } from 'vue-router'

// Local pages
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    }
  ]
})

// /**
//  * Check if the user is authenticated before requesting a route on all routes that require authentication.
//  */
// router.beforeEach(async (to, from, next) => {
//   if (to.meta.requiresAuth) {
//     // Redirect to login
//     if (!localStorage.getItem('token')) {
//       next('/login')
//       return
//     } else {
//       // Load user by localStorage token
//       const userStore = useUserStore()
//       const appStore = useAppStore()
//       // Load user into store
//       await userStore.getUser(localStorage.getItem('token'), appStore)
//       // Check user
//       if (!userStore.$state.user) {
//         next('/login')
//         return
//       }
//       next()
//       return
//     }
//   }
//   next()
// })

export default router
