<template>
  <section id="experience" class="long-stay-experience shell-section" aria-labelledby="experience-title">
    <div class="long-stay-experience__inner shell-container">
      <figure class="long-stay-experience__image">
        <img :src="withCacheBust(data.image.src)" :alt="data.image.alt" loading="lazy" decoding="async" />
        <figcaption>{{ data.image.label }}</figcaption>
      </figure>
      <div class="long-stay-experience__copy">
        <p class="shell-eyebrow">Long-Stay Living</p>
        <h2 id="experience-title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
        <ul class="long-stay-experience__list" aria-label="Long-stay lifestyle moments">
          <li v-for="item in data.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { LongStayData } from '@/content/siteText'
  import { withCacheBust } from '@/composables/cacheBustedAsset'

  defineProps<{
    data: LongStayData['experience']
  }>()
</script>
