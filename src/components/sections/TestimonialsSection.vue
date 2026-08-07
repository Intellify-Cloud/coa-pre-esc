<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'testimonials'>
  }>()
</script>

<template>
  <section id="faq" class="testimonials-section shell-section" aria-labelledby="testimonials-title">
    <div class="shell-container">
      <p class="shell-eyebrow">{{ data.eyebrow }}</p>
      <h2 id="testimonials-title" class="shell-heading">{{ data.title }}</h2>

      <div v-if="data.items.length" class="testimonials-section__grid">
        <figure
          v-for="item in data.items"
          :key="item.name + item.detail"
          class="testimonials-section__card shell-card"
        >
          <blockquote>{{ item.quote }}</blockquote>
          <figcaption>
            <strong>{{ item.name }}</strong>
            <span>{{ item.detail }}</span>
          </figcaption>
        </figure>
      </div>

      <div v-else class="testimonials-section__empty shell-card">
        Add testimonials in `siteText.ts`, or remove `testimonials` from the section registry.
      </div>
    </div>
  </section>
</template>

<style scoped>
  .testimonials-section__grid {
    display: grid;
    gap: var(--shell-space-4);
    margin-top: var(--shell-space-10);
  }

  .testimonials-section__card,
  .testimonials-section__empty {
    padding: var(--shell-space-8);
  }

  .testimonials-section__card {
    margin: 0;
  }

  .testimonials-section__card blockquote {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.6;
  }

  .testimonials-section__card figcaption {
    display: grid;
    gap: var(--shell-space-1);
    margin-top: var(--shell-space-8);
    color: var(--shell-color-muted);
  }

  .testimonials-section__card strong {
    color: var(--shell-color-ink);
  }

  .testimonials-section__empty {
    margin-top: var(--shell-space-10);
    color: var(--shell-color-muted);
  }

  @media (min-width: 768px) {
    .testimonials-section__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
