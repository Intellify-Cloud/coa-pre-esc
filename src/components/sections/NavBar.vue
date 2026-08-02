<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import { withCacheBust } from '@/composables/cacheBustedAsset'
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'nav-bar'>
  }>()

  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 24
  }

  onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <header class="nav-bar" :class="{ 'nav-bar--scrolled': isScrolled }">
    <nav class="nav-bar__inner shell-container" aria-label="Primary">
      <a class="nav-bar__brand" href="/#hero" :aria-label="data.logoText">
        <img :src="withCacheBust(isScrolled ? data.scrolledLogoImage : data.logoImage)" alt="" />
      </a>

      <div class="nav-bar__links" aria-label="Primary links">
        <a v-for="link in data.links" :key="link.href" :href="link.href">
          {{ link.label }}
        </a>
      </div>

      <a class="shell-button shell-button--primary nav-bar__cta" :href="data.cta.href">
        {{ data.cta.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    min-height: 104px;
    background: transparent;
    transition:
      min-height 700ms ease,
      background-color 700ms ease,
      box-shadow 700ms ease;
  }

  .nav-bar--scrolled {
    min-height: 73px;
    background: rgb(10 42 94 / 0.92);
    box-shadow: 0 0.75rem 2rem rgb(10 42 94 / 0.16);
    backdrop-filter: blur(12px);
  }

  .nav-bar__inner {
    display: grid;
    min-height: 104px;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: var(--shell-space-8);
    transition: min-height 700ms ease;
  }

  .nav-bar--scrolled .nav-bar__inner {
    min-height: 73px;
  }

  .nav-bar__brand {
    display: inline-flex;
    width: min(15rem, 42vw);
    align-items: center;
    transition: width 700ms ease;
  }

  .nav-bar--scrolled .nav-bar__brand {
    width: min(10.5rem, 30vw);
  }

  .nav-bar__brand img {
    display: block;
    width: 100%;
    height: auto;
  }

  .nav-bar__links {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 2vw, var(--shell-space-8));
    color: var(--shell-color-ink);
    font-size: 0.8125rem;
    font-weight: 800;
    text-transform: uppercase;
    transition: color 700ms ease;
  }

  .nav-bar--scrolled .nav-bar__links {
    color: white;
  }

  .nav-bar__links a:hover {
    color: var(--shell-color-accent);
  }

  .nav-bar__cta {
    justify-self: end;
    border-radius: 999px;
    padding-inline: 1.35rem;
    text-transform: uppercase;
    font-size: 0.8125rem;
    transition:
      background-color 700ms ease,
      color 700ms ease,
      border-color 700ms ease,
      min-height 700ms ease;
  }

  .nav-bar--scrolled .nav-bar__cta {
    min-height: 2.25rem;
    border: 1px solid rgb(255 255 255 / 0.7);
    background: transparent;
    color: white;
  }

  @media (min-width: 768px) {
    .nav-bar,
    .nav-bar__inner {
      min-height: 104px;
    }

    .nav-bar__inner {
      grid-template-columns: 1fr auto 1fr;
    }

    .nav-bar__links {
      display: flex;
    }

    .nav-bar__brand {
      width: min(15rem, 42vw);
    }

    .nav-bar--scrolled .nav-bar__brand {
      width: min(10.5rem, 30vw);
    }
  }
</style>
