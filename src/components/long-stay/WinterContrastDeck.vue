<template>
  <section id="winter-contrast" class="long-stay-contrast shell-section" aria-labelledby="winter-contrast-title">
    <div class="long-stay-contrast__inner shell-container">
      <div class="long-stay-contrast__copy">
        <p class="shell-eyebrow">The Escape</p>
        <h2 id="winter-contrast-title">{{ data.winterContrast.title }}</h2>
        <p>{{ data.winterContrast.body }}</p>
      </div>
      <div class="long-stay-contrast__panel" aria-label="Approximate winter temperature comparison">
        <div
          v-for="city in data.temperatureComparison"
          :key="city.name"
          class="long-stay-contrast__city"
          :class="{ 'long-stay-contrast__city--warm': city.featured }"
        >
          <span>{{ city.name }}</span>
          <strong>{{ city.temperature }}</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { LongStayData } from '@/content/siteText'

  defineProps<{
    data: LongStayData
  }>()
</script>
