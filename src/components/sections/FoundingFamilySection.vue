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

      <div class="founding-family-section__details" aria-label="Founding Family details">
        <span>Limited memberships</span>
        <span>Bonus stay before {{ data.deadline }}</span>
        <span>{{ data.bonusStay.nights }} complimentary nights</span>
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
    grid-template-columns: minmax(0, 0.9fr) minmax(18rem, 0.8fr);
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
    gap: var(--shell-space-2);
    justify-items: start;
  }

  .founding-family-section__details span {
    color: rgb(255 255 255 / 0.82);
    font-weight: 700;
  }

  .founding-family-section__details a {
    margin-top: var(--shell-space-4);
    background: var(--shell-color-accent);
    color: var(--shell-color-ink);
  }

  @media (max-width: 759px) {
    .founding-family-section__inner {
      grid-template-columns: 1fr;
    }
  }
</style>
