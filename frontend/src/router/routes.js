const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'novo-artigo', name: 'formPost', component: () => import('pages/FormPost.vue') },
    ],
  },

  // Caso não ache a rota informada redireciona para a página not found
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
