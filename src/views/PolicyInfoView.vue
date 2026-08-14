<template>
  <main id="main-content">
    <article class="policy-info shell-section">
      <div class="policy-info__inner shell-container">
        <p class="shell-eyebrow">{{ page.eyebrow }}</p>
        <h1 class="shell-heading">{{ page.title }}</h1>

        <div class="policy-info__notice">
          <strong>Important note</strong>
          <p>
            This page provides a plain-language overview while final booking and membership terms
            are being prepared. Confirmed terms will be shared before any booking or membership is
            accepted.
          </p>
        </div>

        <div class="policy-info__body">
          <section v-for="section in page.sections" :key="section.heading">
            <h2>{{ section.heading }}</h2>
            <p>{{ section.body }}</p>
          </section>

          <p>
            For the latest confirmed terms, contact the Coastal Preferred Escapes team at
            <a :href="`mailto:${siteText['contact-bar'].email}`">{{ siteText['contact-bar'].email }}</a>
            or call
            <a :href="`tel:${siteText['contact-bar'].phone.replaceAll(' ', '')}`">
              {{ siteText['contact-bar'].phone }}
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useHead } from '@unhead/vue'
  import { siteText } from '@/content/siteText'
  import { useSeoHead } from '@/composables/useSeoHead'

  const pages = {
    terms: {
      eyebrow: 'Terms & Conditions',
      title: 'Booking and membership terms overview.',
      description:
        'Plain-language overview of Coastal Preferred Escapes booking and membership terms while final terms are prepared.',
      sections: [
        {
          heading: 'Bookings and Availability',
          body:
            'All accommodation, long-stay and membership-related bookings are subject to availability, seasonal rules and written confirmation from Coastal Preferred Escapes.',
        },
        {
          heading: 'Memberships',
          body:
            'Membership enquiries are handled through the Coastal Preferred Escapes team. Final membership benefits, payment terms and booking rules must be confirmed before a membership is accepted.',
        },
        {
          heading: 'Guest Responsibility',
          body:
            'Guests are expected to respect the accommodation, house rules, shared facilities and surrounding community during their stay.',
        },
      ],
    },
    refunds: {
      eyebrow: 'Refund & Cancellation',
      title: 'Refund and cancellation overview.',
      description:
        'Plain-language overview of Coastal Preferred Escapes refund and cancellation expectations while final policy wording is prepared.',
      sections: [
        {
          heading: 'Cancellation Terms',
          body:
            'Cancellation rules may differ depending on the booking type, stay dates, season and any confirmed membership or long-stay agreement.',
        },
        {
          heading: 'Refunds',
          body:
            'Any refund eligibility will be confirmed in writing before payment is accepted. Final refund terms should be reviewed with the team before booking.',
        },
        {
          heading: 'Changes to Dates',
          body:
            'Date changes may be possible where availability allows, but cannot be guaranteed until confirmed by Coastal Preferred Escapes.',
        },
      ],
    },
    deposit: {
      eyebrow: 'Security Deposit',
      title: 'Refundable security deposit overview.',
      description:
        'Plain-language overview of Coastal Preferred Escapes refundable security deposit expectations while final terms are prepared.',
      sections: [
        {
          heading: 'Why a Deposit May Apply',
          body:
            'A refundable security deposit may apply to help protect the accommodation, contents and booking conditions during a guest stay.',
        },
        {
          heading: 'Refund Conditions',
          body:
            'Deposit refunds are generally subject to the accommodation being left in acceptable condition and all confirmed stay terms being met.',
        },
        {
          heading: 'Final Confirmation',
          body:
            'The exact deposit amount, timing and refund process will be confirmed before a booking is accepted.',
        },
      ],
    },
  } as const

  const route = useRoute()
  const pageKey = computed(() => (route.meta.policyPage as keyof typeof pages) ?? 'terms')
  const page = computed(() => pages[pageKey.value])

  useSeoHead({
    title: page.value.eyebrow,
    description: page.value.description,
    path: route.path,
  })

  useHead({
    title: `${page.value.eyebrow} | ${siteText.site.name}`,
    meta: [
      {
        name: 'description',
        content: page.value.description,
      },
      { name: 'robots', content: 'index, follow' },
    ],
  })
</script>

<style scoped>
  .policy-info__inner {
    max-width: 52rem;
  }

  .policy-info__notice,
  .policy-info__body {
    margin-top: var(--shell-space-8);
  }

  .policy-info__notice {
    border: 1px solid var(--shell-color-hairline);
    border-left: 4px solid var(--shell-color-accent);
    border-radius: var(--shell-radius-md);
    background: white;
    padding: var(--shell-space-5);
  }

  .policy-info__notice strong {
    color: var(--shell-color-ink);
    font-weight: 900;
  }

  .policy-info__notice p,
  .policy-info__body p {
    margin: var(--shell-space-3) 0 0;
    color: var(--shell-color-muted) !important;
    line-height: 1.7 !important;
  }

  .policy-info__body section + section {
    margin-top: var(--shell-space-8);
  }

  .policy-info__body h2 {
    margin: 0;
    color: var(--shell-color-ink);
    font-size: 1.25rem;
    font-weight: 800;
  }

  .policy-info__body a {
    color: var(--shell-color-accent);
    font-weight: 800;
  }
</style>
