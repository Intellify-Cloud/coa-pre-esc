<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'founding-family'>
  }>()
</script>

<template>
  <section id="founding-family" class="founding-family-section" aria-labelledby="founding-title">
    <div class="founding-family-section__inner shell-container">
      <div class="founding-family-section__copy">
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="founding-title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>

      <div class="founding-family-section__details" aria-label="Founding Member offer details">
        <div>
          <h3>Offer Includes</h3>
          <ul>
            <li v-for="term in data.offerTerms" :key="term">{{ term }}</li>
          </ul>
        </div>

        <div>
          <h3>Cabana Mio Stay</h3>
          <ul>
            <li v-for="item in data.inclusions" :key="item">{{ item }}</li>
          </ul>
        </div>

        <a class="shell-button shell-button--primary" :href="data.cta.href">
          {{ data.cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .founding-family-section {
    padding-block: var(--shell-space-12);
    background: var(--shell-color-ink);
    color: var(--shell-color-surface);
  }

  .founding-family-section__inner {
    display: grid;
    align-items: center;
    gap: var(--shell-space-8);
  }

  .founding-family-section .shell-eyebrow {
    color: rgb(255 255 255 / 0.92);
    text-shadow: 0 1px 1px rgb(0 0 0 / 0.18);
  }

  .founding-family-section h2 {
    max-width: 18ch;
    margin: var(--shell-space-2) 0 0;
    color: white;
    font-size: clamp(1.8rem, 4vw, 3rem);
    text-shadow: 0 2px 10px rgb(0 0 0 / 0.18);
    line-height: 1.05;
  }

  .founding-family-section p {
    max-width: 42rem;
    margin: var(--shell-space-4) 0 0;
    color: rgb(255 255 255 / 0.92) !important;
    text-shadow: 0 1px 1px rgb(0 0 0 / 0.16);
    line-height: 1.65;
  }

  .founding-family-section__details {
    display: grid;
    gap: var(--shell-space-5);
    border: 1px solid rgb(255 255 255 / 0.2);
    border-radius: var(--shell-radius-md);
    background: rgb(255 255 255 / 0.08);
    padding: var(--shell-space-5);
    box-shadow:
      inset 0 1px 0 rgb(255 255 255 / 0.12),
      0 1rem 2.25rem rgb(0 0 0 / 0.14);
  }

  .founding-family-section__details h3 {
    margin: 0 0 var(--shell-space-3);
    color: white;
    font-size: 0.9rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .founding-family-section__details ul {
    display: grid;
    gap: var(--shell-space-2);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .founding-family-section__details li {
    display: grid;
    grid-template-columns: 1rem minmax(0, 1fr);
    gap: var(--shell-space-2);
    color: rgb(255 255 255 / 0.82);
    font-weight: 700;
    line-height: 1.45;
  }

  .founding-family-section__details li::before {
    content: '';
    width: 0.45rem;
    aspect-ratio: 1;
    margin-top: 0.55rem;
    border-radius: 999px;
    background: var(--shell-color-accent);
  }

  .founding-family-section__details a {
    justify-self: start;
    background: var(--shell-color-accent);
    color: var(--shell-color-ink);
  }

  @media (min-width: 768px) {
    .founding-family-section__inner {
      grid-template-columns: minmax(0, 0.9fr) minmax(18rem, 0.8fr);
    }
  }
</style>
