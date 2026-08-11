<template>
  <section id="golf" class="long-stay-golf shell-section" aria-labelledby="golf-title">
    <div class="long-stay-golf__inner shell-container">
      <div class="long-stay-golf__copy">
        <p class="shell-eyebrow">Golf</p>
        <h2 id="golf-title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>

      <p class="long-stay-golf__note">{{ data.note }}</p>

      <div class="long-stay-golf__cards" aria-label="Nearby golf courses">
        <article
          v-for="course in visibleCourses"
          :key="course.name"
          class="long-stay-golf__card"
        >
          <img
            :src="withCacheBust(course.image.src)"
            :alt="course.image.alt"
            loading="lazy"
            decoding="async"
          />
          <div class="long-stay-golf__card-shade" aria-hidden="true"></div>
          <div class="long-stay-golf__card-content">
            <h3>{{ course.name }}</h3>
            <strong>Rating {{ course.rating }}</strong>
            <small>Drive time from Amanzimtoti: {{ course.driveTime }}</small>
            <span>{{ course.description }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import type { LongStayData } from '@/content/siteText'
  import { withCacheBust } from '@/composables/cacheBustedAsset'

  const props = defineProps<{
    data: LongStayData['golf']
  }>()

  const activeIndex = ref(0)
  let cycleTimer: number | undefined

  type GolfCourse = LongStayData['golf']['courses'][number]

  const visibleCourses = computed<GolfCourse[]>(() => {
    const courses = props.data.courses
    if (courses.length <= 3) return [...courses]

    return Array.from({ length: 3 }, (_, offset): GolfCourse => {
      const index = (activeIndex.value + offset) % courses.length
      return courses[index]!
    })
  })

  onMounted(() => {
    if (props.data.courses.length <= 3) return

    cycleTimer = window.setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % props.data.courses.length
    }, 4500)
  })

  onBeforeUnmount(() => {
    window.clearInterval(cycleTimer)
  })
</script>
