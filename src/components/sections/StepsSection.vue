<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'steps'>
  }>()
</script>

<template>
  <section id="wallet" class="steps-section shell-section" aria-labelledby="steps-title">
    <div class="steps-section__inner shell-container">
      <p class="shell-eyebrow">{{ data.eyebrow }}</p>
      <h2 id="steps-title" class="shell-heading">{{ data.title }}</h2>

      <div class="steps-section__rows">
        <div class="steps-section__row">
          <article v-for="(item, index) in data.items.slice(0, 3)" :key="item.title" class="steps-section__card">
            <span class="steps-section__step">{{ index + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>

        <div class="steps-section__row steps-section__row--center">
          <article v-for="(item, index) in data.items.slice(3)" :key="item.title" class="steps-section__card">
            <span class="steps-section__step">{{ index + 4 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .steps-section__rows {
    display: grid;
    gap: var(--shell-space-8);
    margin-top: var(--shell-space-12);
  }

  .steps-section__row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--shell-space-6);
    max-width: 72rem;
    margin-inline: auto;
  }

  .steps-section__row--center {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 56rem;
  }

  .steps-section__row--center .steps-section__card {
    height: 233px;
  }

  .steps-section__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--shell-space-8) var(--shell-space-5) var(--shell-space-6);
    background: var(--shell-color-surface);
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-lg);
    box-shadow: 0 0.75rem 2rem rgb(10 42 94 / 0.06);
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .steps-section__card:hover {
    transform: translateY(-4px);
    box-shadow: 0 1.25rem 3rem rgb(10 42 94 / 0.1);
  }

  .steps-section__step {
    display: grid;
    width: 3rem;
    height: 3rem;
    place-items: center;
    border-radius: 999px;
    background: var(--shell-color-accent);
    color: white;
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: var(--shell-space-5);
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--shell-color-accent-soft) 55%, transparent);
  }

  .steps-section__card h3 {
    margin: 0 0 var(--shell-space-3);
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--shell-color-ink);
    line-height: 1.2;
  }

  .steps-section__card p {
    margin: 0;
    color: var(--shell-color-muted);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    .steps-section__row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 36rem;
    }

    .steps-section__row--center {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 28rem;
    }
  }

  @media (min-width: 1200px) {
    .steps-section__row--center .steps-section__card {
      height: auto;
    }

    .steps-section__row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      max-width: 72rem;
    }

    .steps-section__row--center {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 56rem;
    }
  }
</style>
