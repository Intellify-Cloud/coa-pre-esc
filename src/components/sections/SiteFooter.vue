<script setup lang="ts">
  import { computed } from 'vue'
  import { siteText, type SectionData } from '@/content/siteText'
  import { useHead } from '@unhead/vue'

  const props = defineProps<{
    data: SectionData<'footer'>
  }>()

  const jsonLd = computed(() =>
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteText.site.name,
      url: siteText.site.url,
      description: siteText.site.description,
    }),
  )

  useHead({
    script: [
      {
        type: 'application/ld+json',
        textContent: jsonLd,
      },
    ],
  })
</script>

<template>
  <footer class="site-footer" aria-label="Footer">
    <div class="site-footer__inner shell-container">
      <div class="site-footer__about">
        <a class="site-footer__brand" href="/#hero" :aria-label="siteText.site.name">
          <img src="/logo/cpe-logo-bw-tp.png" alt="" />
        </a>
        <p>{{ props.data.brand }}</p>
        <p v-if="props.data.commitment" class="site-footer__commitment">
          {{ props.data.commitment }}
        </p>
      </div>

      <div class="site-footer__columns">
        <div v-for="column in props.data.columns" :key="column.title" class="site-footer__column">
          <h2>{{ column.title }}</h2>
          <a v-for="link in column.links" :key="link.href" :href="link.href">
            {{ link.label }}
          </a>
          <a class="site-footer__contact-pill" href="/contact">Contact Us</a>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom shell-container">
      <small>&copy; {{ new Date().getFullYear() }} {{ siteText.site.name }}</small>
      <div class="site-footer__legal">
        <a v-for="link in props.data.legalLinks" :key="link.href" :href="link.href">
          {{ link.label }}
        </a>
      </div>
      <a class="site-footer__credit" href="https://intellify.co.za/" target="_blank" rel="noreferrer">
        Website by Intellify
      </a>
    </div>
  </footer>
</template>

<style scoped>
  .site-footer {
    border-top: 1px solid rgb(255 255 255 / 0.12);
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.04), transparent 42%),
      var(--shell-color-lagoon);
    color: white;
    padding-block: var(--shell-space-16) var(--shell-space-8);
  }

  .site-footer__inner {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(18rem, 3fr);
    gap: var(--shell-space-12);
    align-items: start;
  }

  .site-footer__about {
    width: 100%;
  }

  .site-footer__brand {
    display: inline-flex;
    width: min(12rem, 52vw);
    align-items: center;
    color: white;
  }

  .site-footer__brand img {
    display: block;
    width: 100%;
    height: auto;
  }

  .site-footer p {
    max-width: 100%;
    margin: var(--shell-space-4) 0 0;
    color: white !important;
    font-size: 13px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 20px !important;
  }

  .site-footer__commitment {
    margin-top: var(--shell-space-5) !important;
    font-style: normal !important;
    color: white !important;
    font-weight: 400;
  }

  .site-footer__columns {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--shell-space-6);
    align-items: start;
  }

  .site-footer__column {
    display: grid;
    align-content: start;
    justify-items: center;
    gap: var(--shell-space-3);
    text-align: center;
  }

  .site-footer__column h2 {
    margin: 0;
    border-bottom: 1px solid rgb(255 255 255 / 0.28);
    padding-bottom: var(--shell-space-3);
    color: rgb(255 255 255);
    font-family:
      Montserrat, Avenir, Gotham, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    text-transform: uppercase;
  }

  .site-footer__column a,
  .site-footer__bottom {
    color: white;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
  }

  .site-footer__bottom {
    font-size: 12px;
    line-height: 18px;
  }

  .site-footer__column a:hover,
  .site-footer__bottom a:hover {
    color: white;
  }

  .site-footer__contact-pill {
    display: inline-flex;
    min-height: 2.75rem;
    align-items: center;
    justify-content: center;
    justify-self: center;
    margin-top: var(--shell-space-2);
    border: 1px solid rgb(255 255 255 / 0.9);
    border-radius: 999px;
    background: white;
    padding: 0.8rem 1.25rem;
    color: rgb(0 0 0);
    font-size: 0.875rem;
    font-weight: 800;
    line-height: 1;
    box-shadow: 0 0.75rem 2rem rgb(0 0 0 / 0.14);
  }

  .site-footer__column .site-footer__contact-pill {
    color: rgb(0 0 0);
    font-weight: 800;
  }

  .site-footer__bottom {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: center;
    gap: var(--shell-space-4);
    margin-top: var(--shell-space-12);
    padding-top: var(--shell-space-6);
    border-top: 1px solid rgb(255 255 255 / 0.16);
    color: rgb(255 255 255);
    font-family:
      Montserrat, Avenir, Gotham, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
  }

  .site-footer__bottom small,
  .site-footer__bottom a {
    color: rgb(255 255 255);
    font: inherit;
  }

  .site-footer__legal {
    display: flex;
    justify-content: center;
  }

  .site-footer__credit {
    justify-self: end;
  }

  @media (max-width: 759px) {
    .site-footer__inner,
    .site-footer__columns {
      grid-template-columns: 1fr;
    }

    .site-footer__bottom {
      grid-template-columns: 1fr;
      justify-items: start;
    }

    .site-footer__legal {
      justify-content: flex-start;
    }

    .site-footer__credit {
      justify-self: start;
    }
  }
</style>
