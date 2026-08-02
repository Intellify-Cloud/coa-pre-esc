import { createRouter, createWebHistory } from 'vue-router'
import { useSeoHead } from '@/composables/useSeoHead'
import { nextTick } from 'vue'
import { siteText } from '@/content/siteText'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Home',
        description:
          'Join Coastal Preferred Escapes as a Founding Family member. Flexible annual Cabana Mio beach holidays at Athlone Park, Amanzimtoti, with a complimentary 3-night stay.',
      },
    },
    {
      path: '/coming-soon/',
      component: () => import('@/views/ComingSoonView.vue'),
      meta: {
        title: 'Coming Soon',
        description:
          'Coastal Preferred Escapes is launching soon. Join the Founding Family waitlist for priority access.',
      },
    },
    {
      path: '/portfolio/',
      component: () => import('@/views/PortfolioView.vue'),
      meta: {
        title: 'Portfolio',
        description: 'Placeholder portfolio route for future template sites.',
        noindex: true,
      },
    },
    {
      path: '/contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact',
        description:
          'Request the Founding Family Information Pack for Coastal Preferred Escapes. Get details on Cabana Mio beach holiday memberships in Athlone Park, Amanzimtoti.',
      },
    },
    {
      path: '/about/',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About CPE',
        description:
          'Learn about Coastal Preferred Escapes, our promise, principles, and commitment to flexible family beach holidays.',
      },
    },
    {
      path: '/faq/',
      component: () => import('@/views/FaqView.vue'),
      meta: {
        title: 'FAQ',
        description:
          'Answers to common questions about Coastal Preferred Escapes membership, Cabana Mio, Holiday Wallet contributions, Founding Family benefits, and flexible beach holidays.',
      },
    },
    {
      path: '/privacy-policy/',
      component: () => import('@/views/PrivacyView.vue'),
      meta: {
        title: 'Privacy Policy',
        description: `Privacy policy for ${siteText.site.name}. Learn how we handle your personal information.`,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return new Promise((resolve) => {
        nextTick(() => {
          resolve({ el: to.hash, behavior: 'smooth' })
        })
      })
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  const meta = to.meta as Record<string, unknown>
  useSeoHead({
    title: meta.title as string,
    description: meta.description as string,
    path: to.path,
  })

  const robots = document.querySelector(`meta[name='robots']`)
  if (meta.noindex) {
    if (robots) {
      robots.setAttribute('content', 'noindex, nofollow')
    } else {
      const m = document.createElement('meta')
      m.setAttribute('name', 'robots')
      m.setAttribute('content', 'noindex, nofollow')
      document.head.appendChild(m)
    }
  } else {
    if (robots) {
      robots.setAttribute('content', 'index, follow')
    }
  }
})

export default router
