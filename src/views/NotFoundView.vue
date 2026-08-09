<template>
  <section class="not-found-page shell-section" aria-labelledby="not-found-title">
    <div class="not-found-page__inner shell-container">
      <header class="not-found-page__header">
        <p class="shell-eyebrow">Page Not Found</p>
        <h1 id="not-found-title" class="shell-heading">We can’t find that page.</h1>
        <p class="shell-lead">The page you tried to open does not exist or has been moved. Use the links below to continue browsing.</p>
      </header>

      <div class="not-found-page__buttons">
        <a class="shell-button shell-button--primary" href="/">Home</a>
        <a class="shell-button shell-button--secondary" href="/contact/">Contact</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSeoHead } from '@/composables/useSeoHead'

useSeoHead({
  title: 'Page Not Found',
  description: 'This page could not be found. Return to the homepage or contact us for help.',
  path: '/404/',
})
</script>

<style scoped>
.not-found-page {
  padding-top: clamp(8rem, 14vw, 12rem);
  min-height: 100vh;
  background: var(--shell-color-canvas);
}

.not-found-page__header {
  max-width: 44rem;
  margin-bottom: 3rem;
}

.not-found-page__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.shell-button {
  text-decoration: none;
}
</style>
