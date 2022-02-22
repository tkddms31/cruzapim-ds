/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  name: 'ComponentDemo',
  meta: {
    title: 'Components',
    icon: 'component'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/components-demo/index')
    },
    {
      path: 'button',
      component: () => import('@/views/components-demo/button'),
      name: 'ButtonDemo',
      meta: { title: 'Button' }
    }
  ]
}

export default componentsRouter
