import Layout from '@/layout'

const foundationRouter = {
  path: '/foundation',
  component: Layout,
  name: 'Foundation',
  meta: {
    title: 'Foundation',
    icon: 'documentation'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/foundation/index')
    },
    {
      path: 'colors',
      component: () => import('@/views/foundation/colors'),
      name: 'Colors',
      meta: { title: 'Colors' }
    },
    {
      path: 'typography',
      component: () => import('@/views/foundation/typography'),
      name: 'Typography',
      meta: { title: 'Typography' }
    },
    {
      path: 'naming',
      component: () => import('@/views/foundation/naming'),
      name: 'Naming',
      meta: { title: 'Naming' }
    }
  ]
}

export default foundationRouter
