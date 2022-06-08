import type { RouteRecordRaw } from 'vue-router'
import { RouterEnum } from 'src/core/enums'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        name: RouterEnum.INDEX,
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      //
      {
        name: RouterEnum.PAGE,
        path: 'page',
        component: () => import('pages/page/IndexPage.vue'),
      },
      {
        name: RouterEnum.PAGE_TEMPLATE,
        path: 'page/template',
        component: () => import('pages/page/template/IndexPage.vue'),
      },
      //
      {
        name: RouterEnum.MODULE_QUIZ,
        path: 'module/quiz',
        component: () => import('pages/module/quiz/IndexPage.vue'),
      },
      {
        name: RouterEnum.MODULE_QUIZ_CREATE,
        path: 'module/quiz/create',
        component: () => import('pages/module/quiz/CreatePage.vue'),
      },
      {
        name: RouterEnum.MODULE_QUIZ_UPDATE,
        path: 'module/quiz/:quiz',
        component: () => import('pages/module/quiz/UpdatePage.vue'),
      },
      //
      {
        name: RouterEnum.MODULE_STEP,
        path: 'module/step',
        component: () => import('pages/module/step/IndexPage.vue'),
      },
      //
      {
        name: RouterEnum.SECURITY_USER,
        path: 'security/user',
        component: () => import('pages/security/user/IndexPage.vue'),
      },
      //
      {
        name: RouterEnum.SECURITY_GROUP,
        path: 'security/group',
        component: () => import('pages/security/group/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
