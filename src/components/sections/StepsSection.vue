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
  .steps-section {
    background:
      linear-gradient(180deg, rgb(255 248 241 / 0.94), rgb(255 255 255 / 0.96)),
      var(--shell-color-canvas);
  }

  .steps-section__inner {
    display: grid;
    gap: var(--shell-space-8);
  }

  .steps-section__inner > .shell-heading {
    max-width: 18ch;
  }

  .steps-section__rows {
    --steps-card-gap: var(--shell-space-4);
    --steps-row-max: 72rem;

    display: grid;
    gap: var(--steps-card-gap);
  }

  .steps-section__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--steps-card-gap);
    max-width: var(--steps-row-max);
  }

  .steps-section__row--center {
    grid-template-columns: 1fr;
  }

  .steps-section__card {
    display: grid;
    gap: var(--shell-space-3);
    padding: var(--shell-space-5);
    border: 1px solid color-mix(in srgb, var(--shell-color-accent) 26%, white);
    border-radius: var(--shell-radius-md);
    background: white;
    box-shadow: 0 0.65rem 1.5rem rgb(119 63 18 / 0.07);
    transition: transform 200ms ease, box-shadow 200ms ease;
  }

  .steps-section__card:hover {
    transform: translateY(-4px);
    box-shadow: 0 1.25rem 3rem rgb(10 42 94 / 0.1);
  }

  .steps-section__step {
    display: grid;
    width: 2.75rem;
    aspect-ratio: 1;
    place-items: center;
    border-radius: 999px;
    background: var(--shell-color-accent);
    color: white;
    font-size: 1rem;
    font-weight: 900;
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--shell-color-accent-soft) 55%, transparent);
  }

  .steps-section__card h3 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 900;
    color: var(--shell-color-ink);
    line-height: 1.25;
  }

  .steps-section__card p {
    margin: 0;
    color: var(--shell-color-muted);
    font-size: 0.98rem;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    .steps-section__row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 36rem;
      margin-inline: auto;
    }

    .steps-section__row--center {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 28rem;
      margin-inline: auto;
    }
  }

  @media (min-width: 1200px) {
    .steps-section__row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      width: min(100%, var(--steps-row-max));
      max-width: none;
      margin-inline: 0;
    }

    .steps-section__row--center {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: min(
        calc(((var(--steps-row-max) - (var(--steps-card-gap) * 2)) / 3) * 2 + var(--steps-card-gap)),
        calc(100% - (var(--steps-card-gap) * 2))
      );
      max-width: none;
      margin-inline: auto;
    }
  }
</style>
