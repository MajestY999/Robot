import { createRouter, createWebHashHistory } from 'vue-router'

import RobotBuilder from '@/build/RobotBuilder.vue'
import HomePage from '@/home/HomePage.vue'
import Partinfo from '@/parts/PartInfo.vue'

export default createRouter({
 history: createWebHashHistory(),
 routes: [
  {
   path: '/',
   name: 'ГЛАВНАЯ',
   component: HomePage,
  },
  {
   path: '/build',
   name: 'ПОСТРОЙ РОБОТА',
   component: RobotBuilder,
  },
  {
   path: '../parts/partType/:id',
   name: '',
   component: Partinfo,
  },
 ],
})











