<script setup lang="ts">
  import { withCacheBust } from '@/composables/cacheBustedAsset'
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'hero'>
  }>()
</script>

<template>
  <section id="hero" class="hero-section" aria-labelledby="hero-title">
    <img class="hero-section__media" :src="withCacheBust(data.image)" alt="" aria-hidden="true" />
    <div class="hero-section__shade" aria-hidden="true"></div>
    <div class="hero-section__inner shell-container">
      <div class="hero-section__copy">
        <p v-if="data.eyebrow" class="shell-eyebrow">{{ data.eyebrow }}</p>
        <p v-if="data.vision" class="hero-section__vision">{{ data.vision }}</p>
        <h1 id="hero-title" class="hero-section__title">
          {{ data.title }}
          <span>{{ data.titleAccent }}</span>
        </h1>
        <p class="hero-section__body">{{ data.body }}</p>
        <div v-if="'pathways' in data && data.pathways?.length" class="hero-section__pathways" aria-label="Choose your escape pathway">
          <a v-for="pathway in data.pathways" :key="pathway.href" class="hero-section__pathway" :href="pathway.href">
            <span>{{ pathway.title }}</span>
            <p>{{ pathway.body }}</p>
            <strong>{{ pathway.cta }}</strong>
          </a>
        </div>
        <ul class="hero-section__facts" aria-label="Coastal Preferred Escapes highlights">
          <li v-for="fact in data.facts" :key="fact">
            <span aria-hidden="true"></span>
            {{ fact }}
          </li>
        </ul>
        <div v-if="!('pathways' in data && data.pathways?.length)" class="hero-section__actions" aria-label="Hero actions">
          <a class="shell-button shell-button--primary" :href="data.primaryCta.href">
            {{ data.primaryCta.label }}
          </a>
          <a class="shell-button shell-button--secondary" :href="data.secondaryCta.href">
            {{ data.secondaryCta.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .hero-section {
    position: relative;
    isolation: isolate;
    min-height: calc(100vh - var(--usp-strip-height, 10.5rem));
    display: grid;
    align-items: end;
    padding-block: clamp(7rem, 12vw, 10rem) clamp(3rem, 6vw, 5rem);
    overflow: hidden;
    background: var(--shell-color-canvas);
    color: var(--shell-color-ink);
  }

  .hero-section__media,
  .hero-section__shade {
    position: absolute;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
  }

  .hero-section__media {
    object-fit: cover;
    object-position: center;
  }

  .hero-section__shade {
    z-index: -1;
    background:
      linear-gradient(0deg, rgb(10 42 94 / 0.24), rgb(10 42 94 / 0.08) 16%, transparent 38%),
      linear-gradient(
        90deg,
        rgb(255 255 255 / 0.84),
        rgb(255 255 255 / 0.52) 48%,
        rgb(255 255 255 / 0.16)
      );
  }

  .hero-section__inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: end;
    gap: clamp(2rem, 6vw, 5rem);
  }

  .hero-section__title {
    max-width: 12ch;
    margin: var(--shell-space-4) 0 0;
    font-family: var(--shell-font-serif);
    font-size: clamp(3.2rem, 7.6vw, 6.6rem);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 0.94;
  }

  .hero-section__title span {
    display: block;
    color: var(--shell-color-accent);
    font-family: var(--shell-font-script);
    font-style: italic;
    font-weight: 400;
    text-transform: none;
  }

  .hero-section__body {
    max-width: 43rem;
    margin: var(--shell-space-6) 0 0;
    color: var(--shell-color-muted);
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    font-weight: 500;
    line-height: 1.65;
  }

  .hero-section__vision {
    margin: var(--shell-space-3) 0 0;
    color: var(--shell-color-accent);
    font-weight: 650;
    font-size: 1.125rem;
    letter-spacing: 0.01em;
  }

  .hero-section__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--shell-space-3);
    margin-top: var(--shell-space-8);
  }

  .hero-section__pathways {
    display: grid;
    gap: 0.85rem;
    margin-top: var(--shell-space-8);
  }

  .hero-section__pathway {
    display: grid;
    gap: 0.45rem;
    border: 1px solid rgb(255 255 255 / 0.72);
    border-radius: var(--shell-radius-md);
    background: rgb(255 255 255 / 0.88);
    padding: 1rem;
    box-shadow: 0 1rem 2.25rem rgb(10 42 94 / 0.14);
    backdrop-filter: blur(10px);
    transition:
      background-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;
  }

  .hero-section__pathway:hover {
    background: white;
    box-shadow: 0 1.2rem 2.6rem rgb(10 42 94 / 0.18);
    transform: translateY(-2px);
  }

  .hero-section__pathway span {
    color: var(--shell-color-ink);
    font-size: clamp(1rem, 1.8vw, 1.25rem);
    font-weight: 900;
    line-height: 1.12;
  }

  .hero-section__pathway p {
    margin: 0;
    color: var(--shell-color-muted) !important;
    font-size: 0.9rem !important;
    line-height: 1.45 !important;
  }

  .hero-section__pathway strong {
    color: var(--shell-color-accent);
    font-size: 0.78rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
  }

  .hero-section__actions .shell-button {
    min-height: 3rem;
    border-radius: 999px;
    padding-inline: 1.5rem;
  }

  .hero-section__actions .shell-button--secondary {
    border: 2px solid var(--shell-color-ink);
    background: transparent;
  }

  .hero-section__actions .shell-button--secondary:hover {
    background: var(--shell-color-ink);
    color: white;
  }

  .hero-section__facts {
    display: grid;
    gap: var(--shell-space-4);
    margin: var(--shell-space-6) 0 0;
    padding: 0;
    list-style: none;
    color: var(--shell-color-ink);
    font-size: 1rem;
    font-weight: 700;
  }

  .hero-section__copy {
    max-width: 100%;
  }

  .hero-section__facts li {
    display: flex;
    align-items: center;
    gap: var(--shell-space-3);
  }

  .hero-section__facts span {
    display: grid;
    flex: 0 0 auto;
    width: 1.5rem;
    height: 1.5rem;
    place-items: center;
    border-radius: 999px;
    background: var(--shell-color-accent-soft);
    color: var(--shell-color-accent);
  }

  .hero-section__facts span::after {
    content: '';
    width: 0.45rem;
    height: 0.75rem;
    border: solid currentColor;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-1px, -1px);
  }

  @media (min-width: 768px) {
    .hero-section__copy {
      max-width: 42rem;
    }

    .hero-section__facts {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .hero-section__pathways {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 52rem;
    }
  }

  @media (min-width: 1200px) {
    .hero-section {
      min-height: calc(100vh - 4rem);
    }

    .hero-section__copy {
      max-width: 46rem;
    }

    .hero-section__shade {
      background:
        linear-gradient(0deg, rgb(10 42 94 / 0.3), rgb(10 42 94 / 0.1) 18%, transparent 42%),
        linear-gradient(90deg, rgb(255 255 255 / 0.76), rgb(255 255 255 / 0.44), rgb(255 255 255 / 0.08));
    }
  }
</style>
