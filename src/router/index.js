import Vue from 'vue'
import VueRouter from 'vue-router'
import CppkHome from "@/components/CppkHome";
import CppkNews from "@/components/moduls/CppkNews";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CppkHome
  },
  {
    path: '/news',
    name: 'News',
    component: CppkNews,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
