<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'contact-bar'>
  }>()
</script>

<template>
  <aside class="contact-bar" aria-label="Contact information">
    <div class="contact-bar__inner shell-container">
      <p class="contact-bar__message">{{ data.message }}</p>
      <div class="contact-bar__links">
        <a v-if="data.phone" :href="`tel:${data.phone.replaceAll(' ', '')}`">
          {{ data.phone }}
        </a>
        <a v-if="data.email" :href="`mailto:${data.email}`">{{ data.email }}</a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
  .contact-bar {
    min-height: 20px;
    border-bottom: 1px solid var(--shell-color-hairline);
    background: var(--shell-color-ink);
    color: var(--shell-color-surface);
    font-size: 0.75rem;
  }

  .contact-bar__inner {
    display: flex;
    min-height: 20px;
    align-items: center;
    justify-content: center;
    gap: var(--shell-space-4);
  }

  .contact-bar__message {
    display: none;
    margin: 0;
  }

  .contact-bar__links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--shell-space-3);
  }

  @media (min-width: 768px) {
    .contact-bar__inner {
      justify-content: space-between;
    }

    .contact-bar__message {
      display: block;
    }
  }
</style>
