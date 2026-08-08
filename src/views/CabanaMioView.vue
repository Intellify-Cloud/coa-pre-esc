<template>
  <NavBar :data="siteText['nav-bar']" />

  <main id="main-content">
    <section class="cabana-page shell-section" aria-labelledby="cabana-page-title">
      <div class="cabana-page__inner shell-container">
        <header class="cabana-page__header">
          <p class="shell-eyebrow">{{ cabanaData.eyebrow }}</p>
          <h1 id="cabana-page-title" class="shell-heading">{{ cabanaData.title }}</h1>
          <p class="shell-lead">{{ cabanaData.body }}</p>
          <p class="cabana-page__address">{{ cabanaData.address }}</p>
        </header>

        <div class="cabana-page__hero">
          <img :src="withCacheBust(cabanaData.primaryImage.src)" :alt="cabanaData.primaryImage.alt" />
          <div class="cabana-page__logo">
            <img :src="withCacheBust(cabanaData.logo)" alt="Cabana Mio" />
          </div>
        </div>

        <section class="cabana-page__rates shell-card" aria-labelledby="cabana-rates-title">
          <div>
            <p class="shell-eyebrow">{{ cabanaData.rates.eyebrow }}</p>
            <h2 id="cabana-rates-title">{{ cabanaData.rates.title }}</h2>
            <p>{{ cabanaData.rates.note }}</p>
          </div>

          <div class="cabana-page__rate-table" role="table" aria-label="Cabana Mio seasonal rates">
            <div class="cabana-page__rate-row cabana-page__rate-row--head" role="row">
              <span role="columnheader">Season</span>
              <span role="columnheader">6-sleeper rate</span>
            </div>
            <div
              v-for="row in cabanaData.rates.rows"
              :key="row.season"
              class="cabana-page__rate-row"
              role="row"
            >
              <span role="cell">{{ row.season }}</span>
              <strong role="cell">{{ row.rate }}</strong>
            </div>
          </div>
        </section>

        <section class="cabana-page__features" aria-label="Cabana Mio accommodation details">
          <article
            v-for="group in cabanaData.featureGroups"
            :key="group.title"
            class="cabana-page__feature shell-card"
          >
            <h2>{{ group.title }}</h2>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </section>

        <section class="cabana-page__gallery" aria-label="Cabana Mio gallery">
          <figure v-for="image in galleryImages" :key="image.src">
            <img :src="withCacheBust(image.src)" :alt="image.alt" loading="lazy" decoding="async" />
            <figcaption>{{ image.label }}</figcaption>
          </figure>
        </section>

        <footer class="cabana-page__cta shell-card">
          <p>Explore the accommodation directly on the Cabana Mio website, or contact CPE about membership access and available dates.</p>
          <div>
            <a class="shell-button shell-button--primary" href="/contact">Contact Us</a>
            <a :href="cabanaData.externalCta.href" target="_blank" rel="noreferrer">
              {{ cabanaData.externalCta.label }}
            </a>
          </div>
        </footer>
      </div>
    </section>
  </main>

  <SiteFooter :data="siteText.footer" />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { siteText } from '@/content/siteText'
  import { withCacheBust } from '@/composables/cacheBustedAsset'
  import NavBar from '@/components/sections/NavBar.vue'
  import SiteFooter from '@/components/sections/SiteFooter.vue'

  const cabanaData = siteText.map
  const galleryImages = computed(() => cabanaData.images)
</script>

<style scoped>
  .cabana-page {
    padding-top: clamp(8rem, 14vw, 12rem);
    background:
      linear-gradient(180deg, rgb(14 107 110 / 0.08), transparent 54%),
      var(--shell-color-canvas);
  }

  .cabana-page__inner {
    display: grid;
    gap: clamp(2rem, 5vw, 4rem);
  }

  .cabana-page__header {
    max-width: 64rem;
  }

  .cabana-page__address {
    margin: var(--shell-space-4) 0 0;
    color: var(--shell-color-ink);
    font-weight: 850;
  }

  .cabana-page__hero {
    position: relative;
    overflow: hidden;
    border-radius: var(--shell-radius-md);
    aspect-ratio: 16 / 9;
    background: var(--shell-color-surface-muted);
    box-shadow: 0 1.15rem 2.75rem rgb(10 42 94 / 0.12);
  }

  .cabana-page__hero > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cabana-page__logo {
    position: absolute;
    top: var(--shell-space-4);
    left: var(--shell-space-4);
    display: grid;
    width: min(11rem, 58vw);
    min-height: 5rem;
    place-items: center;
    border-radius: var(--shell-radius-sm);
    background: rgb(255 255 255 / 0.94);
    padding: var(--shell-space-3);
    box-shadow: 0 0.75rem 2rem rgb(10 42 94 / 0.18);
  }

  .cabana-page__logo img {
    width: 100%;
    height: auto;
  }

  .cabana-page__rates {
    display: grid;
    gap: var(--shell-space-6);
    padding: var(--shell-space-6);
    background: white;
  }

  .cabana-page__rates h2,
  .cabana-page__feature h2 {
    margin: var(--shell-space-2) 0 0;
    color: var(--shell-color-ink);
    font-size: clamp(1.45rem, 2.4vw, 2rem);
    line-height: 1.12;
  }

  .cabana-page__rates p {
    margin: var(--shell-space-3) 0 0;
    color: var(--shell-color-muted);
    line-height: 1.6;
  }

  .cabana-page__rate-table {
    display: grid;
    overflow: hidden;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-sm);
  }

  .cabana-page__rate-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: var(--shell-space-4);
    align-items: center;
    padding: var(--shell-space-4);
    border-top: 1px solid color-mix(in srgb, var(--shell-color-hairline) 70%, transparent);
  }

  .cabana-page__rate-row:first-child {
    border-top: 0;
  }

  .cabana-page__rate-row--head {
    background: var(--shell-color-lagoon);
    color: white;
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .cabana-page__rate-row strong {
    color: var(--shell-color-ink);
    font-size: 1.05rem;
  }

  .cabana-page__features {
    display: grid;
    gap: var(--shell-space-4);
  }

  .cabana-page__feature {
    padding: var(--shell-space-5);
    background: white;
  }

  .cabana-page__feature h2 {
    margin: 0 0 var(--shell-space-4);
  }

  .cabana-page__feature ul {
    display: grid;
    gap: var(--shell-space-3);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .cabana-page__feature li {
    color: var(--shell-color-muted);
    line-height: 1.5;
  }

  .cabana-page__gallery {
    display: grid;
    gap: var(--shell-space-4);
  }

  .cabana-page__gallery figure {
    position: relative;
    overflow: hidden;
    margin: 0;
    border-radius: var(--shell-radius-sm);
    aspect-ratio: 4 / 3;
    background: var(--shell-color-surface-muted);
  }

  .cabana-page__gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cabana-page__gallery figcaption {
    position: absolute;
    left: var(--shell-space-3);
    bottom: var(--shell-space-3);
    border-radius: 999px;
    background: rgb(255 255 255 / 0.92);
    padding: 0.45rem 0.75rem;
    color: var(--shell-color-ink);
    font-size: 0.78rem;
    font-weight: 900;
  }

  .cabana-page__cta {
    display: grid;
    gap: var(--shell-space-4);
    padding: var(--shell-space-5);
    background: white;
  }

  .cabana-page__cta p {
    margin: 0;
    color: var(--shell-color-ink);
    font-weight: 800;
    line-height: 1.5;
  }

  .cabana-page__cta div {
    display: flex;
    flex-wrap: wrap;
    gap: var(--shell-space-3);
    align-items: center;
  }

  .cabana-page__cta a:not(.shell-button) {
    color: var(--shell-color-lagoon);
    font-weight: 900;
  }

  @media (min-width: 560px) {
    .cabana-page__features,
    .cabana-page__gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .cabana-page__rates,
    .cabana-page__cta {
      grid-template-columns: minmax(0, 0.85fr) minmax(22rem, 1fr);
      align-items: center;
    }
  }

  @media (min-width: 1200px) {
    .cabana-page__features {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .cabana-page__gallery {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
