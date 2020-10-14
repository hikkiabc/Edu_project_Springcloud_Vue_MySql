import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/table',
    name: 'Teacher Management name',
    meta: { title: 'Teacher Management', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Teacher Table',
        component: () => import('@/views/edu-teacher'),
        meta: { title: 'Teacher', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Teacher Add name',
        component: () => import('@/views/edu-teacher/save'),
        meta: { title: 'Teacher Add', icon: 'tree' }
      },
      {
        path: 'edit/:id',
        name: 'Teacher Add name',
        component: () => import('@/views/edu-teacher/save'),
        meta: { title: 'Teacher Add', icon: 'tree' },
        hidden: true
      }
    ]
  }, {
    path: '/subject',
    component: Layout,
    redirect: '/subject/table',
    name: 'subject Management name',
    meta: { title: 'Subject Categary', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'subject Table',
        component: () => import('@/views/edu-subject'),
        meta: { title: 'Subject', icon: 'table' }
      },
      {
        path: 'add',
        name: 'subject Add name',
        component: () => import('@/views/edu-subject/save'),
        meta: { title: 'Subject Add', icon: 'tree' }
      },
      {
        path: 'edit/:id',
        name: 'subject Add name',
        component: () => import('@/views/edu-subject/save'),
        meta: { title: 'Subject Add', icon: 'tree' },
        hidden: true
      }
    ]
  }, {
    path: '/course',
    component: Layout,
    redirect: '/course/table',
    name: 'course Management name',
    meta: { title: 'course Categary', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'course Table',
        component: () => import('@/views/edu-course'),
        meta: { title: 'course', icon: 'table' }
      },
      {
        path: 'add',
        name: 'course Add name',
        component: () => import('@/views/edu-course/save'),
        meta: { title: 'Course Add', icon: 'tree' }
      },
      {
        path: 'chapter',
        name: 'course-chapter',
        component: () => import('@/views/edu-course/chapter'),
        meta: { title: 'course Chapter', icon: 'tree', activeMenu: '/course/add' },
        hidden: true
      }, {
        path: 'publish',
        name: 'course Add name',
        component: () => import('@/views/edu-course/publish'),
        meta: { title: 'course Publish', icon: 'tree', activeMenu: '/course/add' },
        hidden: true
      }
    ]
  },
  {
    path: '/sta',
    component: Layout,
    redirect: '/sta',
    name: 'Teacher Management name',
    meta: { title: 'Statistics', icon: 'el-icon-s-help' },
    children: [
      {
        path: '',
        name: 'Teacher Table',
        component: () => import('@/views/edu-statistics'),
        meta: { title: 'Index', icon: 'table' }
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
