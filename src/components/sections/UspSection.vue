<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'usp'>
  }>()
</script>

<template>
  <section class="usp-section" aria-label="Coastal Preferred Escapes benefits">
    <div class="usp-section__inner shell-container">
      <article v-for="item in data.items" :key="item.title" class="usp-section__item">
        <div class="usp-section__icon" aria-hidden="true">
          <svg v-if="item.icon === 'families'" viewBox="0 0 48 48">
            <circle cx="24" cy="14" r="6" />
            <circle cx="12" cy="18" r="5" />
            <circle cx="36" cy="18" r="5" />
            <path d="M14 38v-5a10 10 0 0 1 20 0v5" />
            <path d="M4 38v-4a8 8 0 0 1 12-7" />
            <path d="M44 38v-4a8 8 0 0 0-12-7" />
          </svg>
          <svg v-else-if="item.icon === 'calendar'" viewBox="0 0 48 48">
            <rect x="9" y="10" width="30" height="29" rx="3" />
            <path d="M16 6v8M32 6v8M9 19h30" />
            <path d="M16 26h4M22 26h4M28 26h4M16 32h4M22 32h4M28 32h4" />
          </svg>
          <svg v-else-if="item.icon === 'wallet'" viewBox="0 0 48 48">
            <path
              d="M10 16h28a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4h24"
            />
            <path d="M34 25h8v8h-8a4 4 0 0 1 0-8Z" />
            <path d="M34 29h1" />
          </svg>
          <svg v-else-if="item.icon === 'pause'" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="18" />
            <path d="M19 16v16M29 16v16" />
          </svg>
          <svg v-else-if="item.icon === 'shield'" viewBox="0 0 48 48">
            <path d="M24 5 39 11v11c0 10-6.5 17-15 21C15.5 39 9 32 9 22V11l15-6Z" />
            <path d="m17 24 5 5 10-12" />
          </svg>
          <svg v-else viewBox="0 0 48 48">
            <path d="m24 5 5 5 7-1 2 7 6 4-4 6 1 7-7 2-5 6-5-5-7 1-2-7-6-4 4-6-1-7 7-2 5-6Z" />
            <path d="m18 24 4 4 8-9" />
          </svg>
        </div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.body }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
  .usp-section {
    border-block: 1px solid color-mix(in srgb, var(--shell-color-hairline) 64%, transparent);
    background:
      radial-gradient(circle at 50% 0%, rgb(14 107 110 / 0.1), transparent 42%),
      var(--shell-color-surface);
  }

  .usp-section__inner {
    display: grid;
    grid-template-columns: 1fr;
    min-height: var(--usp-strip-height, 10.5rem);
    align-items: stretch;
  }

  .usp-section__item {
    display: grid;
    grid-template-rows: 3rem auto 1fr;
    align-content: center;
    justify-items: center;
    gap: 0.45rem;
    padding: var(--shell-space-6) var(--shell-space-5);
    text-align: center;
  }

  .usp-section__item + .usp-section__item {
    border-top: 1px solid color-mix(in srgb, var(--shell-color-hairline) 72%, transparent);
  }

  @media (min-width: 560px) {
    .usp-section__inner {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .usp-section__item + .usp-section__item {
      border-top: 0;
    }

    .usp-section__item:nth-child(n + 3) {
      border-top: 1px solid color-mix(in srgb, var(--shell-color-hairline) 60%, transparent);
    }

    .usp-section__item:nth-child(even) {
      border-left: 1px solid color-mix(in srgb, var(--shell-color-hairline) 72%, transparent);
    }
  }

  .usp-section__icon {
    width: 3rem;
    height: 3rem;
    color: var(--shell-color-lagoon);
  }

  .usp-section__icon svg {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }

  .usp-section__item h2 {
    margin: 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-sans);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
  }

  .usp-section__item p {
    max-width: 12rem;
    margin: 0;
    color: var(--shell-color-muted);
    font-size: 0.875rem;
    line-height: 1.35;
  }

  @media (min-width: 768px) {
    .usp-section__inner {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .usp-section__item,
    .usp-section__item + .usp-section__item {
      border-left: 0;
      border-top: 0;
    }

    .usp-section__item {
      border-top: 1px solid color-mix(in srgb, var(--shell-color-hairline) 60%, transparent);
    }

    .usp-section__item:nth-child(-n + 3) {
      border-top: 0;
    }
  }

  @media (min-width: 1200px) {
    .usp-section__inner {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }

    .usp-section__item + .usp-section__item {
      border-left: 1px solid color-mix(in srgb, var(--shell-color-hairline) 72%, transparent);
    }

    .usp-section__item {
      border-top: 0;
    }
  }
</style>
