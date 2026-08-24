<template>
  <NavBar :data="siteText['nav-bar']" />

  <main id="main-content">
    <section class="faq-hero shell-section" aria-labelledby="faq-title">
      <div class="faq-hero__inner shell-container">
        <header class="faq-hero__header">
          <p class="shell-eyebrow">Questions & Answers</p>
          <h1 id="faq-title" class="shell-heading">Clear answers before you join.</h1>
          <p class="shell-lead">
            Practical details about Coastal Preferred Escapes, Cabana Mio, membership flexibility,
            the Holiday Wallet, and Founding Family benefits.
          </p>
        </header>
      </div>
    </section>

    <section class="faq-section shell-section" aria-label="Frequently asked questions">
      <div class="faq-section__inner shell-container">
        <article v-for="item in faqItems" :key="item.question" class="faq-item shell-card">
          <h2>{{ item.question }}</h2>
          <p>{{ item.answer }}</p>
        </article>
      </div>
    </section>
  </main>

  <SiteFooter :data="siteText.footer" />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { siteText } from '@/content/siteText'
  import { useSeoHead } from '@/composables/useSeoHead'
  import { useHead } from '@unhead/vue'
  import NavBar from '@/components/sections/NavBar.vue'
  import SiteFooter from '@/components/sections/SiteFooter.vue'

  const faqItems = [
    {
      question: 'Is Coastal Preferred Escapes traditional timeshare?',
      answer:
        'No. Coastal Preferred Escapes is positioned as a flexible beach holiday membership, with no lifetime obligation and a Holiday Wallet model rather than traditional lifetime timeshare commitments.',
    },
    {
      question: 'How does the Holiday Wallet work?',
      answer:
        'Your monthly contributions build usable holiday value in a protected Holiday Wallet. Contribution options are available over 12, 24, 36, 48, or 60 months. The 60-month holiday option has no annual escalation and only changes if the Body Corporate raises the levy.',
    },
    {
      question: 'Can I choose when my family goes on holiday?',
      answer:
        'Yes, bookings are flexible within your membership season and subject to availability. The model is designed to avoid tying every family to one rigid fixed week.',
    },
    {
      question: 'What happens if life gets in the way?',
      answer:
        'The membership is designed with pause protection in mind, so temporary financial hardship or life changes can be handled with more flexibility than a rigid holiday product.',
    },
    {
      question: 'Where do members stay?',
      answer:
        'The flagship resort is Cabana Mio in Athlone Park, Amanzimtoti, KwaZulu-Natal. It offers self-catering chalet accommodation close to the beach on the South Coast.',
    },
    {
      question: 'How many guests can a Cabana Mio chalet sleep?',
      answer:
        'Each Cabana Mio chalet sleeps up to 6 guests, with a main bedroom, two additional twin bedrooms, a fully equipped kitchen, and family-friendly living space.',
    },
    {
      question: 'What is included at Cabana Mio?',
      answer:
        'Cabana Mio features self-catering chalets with a fully equipped kitchen, private patio and braai area, free unlimited Wi-Fi, and access to nearby beaches, shops, restaurants, and activities.',
    },
    {
      question: 'What are the membership levels?',
      answer:
        'The current brochure package options are Coastal Escape and Coastal Preferred Escape, with Coastal Premier Escape planned as a future phase.',
    },
    {
      question: 'What is a Founding Family membership?',
      answer:
        'Founding Family memberships are limited launch memberships for families who want early access to the CPE offering, including priority access to future promotions and upgrades.',
    },
    {
      question: 'Is there a Founding Family bonus stay?',
      answer:
        'Yes. The current Founding Family offer includes a 3-night complimentary stay for selected 2026 and 2027 weeks, with peak holiday weeks excluded.',
    },
    {
      question: 'Can I book peak holiday weeks?',
      answer:
        'Peak weeks are handled with availability rules and may be excluded from specific launch bonuses. The launch team can confirm what is available when you enquire.',
    },
    {
      question: 'How do I get more information?',
      answer:
        'Use the contact form to request the Founding Family Information Pack. The launch team will follow up personally with available next steps.',
    },
  ]

  const jsonLd = computed(() =>
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }),
  )

  useSeoHead({
    title: 'Beach Holiday Membership FAQ',
    description:
      'Answers to common questions about Coastal Preferred Escapes membership, Cabana Mio, Holiday Wallet contributions, Founding Family benefits, and flexible beach holidays.',
    path: '/faq/',
  })

  useHead({
    title: 'Beach Holiday Membership FAQ | Coastal Preferred Escapes',
    meta: [
      {
        name: 'description',
        content:
          'Answers to common questions about Coastal Preferred Escapes membership, Cabana Mio, Holiday Wallet contributions, Founding Family benefits, and flexible beach holidays.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
    script: [
      {
        type: 'application/ld+json',
        textContent: jsonLd,
      },
    ],
  })
</script>

<style scoped>
  .faq-hero {
    padding-top: clamp(8rem, 14vw, 12rem);
    background:
      linear-gradient(180deg, rgb(14 107 110 / 0.08), transparent 58%),
      var(--shell-color-canvas);
  }

  .faq-hero__inner {
    display: grid;
  }

  .faq-hero__header {
    max-width: 60rem;
  }

  .faq-hero__header .shell-heading {
    max-width: 18ch;
  }

  .faq-section {
    padding-top: 0;
  }

  .faq-section__inner {
    display: grid;
    gap: var(--shell-space-4);
  }

  .faq-item {
    padding: var(--shell-space-6);
  }

  .faq-item h2 {
    margin: 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(1.35rem, 2.2vw, 1.75rem);
    line-height: 1.12;
  }

  .faq-item p {
    margin: var(--shell-space-4) 0 0;
    color: var(--shell-color-muted);
    line-height: 1.65;
  }

  @media (min-width: 768px) {
    .faq-section__inner {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
