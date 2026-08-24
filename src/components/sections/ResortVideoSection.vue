<script setup lang="ts">
  import { onBeforeUnmount, ref } from 'vue'
  import type { SectionData } from '@/content/siteText'

  const props = defineProps<{
    data: SectionData<'resort-video'>
  }>()

  const videoDialog = ref<HTMLDialogElement | null>(null)
  const modalVideo = ref<HTMLVideoElement | null>(null)

  const openVideoModal = () => {
    if (!window.matchMedia('(min-width: 1200px)').matches) return

    const dialog = videoDialog.value
    if (!dialog || dialog.open) return

    dialog.showModal()
    modalVideo.value?.play().catch(() => {
      // Browsers may block autoplay until the visitor presses play.
    })
  }

  const closeVideoModal = () => {
    modalVideo.value?.pause()
    videoDialog.value?.close()
  }

  const handleDialogClick = (event: MouseEvent) => {
    if (event.target === videoDialog.value) {
      closeVideoModal()
    }
  }

  onBeforeUnmount(() => {
    modalVideo.value?.pause()
  })
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
        <video class="resort-video-section__video resort-video-section__video--mobile" controls preload="metadata" playsinline>
          <source :src="props.data.video.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          class="resort-video-section__launch"
          type="button"
          :aria-label="`Open ${data.video.title}`"
          @click="openVideoModal"
        >
          <video class="resort-video-section__video" preload="metadata" muted playsinline aria-hidden="true">
            <source :src="props.data.video.src" type="video/mp4" />
          </video>
          <span class="resort-video-section__play" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <dialog
      ref="videoDialog"
      class="resort-video-section__dialog"
      :aria-label="data.video.title"
      @click="handleDialogClick"
      @close="modalVideo?.pause()"
    >
      <button class="resort-video-section__close" type="button" aria-label="Close video" @click="closeVideoModal">
        <span aria-hidden="true"></span>
      </button>
      <video ref="modalVideo" class="resort-video-section__modal-video" controls preload="metadata" playsinline>
        <source :src="props.data.video.src" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </dialog>
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

  .resort-video-section__video,
  .resort-video-section__modal-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .resort-video-section__launch {
    display: none;
  }

  .resort-video-section__video--mobile {
    display: block;
  }

  .resort-video-section__dialog {
    position: fixed;
    inset: 0;
    width: min(100% - 2rem, 72rem);
    max-width: none;
    height: auto;
    margin: auto;
    padding: 0;
    overflow: visible;
    border: 0;
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-ink);
    box-shadow: 0 2rem 5rem rgb(0 0 0 / 0.35);
    aspect-ratio: 16 / 9;
  }

  .resort-video-section__dialog::backdrop {
    background: rgb(10 42 94 / 0.76);
    backdrop-filter: blur(6px);
  }

  .resort-video-section__modal-video {
    border-radius: inherit;
  }

  .resort-video-section__close {
    position: absolute;
    top: -1rem;
    right: -1rem;
    z-index: 2;
    display: grid;
    width: 2.75rem;
    height: 2.75rem;
    place-items: center;
    border: 0;
    border-radius: 999px;
    background: white;
    color: var(--shell-color-ink);
    cursor: pointer;
    box-shadow: 0 0.75rem 1.75rem rgb(0 0 0 / 0.24);
  }

  .resort-video-section__close span,
  .resort-video-section__close span::after {
    display: block;
    width: 1.05rem;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
    content: '';
    transform: rotate(45deg);
  }

  .resort-video-section__close span::after {
    transform: rotate(90deg);
  }

  @media (min-width: 1200px) {
    .resort-video-section__video--mobile {
      display: none;
    }

    .resort-video-section__launch {
      position: absolute;
      inset: 0;
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0;
      background: transparent;
      color: white;
      cursor: pointer;
    }

    .resort-video-section__launch::after {
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgb(10 42 94 / 0.26), rgb(10 42 94 / 0.05));
      content: '';
      transition: background-color 180ms ease;
    }

    .resort-video-section__launch:hover::after {
      background-color: rgb(10 42 94 / 0.1);
    }

    .resort-video-section__play {
      position: absolute;
      inset: 50% auto auto 50%;
      z-index: 1;
      display: grid;
      width: 5rem;
      height: 5rem;
      place-items: center;
      border-radius: 999px;
      background: rgb(255 255 255 / 0.92);
      color: var(--shell-color-accent);
      transform: translate(-50%, -50%);
      box-shadow: 0 1rem 2.5rem rgb(10 42 94 / 0.28);
    }

    .resort-video-section__play::after {
      width: 0;
      height: 0;
      margin-left: 0.25rem;
      border-block: 0.85rem solid transparent;
      border-left: 1.25rem solid currentColor;
      content: '';
    }
  }
</style>
