<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'about'>
  }>()
</script>

<template>
  <section id="about" class="about-section shell-section" aria-labelledby="about-title">
    <div class="about-section__inner shell-container">
      <div class="about-section__intro">
        <div>
          <p class="shell-eyebrow">{{ data.eyebrow }}</p>
          <h2 id="about-title" class="shell-heading">{{ data.title }}</h2>
        </div>
        <p>{{ data.body }}</p>
      </div>

      <ul class="about-section__highlights" aria-label="Membership highlights">
        <li v-for="highlight in data.highlights" :key="highlight">
          <span aria-hidden="true">{{ highlight.slice(0, 1) }}</span>
          {{ highlight }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
  .about-section__inner {
    display: grid;
    gap: var(--shell-space-10);
  }

  .about-section__intro {
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    gap: clamp(2rem, 6vw, 5rem);
    align-items: start;
    color: var(--shell-color-muted);
    font-size: 1.125rem;
    line-height: 1.7;
    text-align: left;
  }

  .about-section__intro p {
    align-self: center;
    margin: 0;
  }

  .about-section__highlights {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: var(--shell-space-3);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .about-section__highlights li {
    display: grid;
    grid-template-rows: auto 1fr;
    align-content: start;
    justify-items: start;
    gap: var(--shell-space-3);
    min-height: 11rem;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-sm);
    background: var(--shell-color-surface);
    padding: var(--shell-space-5);
    color: var(--shell-color-ink);
    font-weight: 650;
    line-height: 1.35;
  }

  .about-section__highlights span {
    display: grid;
    width: 2.75rem;
    height: 2.75rem;
    place-items: center;
    border-radius: 999px;
    background: var(--shell-color-accent-soft);
    color: var(--shell-color-accent);
    font-weight: 800;
  }

  @media (min-width: 768px) {
    .about-section__intro {
      grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    }

    .about-section__highlights {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .about-section__highlights {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }
</style>
