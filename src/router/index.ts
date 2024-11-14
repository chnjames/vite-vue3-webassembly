import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Single thread
      path: '/webassembly-single',
      name: 'webassemblySingle',
      component: () => import('../views/WebAssemblySingle.vue'),
    }, {
      // Web Worker
      path: '/webassembly-worker',
      name: 'webassemblyWorker',
      component: () => import('../views/WebAssemblyWorker.vue'),
    }, {
      // AssemblyScript
      path: '/assemblyscript',
      name: 'assemblyscript',
      component: () => import('../views/AssemblyScript.vue'),
    }, {
      // WebAssembly — Rust
      path: '/webassembly-rust',
      name: 'webassemblyRust',
      component: () => import('../views/WebAssemblyRust.vue'),
    }
  ],
})

export default router
