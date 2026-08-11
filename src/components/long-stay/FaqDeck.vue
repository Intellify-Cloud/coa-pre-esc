<template>
  <section id="faq" class="long-stay-faq shell-section" aria-labelledby="faq-title">
    <div class="long-stay-faq__inner shell-container">
      <div class="long-stay-faq__header">
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="faq-title">{{ data.title }}</h2>
      </div>
      <div class="long-stay-faq__items" role="region" aria-label="Frequently asked questions">
        <div v-for="(item, index) in data.items" :key="item.question" class="long-stay-faq__item">
          <button
            :id="`faq-question-${index}`"
            class="long-stay-faq__question"
            type="button"
            :aria-expanded="openFaqIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="toggleFaq(index)"
          >
            {{ item.question }}
            <span aria-hidden="true">{{ openFaqIndex === index ? '-' : '+' }}</span>
          </button>
          <div
            :id="`faq-answer-${index}`"
            class="long-stay-faq__answer"
            :hidden="openFaqIndex !== index"
            role="region"
            :aria-labelledby="`faq-question-${index}`"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { LongStayData } from '@/content/siteText'

  defineProps<{
    data: LongStayData['faq']
  }>()

  const openFaqIndex = ref<number | null>(null)

  const toggleFaq = (index: number) => {
    openFaqIndex.value = openFaqIndex.value === index ? null : index
  }
</script>
