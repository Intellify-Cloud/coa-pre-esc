<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'resort-video'>
  }>()
</script>

<template>
  <section class="resort-video-section" aria-labelledby="resort-video-title">
    <div class="shell-container resort-video-section__inner">
      <div class="resort-video-section__copy">
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="resort-video-title" class="shell-heading">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>

      <div class="resort-video-section__frame">
        <iframe
          :src="data.video.embedUrl"
          :title="data.video.title"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .resort-video-section {
    padding-block: clamp(3.5rem, 7vw, 6rem);
    background: var(--shell-color-surface);
  }

  .resort-video-section__inner {
    display: grid;
    gap: clamp(1.5rem, 4vw, 2.5rem);
  }

  .resort-video-section__copy {
    display: grid;
    justify-items: center;
    max-width: 44rem;
    margin-inline: auto;
    text-align: center;
  }

  .resort-video-section__copy h2 {
    max-width: 22ch;
    margin: var(--shell-space-3) 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(2.1rem, 4.5vw, 4rem);
    font-weight: 800;
    letter-spacing: 0;
    line-height: 0.98;
    text-transform: uppercase;
  }

  .resort-video-section__copy p:not(.shell-eyebrow) {
    margin: var(--shell-space-4) 0 0;
    color: var(--shell-color-muted);
    font-size: clamp(1rem, 1.7vw, 1.15rem);
    line-height: 1.65;
  }

  .resort-video-section__frame {
    position: relative;
    overflow: hidden;
    width: min(100%, 64rem);
    margin-inline: auto;
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-ink);
    box-shadow: 0 1.5rem 3.5rem rgb(10 42 94 / 0.15);
    aspect-ratio: 16 / 9;
  }

  .resort-video-section__frame iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
