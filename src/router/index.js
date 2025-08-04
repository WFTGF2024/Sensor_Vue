import { createRouter, createWebHistory } from 'vue-router'

import Resume from '../views/Resume.vue'
import Project from '../views/Project.vue'
import Page3 from '../views/Page3.vue'
import Page4 from '../views/Page4.vue'
import Page5 from '../views/Page5.vue'
import Page6 from '../views/Page6.vue'
import Sensor from '../views/sensor.vue'

const routes = [
  { path: '/',      redirect: '/Resume' },
  { path: '/Resume', component: Resume, name: 'Resume' },
  { path: '/Project', component: Project, name: 'Project' },
  { path: '/page3', component: Page3, name: 'Page3' },
  { path: '/page4', component: Page4, name: 'Page4' },
  { path: '/page5', component: Page5, name: 'Page5' },
  { path: '/page6', component: Page6, name: 'Page6' },
  { path: '/Sensor', component: Sensor, name: 'Sensor' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
