<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'why-families-join-alt'>
  }>()
</script>

<template>
  <section
    id="about"
    class="why-alt-section shell-section"
    aria-labelledby="why-alt-title"
  >
    <video class="why-alt-section__video" autoplay muted loop playsinline aria-hidden="true">
      <source src="/videos/beach.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="why-alt-section__overlay" aria-hidden="true"></div>

    <div class="why-alt-section__inner shell-container">
      <div class="why-alt-section__copy">
        <div>
          <p class="shell-eyebrow">{{ data.eyebrow }}</p>
          <h2 id="why-alt-title" class="shell-heading">{{ data.title }}</h2>
        </div>
        <p>{{ data.body }}</p>
      </div>

      <ul class="why-alt-section__cards" aria-label="Membership highlights alternate view">
        <li v-for="item in data.items" :key="item.title">
          <span aria-hidden="true">{{ item.title.slice(0, 1) }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
  .why-alt-section {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    border-top: 1px solid color-mix(in srgb, var(--shell-color-hairline) 64%, transparent);
    background: var(--shell-color-surface-muted);
  }

  .why-alt-section__video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .why-alt-section__overlay {
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
      linear-gradient(135deg, rgb(7 35 42 / 0.88), rgb(14 107 110 / 0.72)),
      radial-gradient(circle at 20% 20%, rgb(255 255 255 / 0.14), transparent 35%);
  }

  .why-alt-section__inner {
    position: relative;
    z-index: 1;
    display: grid;
    gap: clamp(2rem, 6vw, 5rem);
    align-items: start;
  }

  .why-alt-section__copy {
    display: grid;
    gap: var(--shell-space-8);
    align-content: start;
  }

  .why-alt-section__copy .shell-eyebrow {
    color: white !important;
  }

  .why-alt-section__copy p:not(.shell-eyebrow) {
    max-width: 42rem;
    margin: 0;
    color: rgb(241 248 247 / 0.95) !important;
    font-size: 1.125rem;
    line-height: 1.7;
  }

  .why-alt-section__copy h2 {
    color: white;
  }

  .why-alt-section__cards {
    display: grid;
    gap: var(--shell-space-4);
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 15px;
    line-height: 23px;
  }

  .why-alt-section__cards li {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
    gap: var(--shell-space-4);
    min-height: 6.75rem;
    border: 1px solid rgb(255 255 255 / 0.24);
    border-radius: 8px;
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.24), rgb(255 255 255 / 0.12)),
      rgb(255 255 255 / 0.08);
    padding: 1.2rem 1.25rem;
    line-height: 1.35;
    box-shadow:
      inset 0 1px 0 rgb(255 255 255 / 0.18),
      0 1.1rem 2.5rem rgb(4 22 26 / 0.2);
    backdrop-filter: blur(16px) saturate(140%);
    -webkit-backdrop-filter: blur(16px) saturate(140%);
  }

  .why-alt-section__cards h3 {
    margin: 0;
    color: white;
    font-family:
      Montserrat, Avenir, Gotham, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800 !important;
    line-height: 1.4;
  }

  .why-alt-section__cards p {
    margin: var(--shell-space-2) 0 0;
    color: rgb(240 248 247 / 0.9) !important;
    font-size: 15px !important;
    line-height: 1.55;
  }

  .why-alt-section__cards span {
    display: none;
  }

  @media (min-width: 1200px) {
    .why-alt-section__inner {
      grid-template-columns: minmax(0, 44fr) minmax(0, 56fr);
    }
  }
</style>
