import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/dashboard' },  // 根路径重定向到 /dashboard
  { path: '/dashboard', component: () => import('@/views/light/Dashboard.vue') },
  { path: '/gateway', component: () => import('@/views/gateway/Gateway.vue') },
  { path: '/data', component: () => import('@/views/data/Data.vue') },
  { path: '/log', component: () => import('@/views/log/Log.vue') },
  { path: '/month', component: () => import('@/views/month/Month.vue') },
  { path: '/scene', component: () => import('@/views/scene/Scene.vue') },
  { path: '/space', component: () => import('@/views/space/Space.vue') },
  // 添加其他路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;