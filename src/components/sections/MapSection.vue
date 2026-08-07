<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import { withCacheBust } from '@/composables/cacheBustedAsset'
  import cabanaMioAssets from 'virtual:cabana-mio-assets'
  import type { ResortImage, SectionData } from '@/content/siteText'

  const props = defineProps<{
    data: SectionData<'map'>
  }>()

  const activeHeroIndex = ref(0)
  const activeFeatureIndex = ref(0)
  const activeBeachIndex = ref(0)
  const activeLivingIndex = ref(0)
  const activeGallerySlot = ref(0)

  const imageMetadata = computed(() => {
    return new Map(
      [props.data.primaryImage, ...props.data.images].map((image) => [image.src, image]),
    )
  })
  const toTitleCase = (value: string) =>
    value
      .replace(/\.[^.]+$/, '')
      .replace(/^(copy-of-)?cabana-mio-logo-?/i, 'Cabana Mio Logo ')
      .replace(/-/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  const toResortImage = (src: string): ResortImage => {
    const existingImage = imageMetadata.value.get(src)
    const label = existingImage?.label ?? toTitleCase(src.split('/').pop() ?? 'Cabana Mio')
    const featured =
      existingImage && 'featured' in existingImage && typeof existingImage.featured === 'boolean'
        ? existingImage.featured
        : undefined

    return {
      src,
      alt: existingImage?.alt ?? `${label} at Cabana Mio`,
      label,
      featured,
    }
  }
  const imagesByPrefix = (prefixes: string[]) => {
    const normalizedPrefixes = prefixes.map((prefix) => prefix.toLowerCase())

    return cabanaMioAssets
      .filter((src) => {
        const filename = src.split('/').pop()?.toLowerCase() ?? ''
        return normalizedPrefixes.some((prefix) => filename.startsWith(prefix))
      })
      .map(toResortImage)
  }

  const droneImages = computed(() => imagesByPrefix(['dron']))
  const featureImages = computed(() => imagesByPrefix(['rooms']))
  const activeFeatureImage = computed(
    () => featureImages.value[activeFeatureIndex.value] ?? featureImages.value[0],
  )
  const beachImages = computed(() => imagesByPrefix(['beach']))
  const activeBeachImage = computed(
    () => beachImages.value[activeBeachIndex.value] ?? beachImages.value[0],
  )
  const livingImages = computed(() =>
    imagesByPrefix(['dining', 'kirchen', 'living', 'room-living']),
  )
  const activeLivingImage = computed(
    () => livingImages.value[activeLivingIndex.value] ?? livingImages.value[0],
  )

  let cycleTimer: number | undefined

  onMounted(() => {
    cycleTimer = window.setInterval(() => {
      if (activeGallerySlot.value === 0 && droneImages.value.length) {
        activeHeroIndex.value = (activeHeroIndex.value + 1) % droneImages.value.length
      } else if (activeGallerySlot.value === 1 && featureImages.value.length) {
        activeFeatureIndex.value = (activeFeatureIndex.value + 1) % featureImages.value.length
      } else if (activeGallerySlot.value === 2 && beachImages.value.length) {
        activeBeachIndex.value = (activeBeachIndex.value + 1) % beachImages.value.length
      } else if (livingImages.value.length) {
        activeLivingIndex.value = (activeLivingIndex.value + 1) % livingImages.value.length
      }

      activeGallerySlot.value = (activeGallerySlot.value + 1) % 4
    }, 4500)
  })

  onBeforeUnmount(() => {
    window.clearInterval(cycleTimer)
  })
</script>

<template>
  <section id="cabana-mio" class="cabana-section" aria-labelledby="cabana-title">
    <div class="cabana-section__inner shell-container">
      <div class="cabana-section__panel">
        <div class="cabana-section__intro">
          <div>
            <p class="shell-eyebrow">{{ data.eyebrow }}</p>
            <h2 id="cabana-title" class="shell-heading">{{ data.title }}</h2>
            <p>{{ data.body }}</p>
            <p v-if="data.address" class="cabana-section__address">{{ data.address }}</p>
            <a
              class="cabana-section__link"
              href="https://www.cabanamio.co.za"
              target="_blank"
              rel="noreferrer"
            >
              Visit Cabana Mio
            </a>
          </div>
        </div>

        <figure class="cabana-section__hero">
          <img
            v-for="(image, index) in droneImages"
            :key="image.src"
            :src="withCacheBust(image.src)"
            :alt="index === activeHeroIndex ? image.alt : ''"
            :aria-hidden="index === activeHeroIndex ? undefined : 'true'"
            :class="{ 'cabana-section__hero-image--active': index === activeHeroIndex }"
            class="cabana-section__hero-image"
            loading="eager"
            decoding="async"
          />
          <div class="cabana-section__hero-logo">
            <img :src="withCacheBust(data.logo)" alt="Cabana Mio" />
          </div>
        </figure>

        <figure class="cabana-section__tile cabana-section__tile--feature">
          <img
            v-for="(image, index) in featureImages"
            :key="image.src"
            :src="withCacheBust(image.src)"
            :alt="index === activeFeatureIndex ? image.alt : ''"
            :aria-hidden="index === activeFeatureIndex ? undefined : 'true'"
            :class="{
              'cabana-section__cycle-image--active': image.src === activeFeatureImage?.src,
            }"
            class="cabana-section__cycle-image"
            loading="eager"
            decoding="async"
          />
        </figure>

        <figure class="cabana-section__tile cabana-section__tile--bottom-1">
          <img
            v-for="(image, index) in beachImages"
            :key="image.src"
            :src="withCacheBust(image.src)"
            :alt="index === activeBeachIndex ? image.alt : ''"
            :aria-hidden="index === activeBeachIndex ? undefined : 'true'"
            :class="{
              'cabana-section__cycle-image--active': image.src === activeBeachImage?.src,
            }"
            class="cabana-section__cycle-image"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <figure class="cabana-section__tile cabana-section__tile--bottom-2">
          <img
            v-for="(image, index) in livingImages"
            :key="image.src"
            :src="withCacheBust(image.src)"
            :alt="index === activeLivingIndex ? image.alt : ''"
            :aria-hidden="index === activeLivingIndex ? undefined : 'true'"
            :class="{
              'cabana-section__cycle-image--active': image.src === activeLivingImage?.src,
            }"
            class="cabana-section__cycle-image"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div class="cabana-section__columns-card shell-card">
          <div class="cabana-section__columns">
            <div
              v-for="group in data.featureGroups"
              :key="group.title"
              class="cabana-section__column"
            >
              <h3 class="cabana-section__column-title">{{ group.title }}</h3>
              <ul class="cabana-section__column-list">
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .cabana-section {
    padding-block: clamp(4rem, 8vw, 7rem);
    background:
      radial-gradient(circle at top, rgb(14 107 110 / 0.08), transparent 28%),
      linear-gradient(180deg, var(--shell-color-canvas), rgb(255 255 255 / 0.94) 18%),
      var(--shell-color-surface);
  }

  .cabana-section__inner {
    display: grid;
    width: min(100% - 2rem, 96rem);
    margin-inline: auto;
    gap: var(--shell-space-8);
  }

  .cabana-section__intro {
    display: grid;
    grid-area: intro;
    align-items: center;
    min-height: 336px;
    padding: var(--cabana-intro-inset, clamp(2rem, 4vw, 3.5rem));
  }

  .cabana-section__intro h2 {
    max-width: 15ch;
    margin: var(--shell-space-3) 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(2.25rem, 4.4vw, 3.8rem);
    font-weight: 800;
    letter-spacing: 0;
    line-height: 0.92;
    text-transform: uppercase;
  }

  .cabana-section__intro p:not(.shell-eyebrow) {
    max-width: 43rem;
    margin: var(--shell-space-5) 0 0;
    color: var(--shell-color-muted);
    font-size: 1rem;
    line-height: 1.6;
  }

  .cabana-section__address {
    margin-top: var(--shell-space-4);
    font-weight: 700;
    color: var(--shell-color-ink);
  }

  .cabana-section__link {
    display: inline-flex;
    min-height: 3rem;
    align-items: center;
    justify-content: center;
    margin-top: var(--shell-space-6);
    border-radius: var(--shell-radius-sm);
    background: var(--shell-color-ink);
    color: white;
    padding: 0.85rem 1.15rem;
    font-size: 0.85rem;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
  }

  .cabana-section__panel {
    --cabana-card-gap: clamp(1.1rem, 2vw, 1.6rem);
    --cabana-intro-inset: clamp(2rem, 4vw, 3.5rem);

    display: grid;
    grid-template-areas:
      'intro'
      'hero'
      'feature'
      'bottom1'
      'bottom2'
      'columns';
    gap: var(--cabana-card-gap);
    border: 1px solid color-mix(in srgb, var(--shell-color-ink) 8%, white);
    border-radius: 0.5rem;
    background: rgb(255 255 255 / 0.94);
    padding: var(--shell-space-3);
    box-shadow:
      0 1px 0 rgb(255 255 255 / 0.8) inset,
      0 1.5rem 3rem rgb(10 42 94 / 0.1),
      0 2.75rem 5rem rgb(10 42 94 / 0.08);
    backdrop-filter: saturate(120%);
  }

  .cabana-section__hero,
  .cabana-section__tile {
    position: relative;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 0.56);
    border-radius: 0.375rem;
    background: var(--shell-color-surface-muted);
  }

  .cabana-section__hero {
    grid-area: hero;
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16 / 9;
    box-shadow: none;
  }

  .cabana-section__tile--feature {
    grid-area: feature;
  }

  .cabana-section__tile--bottom-1 {
    grid-area: bottom1;
  }

  .cabana-section__tile--bottom-2 {
    grid-area: bottom2;
  }

  .cabana-section__tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cabana-section__hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    max-width: none;
    height: 100%;
    opacity: 0;
    object-fit: cover;
    transition: opacity 800ms ease;
  }

  .cabana-section__hero-image--active {
    opacity: 1;
  }

  .cabana-section__hero-logo {
    position: absolute;
    top: var(--shell-space-4);
    left: var(--shell-space-4);
    display: grid;
    width: min(11rem, 58vw);
    min-height: 5rem;
    place-items: center;
    border: 1px solid rgb(255 255 255 / 0.75);
    border-radius: 0.375rem;
    background: rgb(255 255 255 / 0.93);
    padding: var(--shell-space-3);
    box-shadow: 0 0.75rem 2rem rgb(10 42 94 / 0.18);
  }

  .cabana-section__hero-logo img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .cabana-section__tile {
    aspect-ratio: 16 / 9;
    box-shadow: 0 0.85rem 1.75rem rgb(10 42 94 / 0.08);
  }

  .cabana-section__cycle-image {
    position: absolute;
    inset: 0;
    width: 100%;
    max-width: none;
    height: 100%;
    opacity: 0;
    object-fit: cover;
    transition: opacity 1000ms ease;
  }

  .cabana-section__cycle-image--active {
    opacity: 1;
  }

  .cabana-section__columns-card {
    grid-area: columns;
    padding: var(--shell-space-8);
    border: 1px solid color-mix(in srgb, var(--shell-color-hairline) 82%, white);
    border-radius: 5px;
    background: rgb(255 255 255 / 0.98);
  }

  .cabana-section__columns {
    display: grid;
    gap: var(--shell-space-8);
    margin-top: 0;
  }

  .cabana-section__column-title {
    margin: 0 0 var(--shell-space-4);
    font-size: 1.125rem;
    font-weight: 800;
    color: var(--shell-color-ink);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .cabana-section__column-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: var(--shell-space-3);
  }

  .cabana-section__column-list li {
    color: var(--shell-color-muted);
    font-size: 1rem;
    line-height: 1.55;
  }

  @media (min-width: 560px) {
    .cabana-section__columns {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .cabana-section__panel {
      grid-template-columns: minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr);
      grid-template-rows: minmax(336px, auto) 336px;
      grid-template-areas:
        'intro feature feature'
        'hero bottom1 bottom2'
        'columns columns columns';
      min-height: 0;
    }

    .cabana-section__hero {
      aspect-ratio: auto;
      height: 100%;
      min-height: 336px;
      margin-left: var(--cabana-intro-inset);
      width: calc(100% - var(--cabana-intro-inset));
    }

    .cabana-section__tile {
      aspect-ratio: auto;
    }

    .cabana-section__columns {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (min-width: 560px) {
    .cabana-section__hero-logo {
      width: min(13rem, 32vw);
    }
  }
</style>
