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
        title: 'Beach Holiday Memberships in Amanzimtoti',
        description:
          'Plan flexible Cabana Mio beach holidays in Athlone Park, Amanzimtoti with Coastal Preferred Escapes memberships and long-stay South African escape options.',
      },
    },
    {
      path: '/coming-soon/',
      component: () => import('@/views/ComingSoonView.vue'),
      meta: {
        title: 'Coming Soon',
        description:
          'Coastal Preferred Escapes is launching soon. Join the Founding Family waitlist for priority access.',
        noindex: true,
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
        title: 'Contact Coastal Preferred Escapes',
        description:
          'Contact Coastal Preferred Escapes about Cabana Mio beach holiday memberships, long-stay winter escapes, availability and payments in Amanzimtoti.',
      },
    },
    {
      path: '/cabana-mio/',
      component: () => import('@/views/CabanaMioView.vue'),
      meta: {
        title: 'Cabana Mio Accommodation in Amanzimtoti',
        description:
          'View Cabana Mio accommodation details for 3-bedroom self-catering beach holidays in Athlone Park, Amanzimtoti on the KwaZulu-Natal South Coast.',
      },
    },
    {
      path: '/long-stay/',
      component: () => import('@/views/LongStayView.vue'),
      meta: {
        title: '60-90 Day Winter Sun Escape in South Africa',
        description:
          'Escape the European winter with a 60-90 day beachside stay in Amanzimtoti, South Africa, with warm Indian Ocean days, golf, wildlife and coastal living.',
      },
    },
    {
      path: '/about/',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About Coastal Preferred Escapes',
        description:
          'Learn about Coastal Preferred Escapes, CPE Properties, our member-first promise and our approach to flexible Cabana Mio beach holidays.',
      },
    },
    {
      path: '/faq/',
      component: () => import('@/views/FaqView.vue'),
      meta: {
        title: 'Beach Holiday Membership FAQ',
        description:
          'Answers to common questions about Coastal Preferred Escapes membership, Cabana Mio, Holiday Wallet contributions, Founding Family benefits, and flexible beach holidays.',
      },
    },
    {
      path: '/holiday-wallet-calculator/',
      component: () => import('@/views/HolidayWalletCalculatorView.vue'),
      meta: {
        title: 'Holiday Wallet Calculator for Beach Holidays',
        description:
          'Estimate how Coastal Preferred Escapes monthly membership contributions could build holiday value over 12 to 60 months for future Cabana Mio stays.',
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
