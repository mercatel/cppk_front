import Vue from 'vue'
import VueRouter from 'vue-router'
import CppkWrapper from "@/components/CppkWrapper";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Wrapper',
    component: CppkWrapper
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
