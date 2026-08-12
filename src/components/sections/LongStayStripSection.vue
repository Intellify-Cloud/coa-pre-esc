<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'long-stay-strip'>
  }>()
</script>

<template>
  <section class="long-stay-strip" aria-labelledby="long-stay-strip-title">
    <div class="long-stay-strip__inner shell-container">
      <div class="long-stay-strip__intro">
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="long-stay-strip-title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>

      <div class="long-stay-strip__items" aria-label="Long stay highlights">
        <article v-for="item in data.items" :key="item.title">
          <strong>{{ item.title }}</strong>
          <span>{{ item.body }}</span>
        </article>
      </div>

      <a class="shell-button shell-button--primary long-stay-strip__cta" :href="data.cta.href">
        {{ data.cta.label }}
      </a>
    </div>
  </section>
</template>

<style scoped>
  .long-stay-strip {
    border-block: 1px solid color-mix(in srgb, var(--shell-color-accent) 70%, white);
    background: var(--shell-color-accent);
  }

  .long-stay-strip__inner {
    display: grid;
    gap: 1rem;
    align-items: center;
    padding-block: 1.75rem;
  }

  .long-stay-strip__intro {
    display: grid;
    gap: 0.25rem;
  }

  .long-stay-strip__intro .shell-eyebrow,
  .long-stay-strip__intro h2,
  .long-stay-strip__intro p {
    margin: 0;
  }

  .long-stay-strip__intro .shell-eyebrow {
    color: rgb(255 255 255 / 0.9) !important;
    font-size: 0.72rem !important;
    font-weight: 850 !important;
    line-height: 1.2 !important;
  }

  .long-stay-strip__intro h2 {
    color: white;
    font-family: var(--shell-font-sans);
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 900;
    line-height: 1.1;
  }

  .long-stay-strip__intro p:not(.shell-eyebrow) {
    color: rgb(255 255 255 / 0.92) !important;
    font-size: 0.9rem !important;
    line-height: 1.35 !important;
  }

  .long-stay-strip__items {
    display: grid;
    gap: 0.65rem;
  }

  .long-stay-strip__items article {
    display: grid;
    gap: 0.15rem;
    border-left: 3px solid rgb(255 255 255 / 0.72);
    padding-left: 0.75rem;
  }

  .long-stay-strip__items strong {
    color: white;
    font-size: 0.88rem;
    font-weight: 900;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .long-stay-strip__items span {
    color: rgb(255 255 255 / 0.88);
    font-size: 0.82rem;
    font-weight: 500;
    line-height: 1.3;
  }

  .long-stay-strip__cta {
    justify-self: start;
    min-height: 2.4rem;
    background: white;
    color: var(--shell-color-ink);
    padding-inline: 1rem;
    font-size: 0.78rem;
    text-transform: uppercase;
  }

  @media (min-width: 900px) {
    .long-stay-strip__inner {
      min-height: 210px;
      grid-template-columns: minmax(13rem, 1.05fr) minmax(0, 2.2fr) auto;
      gap: clamp(1rem, 2vw, 2rem);
      padding-block: 1.4rem;
    }

    .long-stay-strip__items {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .long-stay-strip__cta {
      justify-self: end;
      white-space: nowrap;
    }
  }
</style>
