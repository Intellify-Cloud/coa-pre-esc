<template>
  <section id="pricing" class="long-stay-pricing shell-section" aria-labelledby="pricing-title">
    <div class="long-stay-pricing__inner shell-container">
      <div class="long-stay-pricing__header">
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="pricing-title">{{ data.title }}</h2>
        <p>{{ data.note }}</p>
      </div>
      <div class="long-stay-pricing__cards" role="list">
        <div
          v-for="row in data.rows"
          :key="row.duration"
          class="long-stay-pricing__card"
          :class="{ 'long-stay-pricing__card--featured': row.featured }"
          role="listitem"
        >
          <p class="long-stay-pricing__duration">{{ row.duration }}</p>
          <p class="long-stay-pricing__price">{{ row.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { LongStayData } from '@/content/siteText'

  defineProps<{
    data: LongStayData['pricing']
  }>()
</script>
