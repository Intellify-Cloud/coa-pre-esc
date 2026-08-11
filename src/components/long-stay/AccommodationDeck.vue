<template>
  <section id="accommodation" class="long-stay-accommodation shell-section" aria-labelledby="accommodation-title">
    <div class="long-stay-accommodation__inner shell-container">
      <div class="long-stay-accommodation__copy">
        <p class="shell-eyebrow">Accommodation</p>
        <h2 id="accommodation-title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>
      <div class="long-stay-accommodation__gallery" aria-label="Cabana Mio accommodation images">
        <figure
          v-for="image in data.images"
          :key="image.src"
          class="long-stay-accommodation__image"
        >
          <img :src="withCacheBust(image.src)" :alt="image.alt" loading="lazy" decoding="async" />
          <figcaption>{{ image.label }}</figcaption>
        </figure>
      </div>
      <ul class="long-stay-accommodation__features" aria-label="Accommodation features">
        <li v-for="feature in data.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { LongStayData } from '@/content/siteText'
  import { withCacheBust } from '@/composables/cacheBustedAsset'

  defineProps<{
    data: LongStayData['accommodation']
  }>()
</script>
