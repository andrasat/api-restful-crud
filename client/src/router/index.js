import Vue from 'vue'
import Router from 'vue-router'
import Memo from '@/components/Memo'
import CreateMemo from '@/components/Create-Memo'
import EditMemo from '@/components/Edit-Memo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Memo',
      component: Memo,
    },
    {
      path: '/create',
      name: 'Create-Memo',
      component: CreateMemo
    },
    {
      path: '/edit/:id',
      name: 'Edit-Memo',
      component: EditMemo
    }
  ]
})
