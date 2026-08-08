<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'how-it-works'>
  }>()
</script>

<template>
  <section id="how-it-works" class="how-section shell-section" aria-labelledby="how-title">
    <div class="how-section__inner shell-container">
      <div class="how-section__intro">
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="how-title" class="shell-heading">{{ data.title }}</h2>
        <p class="shell-lead">{{ data.body }}</p>
      </div>

      <div class="how-section__steps" aria-label="How Coastal Preferred Escapes works">
        <article v-for="(item, index) in data.items" :key="item.title" class="how-step">
          <span class="how-step__number" aria-hidden="true">{{ index + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .how-section {
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.96), rgb(239 247 247 / 0.82)),
      var(--shell-color-surface);
  }

  .how-section__inner {
    display: grid;
    gap: var(--shell-space-8);
  }

  .how-section__intro {
    max-width: 58rem;
  }

  .how-section__steps {
    display: grid;
    gap: var(--shell-space-4);
  }

  .how-step {
    display: grid;
    gap: var(--shell-space-3);
    border: 1px solid color-mix(in srgb, var(--shell-color-hairline) 76%, transparent);
    border-radius: var(--shell-radius-md);
    background: white;
    padding: var(--shell-space-5);
    box-shadow: 0 0.65rem 1.5rem rgb(10 42 94 / 0.06);
  }

  .how-step__number {
    display: grid;
    width: 2.75rem;
    aspect-ratio: 1;
    place-items: center;
    border-radius: 999px;
    background: var(--shell-color-lagoon);
    color: white;
    font-weight: 900;
  }

  .how-step h3 {
    margin: 0;
    color: var(--shell-color-ink);
    font-size: 1.15rem;
    font-weight: 900;
    line-height: 1.25;
  }

  .how-step p {
    margin: 0;
    color: var(--shell-color-muted);
    font-size: 0.98rem;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    .how-section__steps {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
