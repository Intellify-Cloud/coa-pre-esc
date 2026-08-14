<template>
  <NavBar :data="siteText['nav-bar']" />

  <main id="main-content">
    <section class="about-page shell-section" aria-labelledby="about-page-title">
      <div class="about-page__inner shell-container">
        <header class="about-page__header">
          <p class="shell-eyebrow">About CPE</p>
          <h1 id="about-page-title" class="shell-heading">
            A flexible way for families to protect annual beach time.
          </h1>
          <p class="shell-lead">
            Coastal Preferred Escapes is built for South African families who want affordable,
            flexible and memorable beach holidays without traditional lifetime timeshare
            commitments.
          </p>
        </header>

        <section class="about-page__story shell-card" aria-labelledby="about-story-title">
          <h2 id="about-story-title">Our Vision</h2>
          <p>
            Affordable, flexible family beach holidays across a growing collection of coastal
            resorts, supported by honest pricing, practical accommodation, and long-term member
            relationships.
          </p>
        </section>

        <div class="about-page__grid">
          <section class="about-page__panel shell-card" aria-labelledby="promise-title">
            <h2 id="promise-title">Our Promise</h2>
            <ul>
              <li v-for="item in aboutData.promises" :key="item">
                <span aria-hidden="true"></span>
                {{ item }}
              </li>
            </ul>
          </section>

          <section class="about-page__panel shell-card" aria-labelledby="principles-title">
            <h2 id="principles-title">Our Principles</h2>
            <ul>
              <li v-for="item in aboutData.principles" :key="item">
                <span aria-hidden="true"></span>
                {{ item }}
              </li>
            </ul>
          </section>
        </div>

        <section class="about-page__commitment" aria-labelledby="commitment-title">
          <p class="shell-eyebrow">Our Commitment</p>
          <h2 id="commitment-title">
            Long-term relationships matter more than one-off sales.
          </h2>
          <p>{{ siteText.footer.commitment }}</p>
        </section>
      </div>
    </section>
  </main>

  <SiteFooter :data="siteText.footer" />
</template>

<script setup lang="ts">
  import { siteText } from '@/content/siteText'
  import { useSeoHead } from '@/composables/useSeoHead'
  import { useHead } from '@unhead/vue'
  import NavBar from '@/components/sections/NavBar.vue'
  import SiteFooter from '@/components/sections/SiteFooter.vue'

  const aboutData = siteText.about

  useSeoHead({
    title: 'About Coastal Preferred Escapes',
    description:
      'Learn about Coastal Preferred Escapes, CPE Properties, our member-first promise and our approach to flexible Cabana Mio beach holidays.',
    path: '/about/',
  })

  useHead({
    title: 'About Coastal Preferred Escapes',
    meta: [
      {
        name: 'description',
        content:
          'Learn about Coastal Preferred Escapes, CPE Properties, our member-first promise and our approach to flexible Cabana Mio beach holidays.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
  })
</script>

<style scoped>
  .about-page {
    padding-top: clamp(8rem, 14vw, 12rem);
    background:
      linear-gradient(180deg, rgb(14 107 110 / 0.08), transparent 58%),
      var(--shell-color-canvas);
  }

  .about-page__inner {
    display: grid;
    gap: var(--shell-space-8);
  }

  .about-page__header {
    max-width: 60rem;
  }

  .about-page__header .shell-heading {
    max-width: 18ch;
  }

  .about-page__story,
  .about-page__panel {
    padding: var(--shell-space-8);
  }

  .about-page__story {
    max-width: 58rem;
  }

  .about-page__story h2,
  .about-page__panel h2,
  .about-page__commitment h2 {
    margin: 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(1.6rem, 3vw, 2.3rem);
    line-height: 1.1;
  }

  .about-page__story p,
  .about-page__commitment p {
    margin: var(--shell-space-4) 0 0;
    color: var(--shell-color-muted);
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .about-page__grid {
    display: grid;
    gap: var(--shell-space-4);
  }

  .about-page__panel ul {
    display: grid;
    gap: var(--shell-space-4);
    margin: var(--shell-space-6) 0 0;
    padding: 0;
    list-style: none;
  }

  .about-page__panel li {
    display: grid;
    grid-template-columns: 1.35rem minmax(0, 1fr);
    gap: var(--shell-space-3);
    color: var(--shell-color-muted);
    line-height: 1.55;
  }

  .about-page__panel span {
    position: relative;
    display: grid;
    width: 1.15rem;
    height: 1.15rem;
    place-items: center;
    border-radius: 999px;
    background: var(--shell-color-lagoon);
    color: white;
    transform: translateY(0.14rem);
  }

  .about-page__panel span::after {
    content: '';
    width: 0.3rem;
    height: 0.5rem;
    border: solid currentColor;
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg) translate(-1px, -1px);
  }

  .about-page__commitment {
    border-top: 1px solid var(--shell-color-hairline);
    padding-top: var(--shell-space-8);
  }

  .about-page__commitment p {
    max-width: 58rem;
  }

  @media (min-width: 768px) {
    .about-page__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
