<script setup lang="ts">
  import { defineAsyncComponent, type Component } from 'vue'
  import { siteText, type SectionName } from '@/content/siteText'
  import MapSection from '@/components/sections/MapSection.vue'
  import TeamSection from '@/components/sections/TeamSection.vue'
  import WhatsAppButton from '@/components/WhatsAppButton.vue'

  const componentMap: Record<SectionName, Component> = {
    'nav-bar': defineAsyncComponent(() => import('@/components/sections/NavBar.vue')),
    hero: defineAsyncComponent(() => import('@/components/sections/HeroSection.vue')),
    usp: defineAsyncComponent(() => import('@/components/sections/UspSection.vue')),
    'founding-family': defineAsyncComponent(
      () => import('@/components/sections/FoundingFamilySection.vue'),
    ),
    'why-families-join-alt': defineAsyncComponent(
      () => import('@/components/sections/WhyFamiliesJoinAltSection.vue'),
    ),
    steps: defineAsyncComponent(() => import('@/components/sections/StepsSection.vue')),
    map: MapSection,
    team: TeamSection,
    footer: defineAsyncComponent(() => import('@/components/sections/SiteFooter.vue')),
  }
</script>

<template>
  <main id="main-content">
    <component
      :is="componentMap[name]"
      v-for="name in siteText.sections"
      :key="name"
      :data="siteText[name]"
    />
    <WhatsAppButton />
  </main>
</template>
