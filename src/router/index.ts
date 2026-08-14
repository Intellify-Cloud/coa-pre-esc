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
      path: '/contact/',
      alias: '/contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact',
        description:
          'Request the Founding Family Information Pack for Coastal Preferred Escapes. Get details on Cabana Mio beach holiday memberships in Athlone Park, Amanzimtoti.',
      },
    },
    {
      path: '/cabana-mio/',
      component: () => import('@/views/CabanaMioView.vue'),
      meta: {
        title: 'Cabana Mio',
        description:
          'View Cabana Mio accommodation details and seasonal 6-sleeper rates for Coastal Preferred Escapes holidays in Athlone Park, Amanzimtoti.',
      },
    },
    {
      path: '/long-stay/',
      component: () => import('@/views/LongStayView.vue'),
      meta: {
        title: '90-Day Winter Sun Escape in South Africa',
        description:
          'Escape the European winter with a 60-90 day stay in a spacious 3-bedroom beachside duplex in Amanzimtoti, South Africa. Beach, golf and summer sunshine await.',
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
      path: '/holiday-wallet-calculator/',
      component: () => import('@/views/HolidayWalletCalculatorView.vue'),
      meta: {
        title: 'Holiday Wallet Calculator',
        description:
          'Estimate how Coastal Preferred Escapes monthly contributions could build holiday value over 12 to 60 months.',
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
    {
      path: '/terms-and-conditions/',
      component: () => import('@/views/PolicyInfoView.vue'),
      meta: {
        title: 'Terms & Conditions',
        policyPage: 'terms',
        description: `Plain-language overview of ${siteText.site.name} booking and membership terms while final terms are prepared.`,
      },
    },
    {
      path: '/refund-cancellation-policy/',
      component: () => import('@/views/PolicyInfoView.vue'),
      meta: {
        title: 'Refund & Cancellation',
        policyPage: 'refunds',
        description: `Plain-language overview of ${siteText.site.name} refund and cancellation expectations while final policy wording is prepared.`,
      },
    },
    {
      path: '/security-deposit/',
      component: () => import('@/views/PolicyInfoView.vue'),
      meta: {
        title: 'Security Deposit',
        policyPage: 'deposit',
        description: `Plain-language overview of ${siteText.site.name} refundable security deposit expectations while final terms are prepared.`,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        title: 'Page Not Found',
        description: 'The page you were looking for could not be found. Return to the homepage or explore our site.',
        noindex: true,
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
