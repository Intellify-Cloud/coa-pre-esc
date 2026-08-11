<template>
  <section id="location" class="long-stay-location shell-section" aria-labelledby="location-title">
    <div class="long-stay-location__inner shell-container">
      <div class="long-stay-location__copy">
        <p class="shell-eyebrow">Location</p>
        <h2 id="location-title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>
      <figure class="long-stay-location__image">
        <img
          :src="withCacheBust(data.image)"
          alt="Aerial view of Cabana Mio and the coastline"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Amanzimtoti Coastline</figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { LongStayData } from '@/content/siteText'
  import { withCacheBust } from '@/composables/cacheBustedAsset'

  defineProps<{
    data: LongStayData['location']
  }>()
</script>
