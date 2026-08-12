<template>
  <section id="pricing" class="long-stay-pricing shell-section" aria-labelledby="pricing-title">
    <div class="long-stay-pricing__inner shell-container">
      <div class="long-stay-pricing__header">
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="pricing-title">{{ data.title }}</h2>
        <p>{{ data.note }}</p>
      </div>

      <div class="long-stay-pricing__layout">
        <article
          v-if="featuredRow"
          class="long-stay-pricing__feature"
          aria-label="Featured 90-day winter escape package"
        >
          <span class="long-stay-pricing__badge">Best long-stay value</span>
          <h3>{{ featuredRow.duration }} Winter Escape</h3>
          <strong class="long-stay-pricing__feature-price">{{ featuredRow.price }}</strong>
          <p class="long-stay-pricing__feature-note">
            Spacious 3-bedroom duplex for the full stay, with Wi-Fi and unit facilities included.
          </p>
          <a class="shell-button shell-button--primary" href="#enquire">Check 90-Day Availability</a>
        </article>

        <div class="long-stay-pricing__options" role="list" aria-label="Other long-stay options">
          <article
            v-for="row in secondaryRows"
            :key="row.duration"
            class="long-stay-pricing__option"
            role="listitem"
          >
            <span class="long-stay-pricing__option-duration">{{ row.duration }}</span>
            <strong>{{ row.price }}</strong>
            <span class="long-stay-pricing__option-caption">Subject to availability</span>
          </article>
        </div>
      </div>

      <p class="long-stay-pricing__fineprint">
        Final pricing may vary by arrival date, season and exchange rate.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { LongStayData } from '@/content/siteText'

  const props = defineProps<{
    data: LongStayData['pricing']
  }>()

  const featuredRow = computed(() => props.data.rows.find((row) => row.featured))
  const secondaryRows = computed(() => props.data.rows.filter((row) => !row.featured))
</script>
