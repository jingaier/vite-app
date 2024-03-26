/*
 * @Author: Jingaier
 * @Date: 2022-10-13 13:33:24
 * @LastEditors: Jingaier
 * @LastEditTime: 2022-10-18 11:42:41
 * @Descripttion: 
 */

import{createRouter,createWebHashHistory,}from 'vue-router'
import Home from'../pages/home.vue'
import About from "../pages/about.vue";
import Test from "../pages/test.vue";
 const routes = [
   {
     path: "/",
     name: "Home",
     component: Home,
   },
   {
     path: "/about",
     name: "About",
     component: About,
   },
   {
     path: "/test",
     name: "Test",
     component: Test,
   },
 ];
 const router = createRouter({
   history:createWebHashHistory(),
   routes
 })
 export default router;