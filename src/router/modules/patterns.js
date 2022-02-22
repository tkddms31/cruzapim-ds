import Layout from '@/layout'

const patternsRouter = {
  path: '/patterns',
  component: Layout,
  name: 'Patterns',
  meta: {
    title: 'Patterns',
    icon: 'example'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/patterns/index')
    },
    {
      path: 'layouts',
      component: () => import('@/views/patterns/layouts-pattern'),
      name: 'LayoutsPattern',
      meta: { title: 'Layouts' }
    },
    {
      path: 'forms',
      component: () => import('@/views/patterns/forms-pattern'),
      name: 'FormsPattern',
      meta: { title: 'Forms' }
    }
  ]
}

export default patternsRouter
