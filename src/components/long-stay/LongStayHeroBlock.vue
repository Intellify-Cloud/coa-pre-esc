<template>
  <section id="escape" class="long-stay-hero shell-section" aria-labelledby="long-stay-title">
    <img
      class="long-stay-hero__image"
      :src="withCacheBust(data.image)"
      :alt="data.imageAlt"
      aria-hidden="true"
    />
    <div class="long-stay-hero__shade" aria-hidden="true"></div>
    <div class="long-stay-hero__inner shell-container">
      <div class="long-stay-hero__content">
        <p v-if="data.eyebrow" class="shell-eyebrow long-stay-hero__eyebrow">
          {{ data.eyebrow }}
        </p>
        <h1 id="long-stay-title" class="long-stay-hero__title">{{ data.title }}</h1>
        <div class="long-stay-hero__lead">{{ data.lead }}</div>
        <div class="long-stay-hero__highlight">{{ data.highlight }}</div>
        <div class="long-stay-hero__actions" aria-label="Primary actions">
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

<script setup lang="ts">
  import type { LongStayData } from '@/content/siteText'
  import { withCacheBust } from '@/composables/cacheBustedAsset'

  defineProps<{
    data: LongStayData
  }>()
</script>
