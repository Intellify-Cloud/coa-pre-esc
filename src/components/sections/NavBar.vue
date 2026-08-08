<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import { withCacheBust } from '@/composables/cacheBustedAsset'
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'nav-bar'>
  }>()

  const isScrolled = ref(false)
  const isMenuOpen = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 24
  }

  const closeMenu = () => {
    isMenuOpen.value = false
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
  <header
    class="nav-bar"
    :class="{ 'nav-bar--scrolled': isScrolled, 'nav-bar--open': isMenuOpen }"
  >
    <nav class="nav-bar__inner shell-container" aria-label="Primary">
      <a class="nav-bar__brand" href="/#hero" :aria-label="data.logoText" @click="closeMenu">
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

      <button
        class="nav-bar__menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="nav-bar__menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </nav>

    <div id="mobile-menu" class="nav-bar__mobile" :hidden="!isMenuOpen">
      <div class="nav-bar__mobile-inner shell-container">
        <a v-for="link in data.links" :key="link.href" :href="link.href" @click="closeMenu">
          {{ link.label }}
        </a>
        <a class="shell-button shell-button--primary nav-bar__mobile-cta" :href="data.cta.href" @click="closeMenu">
          {{ data.cta.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    min-height: 84px;
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

  .nav-bar--open {
    background: rgb(10 42 94 / 0.96);
    box-shadow: 0 0.75rem 2rem rgb(10 42 94 / 0.16);
    backdrop-filter: blur(12px);
  }

  .nav-bar__inner {
    display: grid;
    min-height: 84px;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: var(--shell-space-4);
    transition: min-height 700ms ease;
  }

  .nav-bar--scrolled .nav-bar__inner {
    min-height: 73px;
  }

  .nav-bar__brand {
    display: inline-flex;
    width: min(12rem, 54vw);
    align-items: center;
    transition: width 700ms ease;
  }

  .nav-bar--scrolled .nav-bar__brand {
    width: min(9rem, 48vw);
  }

  .nav-bar__brand img {
    display: block;
    width: 100%;
    height: auto;
  }

  .nav-bar__links {
    display: none;
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
    display: none;
    justify-self: end;
    border-radius: 999px;
    padding-inline: 1rem;
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

  .nav-bar__menu-button {
    display: grid;
    width: 2.75rem;
    aspect-ratio: 1;
    place-items: center;
    justify-self: end;
    border: 1px solid rgb(255 255 255 / 0.55);
    border-radius: 999px;
    background: rgb(255 255 255 / 0.92);
    color: var(--shell-color-ink);
    cursor: pointer;
  }

  .nav-bar__menu-button span {
    display: block;
  }

  .nav-bar__menu-icon {
    display: grid !important;
    width: 1.1rem;
    gap: 0.24rem;
  }

  .nav-bar__menu-icon span {
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }

  .nav-bar--open .nav-bar__menu-icon span:nth-child(1) {
    transform: translateY(0.36rem) rotate(45deg);
  }

  .nav-bar--open .nav-bar__menu-icon span:nth-child(2) {
    opacity: 0;
  }

  .nav-bar--open .nav-bar__menu-icon span:nth-child(3) {
    transform: translateY(-0.36rem) rotate(-45deg);
  }

  .nav-bar__mobile {
    border-top: 1px solid rgb(255 255 255 / 0.16);
  }

  .nav-bar__mobile-inner {
    display: grid;
    gap: var(--shell-space-2);
    padding-block: var(--shell-space-4) var(--shell-space-5);
  }

  .nav-bar__mobile a:not(.shell-button) {
    display: flex;
    min-height: 2.75rem;
    align-items: center;
    border-bottom: 1px solid rgb(255 255 255 / 0.14);
    color: white;
    font-size: 0.9rem;
    font-weight: 850;
    text-transform: uppercase;
  }

  .nav-bar__mobile-cta {
    justify-self: stretch;
    margin-top: var(--shell-space-2);
  }

  @media (min-width: 1024px) {
    .nav-bar,
    .nav-bar__inner {
      min-height: 104px;
    }

    .nav-bar__inner {
      grid-template-columns: 1fr auto 1fr;
      gap: var(--shell-space-8);
    }

    .nav-bar__links {
      display: flex;
    }

    .nav-bar__cta {
      display: inline-flex;
    }

    .nav-bar__menu-button,
    .nav-bar__mobile {
      display: none;
    }

    .nav-bar__brand {
      width: min(15rem, 42vw);
    }

    .nav-bar--scrolled .nav-bar__brand {
      width: min(10.5rem, 30vw);
    }
  }
</style>
