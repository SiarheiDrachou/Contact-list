import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacts from '../views/Contacts.vue'
import ContactInfo from '../views/ContactInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/ContactInfo',
    name: 'ContactInfo',
    component: ContactInfo,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
