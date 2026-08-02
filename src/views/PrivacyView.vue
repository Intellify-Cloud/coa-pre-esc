<template>
  <main id="main-content">
    <article class="policy-section shell-section">
      <div class="policy-section__inner shell-container">
        <p class="shell-eyebrow">Privacy Policy</p>
        <h1 class="shell-heading">How we protect your personal information.</h1>

        <div class="policy-section__body">
          <p>
            Coastal Preferred Escapes (operated by CPE Properties (Pty) Ltd) is committed to
            protecting your personal information in accordance with the Protection of Personal
            Information Act (POPIA).
          </p>

          <template v-for="(section, index) in privacyData.sections" :key="section.heading">
            <h2>{{ section.heading }}</h2>
            <p>{{ section.body }}</p>
          </template>

          <p>
            If you have any questions about this privacy policy or how we handle your personal
            information, please contact us at
            <a :href="`mailto:${siteText['contact-bar'].email}`">{{
              siteText['contact-bar'].email
            }}</a>
            or call
            <a :href="`tel:${siteText['contact-bar'].phone.replaceAll(' ', '')}`">{{
              siteText['contact-bar'].phone
            }}</a
            >.
          </p>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
  import { siteText } from '@/content/siteText'
  import { useSeoHead } from '@/composables/useSeoHead'
  import { useHead } from '@unhead/vue'

  const privacyData = {
    sections: [
      {
        heading: '1. Information We Collect',
        body: 'We collect personal information that you voluntarily provide when you enquire about our Founding Family membership, including your full name, email address, mobile number, and any additional details you include in your message.',
      },
      {
        heading: '2. How We Use Your Information',
        body: 'Your information is used solely to process your enquiry, provide you with the Founding Family Information Pack, and follow up regarding available membership options. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
      },
      {
        heading: '3. Data Storage and Security',
        body: 'We store your information securely and only retain it for as long as necessary to respond to your enquiry or manage your membership relationship. We implement appropriate technical and organisational measures to protect your personal information.',
      },
      {
        heading: '4. Your Rights',
        body: 'Under POPIA you have the right to access, correct, and delete your personal information. You may also object to the processing of your information or withdraw consent at any time by contacting us using the details below.',
      },
      {
        heading: '5. Contact',
        body: 'For any privacy-related queries, please reach out to us using the contact details provided on this page.',
      },
    ],
  }

  useSeoHead({
    title: 'Privacy Policy',
    description: `Privacy policy for ${siteText.site.name}. Learn how we handle your personal information in accordance with POPIA.`,
    path: '/privacy-policy/',
  })

  useHead({
    title: 'Privacy Policy | Coastal Preferred Escapes',
    meta: [
      {
        name: 'description',
        content: `Privacy policy for ${siteText.site.name}. Learn how we handle your personal information in accordance with POPIA.`,
      },
      { name: 'robots', content: 'index, follow' },
    ],
  })
</script>

<style scoped>
  .policy-section__inner {
    max-width: 48rem;
  }

  .policy-section__body {
    margin-top: var(--shell-space-8);
    color: var(--shell-color-muted);
    font-size: 1.125rem;
    line-height: 1.7;
  }

  .policy-section__body h2 {
    margin: var(--shell-space-8) 0 var(--shell-space-4);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--shell-color-ink);
  }

  .policy-section__body p {
    margin: 0 0 var(--shell-space-4);
  }

  .policy-section__body a {
    color: var(--shell-color-accent);
    font-weight: 600;
  }
</style>
