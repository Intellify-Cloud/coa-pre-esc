<template>
  <section id="experience" class="long-stay-experience shell-section" aria-labelledby="experience-title">
    <div class="long-stay-experience__inner shell-container">
      <div class="long-stay-experience__intro">
        <p class="shell-eyebrow">South Africa Escapes</p>
        <h2 id="experience-title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>

      <div class="long-stay-experience__tabs" role="tablist" aria-label="Long-stay living pillars">
        <button
          v-for="(pillar, index) in data.pillars"
          :key="pillar.eyebrow"
          class="long-stay-experience__tab"
          :class="{ 'long-stay-experience__tab--active': index === activeIndex }"
          type="button"
          role="tab"
          :aria-selected="index === activeIndex"
          :aria-controls="`experience-panel-${index}`"
          @click="activeIndex = index"
        >
          {{ pillar.eyebrow }}
        </button>
      </div>

      <article
        :id="`experience-panel-${activeIndex}`"
        class="long-stay-experience__feature"
        role="tabpanel"
      >
        <figure class="long-stay-experience__image">
          <img
            :src="withCacheBust(activePillar.image.src)"
            :alt="activePillar.image.alt"
            loading="lazy"
            decoding="async"
          />
          <figcaption>{{ activePillar.image.label }}</figcaption>
        </figure>

        <div class="long-stay-experience__copy">
          <span class="long-stay-experience__pillar-label">{{ activePillar.eyebrow }}</span>
          <h3>{{ activePillar.title }}</h3>
          <p>{{ activePillar.body }}</p>
          <ul class="long-stay-experience__list" aria-label="Pillar highlights">
            <li v-for="item in activePillar.items" :key="item">{{ item }}</li>
          </ul>
          <a v-if="activePillar.href" class="long-stay-experience__link" :href="activePillar.href">
            Explore the full golf deck
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import type { LongStayData } from '@/content/siteText'
  import { withCacheBust } from '@/composables/cacheBustedAsset'

  type ExperiencePillar = LongStayData['experience']['pillars'][number]

  const props = defineProps<{
    data: LongStayData['experience']
  }>()

  const activeIndex = ref(0)
  const fallbackPillar: ExperiencePillar = {
    eyebrow: 'Beach',
    title: 'Warm Indian Ocean days.',
    body: 'Settle into coastal life from a relaxed Amanzimtoti base.',
    image: {
      src: '/cabana-mio/beach-ocean.png',
      alt: 'Warm Indian Ocean beach near Amanzimtoti',
      label: 'Beach Lifestyle',
    },
    items: ['Warm-water swimming', 'Coastal walks', 'Restaurants nearby'],
  }
  const activePillar = computed<ExperiencePillar>(
    () => props.data.pillars[activeIndex.value] ?? props.data.pillars[0] ?? fallbackPillar,
  )
</script>
