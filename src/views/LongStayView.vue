<template>
  <div class="long-stay-page">
    <NavBar :data="siteText['long-stay-nav']" />

    <main id="main-content">
      <LongStayHeroBlock :data="data" />
      <WinterContrastDeck :data="data" />
      <ExperienceDeck :data="data.experience" />
      <div id="accommodation">
        <MapSection :data="siteText.map" />
      </div>
      <GolfDeck :data="data.golf" />
      <PricingDeck :data="data.pricing" />
      <FaqDeck :data="data.faq" />
      <EnquiryDeck :data="data.enquire" />
    </main>

    <SiteFooter :data="siteText.footer" />
  </div>
</template>
<script setup lang="ts">
  import { siteText } from '@/content/siteText'
  import type { LongStayData } from '@/content/siteText'
  import EnquiryDeck from '@/components/long-stay/EnquiryDeck.vue'
  import ExperienceDeck from '@/components/long-stay/ExperienceDeck.vue'
  import FaqDeck from '@/components/long-stay/FaqDeck.vue'
  import GolfDeck from '@/components/long-stay/GolfDeck.vue'
  import LongStayHeroBlock from '@/components/long-stay/LongStayHeroBlock.vue'
  import PricingDeck from '@/components/long-stay/PricingDeck.vue'
  import WinterContrastDeck from '@/components/long-stay/WinterContrastDeck.vue'
  import MapSection from '@/components/sections/MapSection.vue'
  import NavBar from '@/components/sections/NavBar.vue'
  import SiteFooter from '@/components/sections/SiteFooter.vue'

  const data = siteText['long-stay'] as LongStayData
</script>

<style>
  .long-stay-page {
    min-height: 100vh;
    background: var(--shell-color-canvas);
    color: var(--shell-color-ink);
  }

  .long-stay-hero {
    position: relative;
    isolation: isolate;
    min-height: 100svh;
    display: grid;
    align-items: end;
    overflow: hidden;
  }

  .long-stay-hero__image,
  .long-stay-hero__shade {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .long-stay-hero__image {
    z-index: -2;
    object-fit: cover;
  }

  .long-stay-hero__shade {
    z-index: -1;
    background:
      linear-gradient(90deg, rgb(255 255 255 / 0.9), rgb(255 255 255 / 0.64) 45%, rgb(255 255 255 / 0.18)),
      linear-gradient(180deg, rgb(255 255 255 / 0.16), rgb(255 255 255 / 0.44));
  }

  .long-stay-hero__inner {
    display: grid;
    padding-block: clamp(7rem, 12vw, 10rem) clamp(3rem, 6vw, 5rem);
  }

  .long-stay-hero__content {
    display: grid;
    justify-items: center;
    max-width: 100%;
    text-align: center;
  }

  .long-stay-hero__eyebrow {
    margin: 0;
    color: var(--shell-color-lagoon) !important;
    font-size: 0.9rem !important;
    font-weight: 850 !important;
    letter-spacing: 0.08em;
    line-height: 1.35 !important;
    text-transform: uppercase;
  }

  .long-stay-hero__title {
    max-width: 12ch;
    margin: 1rem 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(3rem, 12vw, 6.9rem);
    font-weight: 750;
    letter-spacing: 0;
    line-height: 0.92;
    text-shadow: 0 2px 22px rgb(255 255 255 / 0.75);
  }

  .long-stay-hero__lead,
  .long-stay-hero__highlight {
    max-width: 44rem;
    color: var(--shell-color-ink) !important;
    text-shadow: 0 1px 18px rgb(255 255 255 / 0.78);
  }

  .long-stay-hero__lead {
    margin: 1.25rem 0 0;
    font-size: clamp(1.1rem, 2vw, 1.35rem) !important;
    line-height: 1.55 !important;
  }

  .long-stay-hero__highlight {
    margin: 0.85rem 0 0;
    font-size: clamp(1rem, 1.6vw, 1.16rem) !important;
    font-weight: 800 !important;
    line-height: 1.45 !important;
  }

  .long-stay-hero__actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: min(100%, 24rem);
    justify-content: center;
    margin-top: 1.5rem;
  }

  .long-stay-hero__facts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
    max-width: 43rem;
    margin: 1.75rem 0 0;
    padding: 0;
    list-style: none;
  }

  .long-stay-hero__facts li {
    display: flex;
    align-items: center;
    min-height: 3.25rem;
    border: 1px solid rgb(255 255 255 / 0.24);
    border-radius: var(--shell-radius-md);
    background: rgb(255 255 255 / 0.13);
    padding: 0.8rem;
    color: var(--shell-color-ink);
    font-size: 0.9rem;
    font-weight: 850;
    backdrop-filter: blur(12px);
  }
  .long-stay-contrast {
    padding-block: clamp(4rem, 8vw, 6.5rem);
    background: var(--shell-color-canvas);
  }

  .long-stay-contrast__inner {
    display: grid;
    gap: clamp(2rem, 5vw, 4rem);
    align-items: center;
  }

  .long-stay-contrast__copy {
    max-width: 38rem;
  }

  .long-stay-contrast h2 {
    max-width: 16ch;
    margin: 0.85rem 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(2.15rem, 5vw, 4.3rem);
    font-weight: 750;
    line-height: 0.98;
  }

  .long-stay-contrast__copy p:not(.shell-eyebrow) {
    max-width: 38rem;
    margin: 1.25rem 0 0;
    color: var(--shell-color-muted);
    font-size: clamp(1.05rem, 1.8vw, 1.18rem);
    line-height: 1.65;
  }

  .long-stay-contrast__panel {
    display: grid;
    gap: 0.75rem;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-surface);
    padding: clamp(1rem, 3vw, 1.5rem);
    box-shadow: 0 1rem 2.5rem rgb(10 42 94 / 0.09);
  }

  .long-stay-contrast__city {
    display: grid;
    gap: 0.45rem;
    align-content: center;
    min-height: 6.25rem;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-sm);
    background: var(--shell-color-surface);
    padding: 1.1rem;
  }

  .long-stay-contrast__city span {
    color: var(--shell-color-muted);
    font-size: 0.9rem;
    font-weight: 850;
    line-height: 1.25;
  }

  .long-stay-contrast__city strong {
    color: var(--shell-color-ink);
    font-size: clamp(1.45rem, 3.4vw, 2.25rem);
    font-weight: 900;
    line-height: 1.05;
  }

  .long-stay-contrast__city--warm {
    border-color: var(--shell-color-accent);
    background: var(--shell-color-lagoon);
  }

  .long-stay-contrast__city--warm span,
  .long-stay-contrast__city--warm strong {
    color: white;
  }
  .long-stay-accommodation {
    padding-block: clamp(4rem, 8vw, 6.5rem);
    background: var(--shell-color-surface);
  }

  .long-stay-accommodation__inner {
    display: grid;
    gap: clamp(2rem, 5vw, 3.5rem);
  }

  .long-stay-accommodation__copy {
    max-width: 58rem;
  }

  .long-stay-accommodation h2 {
    max-width: 18ch;
    margin: 0.85rem 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(2.1rem, 4.6vw, 4rem);
    font-weight: 750;
    line-height: 1;
  }

  .long-stay-accommodation__copy p:not(.shell-eyebrow) {
    max-width: 46rem;
    margin: 1.25rem 0 0;
    color: var(--shell-color-muted);
    font-size: clamp(1.05rem, 1.8vw, 1.18rem);
    line-height: 1.65;
  }

  .long-stay-accommodation__gallery {
    display: grid;
    gap: 0.75rem;
  }

  .long-stay-accommodation__image {
    position: relative;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    border-radius: var(--shell-radius-md);
    aspect-ratio: 4 / 3;
    background: var(--shell-color-surface-muted);
  }

  .long-stay-accommodation__image:first-child {
    aspect-ratio: 16 / 10;
  }

  .long-stay-accommodation__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .long-stay-accommodation__image figcaption {
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    border-radius: var(--shell-radius-sm);
    background: rgb(10 42 94 / 0.86);
    padding: 0.5rem 0.7rem;
    color: white;
    font-size: 0.82rem;
    font-weight: 850;
  }

  .long-stay-accommodation__features {
    display: grid;
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .long-stay-accommodation__features li {
    display: flex;
    min-height: 3.25rem;
    align-items: center;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-sm);
    background: var(--shell-color-canvas);
    padding: 0.85rem 1rem;
    color: var(--shell-color-ink);
    font-weight: 850;
  }

  .long-stay-experience {
    padding-block: clamp(4rem, 8vw, 6.5rem);
    background:
      linear-gradient(180deg, var(--shell-color-surface), var(--shell-color-canvas) 40%),
      var(--shell-color-canvas);
  }

  .long-stay-experience__inner {
    display: grid;
    gap: clamp(1.4rem, 3vw, 2.5rem);
  }

  .long-stay-experience h2 {
    max-width: 17ch;
    margin: 0.85rem 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(2.1rem, 4.8vw, 4.2rem);
    font-weight: 750;
    line-height: 1;
  }

  .long-stay-experience__intro p:not(.shell-eyebrow) {
    max-width: 58rem;
    margin: 1.25rem 0 0;
    color: var(--shell-color-muted);
    font-size: clamp(1.05rem, 1.8vw, 1.18rem);
    line-height: 1.65;
  }

  .long-stay-experience__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  .long-stay-experience__tab {
    min-height: 2.45rem;
    border: 1px solid var(--shell-color-hairline);
    border-radius: 999px;
    background: white;
    padding: 0.55rem 0.9rem;
    color: var(--shell-color-ink);
    font: inherit;
    font-size: 0.78rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    cursor: pointer;
    transition:
      background-color 180ms ease,
      border-color 180ms ease,
      color 180ms ease,
      transform 180ms ease;
  }

  .long-stay-experience__tab:hover,
  .long-stay-experience__tab--active {
    border-color: var(--shell-color-accent);
    background: var(--shell-color-accent);
    color: white;
    transform: translateY(-1px);
  }

  .long-stay-experience__feature {
    display: grid;
    overflow: hidden;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: white;
    box-shadow: 0 1rem 2.5rem rgb(10 42 94 / 0.1);
  }

  .long-stay-experience__image {
    position: relative;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    aspect-ratio: 16 / 11;
    background: var(--shell-color-surface-muted);
  }

  .long-stay-experience__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .long-stay-experience__image figcaption {
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    border-radius: var(--shell-radius-sm);
    background: rgb(10 42 94 / 0.86);
    padding: 0.5rem 0.7rem;
    color: white;
    font-size: 0.82rem;
    font-weight: 850;
  }

  .long-stay-experience__copy {
    display: grid;
    align-content: center;
    padding: clamp(1.25rem, 3vw, 2.25rem);
  }

  .long-stay-experience__pillar-label {
    color: var(--shell-color-accent);
    font-size: 0.78rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
  }

  .long-stay-experience h3 {
    max-width: 18ch;
    margin: 0.8rem 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(2rem, 4vw, 3.6rem);
    font-weight: 750;
    line-height: 1;
  }

  .long-stay-experience__copy p {
    max-width: 42rem;
    margin: 1rem 0 0;
    color: var(--shell-color-muted) !important;
    font-size: clamp(1rem, 1.5vw, 1.1rem) !important;
    line-height: 1.6 !important;
  }

  .long-stay-experience__list {
    display: grid;
    gap: 0.75rem;
    margin: 1.25rem 0 0;
    padding: 0;
    list-style: none;
  }

  .long-stay-experience__list li {
    position: relative;
    padding-left: 1.4rem;
    color: var(--shell-color-ink);
    font-weight: 850;
    line-height: 1.45;
  }

  .long-stay-experience__list li::before {
    content: '';
    position: absolute;
    top: 0.55rem;
    left: 0;
    width: 0.45rem;
    aspect-ratio: 1;
    border-radius: 999px;
    background: var(--shell-color-accent);
  }

  .long-stay-experience__link {
    justify-self: start;
    margin-top: 1.35rem;
    color: var(--shell-color-lagoon);
    font-weight: 900;
    text-decoration: underline;
    text-underline-offset: 0.24rem;
  }

  .long-stay-golf,
  .long-stay-location,
  .long-stay-pricing,
  .long-stay-faq,
  .long-stay-enquire {
    padding-block: clamp(4rem, 8vw, 6.5rem);
    background: var(--shell-color-surface);
  }

  .long-stay-golf__inner,
  .long-stay-location__inner,
  .long-stay-pricing__inner,
  .long-stay-faq__inner,
  .long-stay-enquire__inner {
    display: grid;
    gap: clamp(2rem, 5vw, 3.5rem);
  }

  .long-stay-golf__inner {
    gap: clamp(1.75rem, 4vw, 3rem);
  }

  .long-stay-golf h2,
  .long-stay-location h2,
  .long-stay-pricing h2,
  .long-stay-faq h2,
  .long-stay-enquire h2 {
    max-width: 18ch;
    margin: 0.85rem 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(2.1rem, 4.6vw, 4rem);
    font-weight: 750;
    line-height: 1;
  }

  .long-stay-golf__copy p:not(.shell-eyebrow),
  .long-stay-location__copy p:not(.shell-eyebrow),
  .long-stay-pricing p:not(.shell-eyebrow),
  .long-stay-faq p:not(.shell-eyebrow),
  .long-stay-enquire__copy p:not(.shell-eyebrow) {
    max-width: 46rem;
    margin: 1.25rem 0 0;
    color: var(--shell-color-muted);
    font-size: clamp(1.05rem, 1.8vw, 1.18rem);
    line-height: 1.65;
  }

  .long-stay-golf__copy {
    display: grid;
    justify-items: center;
    text-align: center;
  }

  .long-stay-golf__copy h2 {
    max-width: 18ch;
  }

  .long-stay-golf__copy p:not(.shell-eyebrow) {
    max-width: 52rem;
  }

  .long-stay-golf__note {
    max-width: 58rem;
    justify-self: center;
    margin: 0;
    color: var(--shell-color-muted);
    font-size: clamp(1.08rem, 1.8vw, 1.22rem);
    line-height: 1.65;
    text-align: center;
  }

  .long-stay-golf__cards {
    display: grid;
    gap: var(--shell-space-4);
  }

  .long-stay-golf__card {
    position: relative;
    min-height: 0;
    overflow: hidden;
    border-radius: var(--shell-radius-md);
    aspect-ratio: 4 / 5;
    background: var(--shell-color-surface-muted);
    box-shadow: 0 1rem 2.25rem rgb(10 42 94 / 0.12);
  }

  .long-stay-golf__card img,
  .long-stay-golf__card-shade {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .long-stay-golf__card img {
    object-fit: cover;
  }

  .long-stay-golf__card-shade {
    background:
      linear-gradient(180deg, rgb(4 17 38 / 0.08), rgb(4 17 38 / 0.72)),
      linear-gradient(90deg, rgb(4 17 38 / 0.46), rgb(4 17 38 / 0.16));
  }

  .long-stay-golf__card-content {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    gap: 0.55rem;
    padding: clamp(1rem, 2.4vw, 1.35rem);
    color: white;
  }

  .long-stay-golf__card-content p {
    margin: 0;
    color: rgb(255 255 255 / 0.82) !important;
    font-size: 0.78rem !important;
    font-weight: 850;
    letter-spacing: 0.04em;
    line-height: 1.25 !important;
    text-transform: uppercase;
  }

  .long-stay-golf__card-content h3 {
    margin: 0;
    color: white;
    font-size: clamp(1.35rem, 2.4vw, 1.8rem);
    font-weight: 900;
    line-height: 1.05;
  }

  .long-stay-golf__card-content strong {
    color: var(--shell-color-sun);
    font-size: 0.98rem;
    line-height: 1.2;
  }

  .long-stay-golf__card-content small {
    color: rgb(255 255 255 / 0.88);
    font-size: 0.86rem;
    font-weight: 800;
    line-height: 1.35;
  }

  .long-stay-golf__card-content span {
    color: rgb(255 255 255 / 0.9);
    font-size: 0.94rem;
    line-height: 1.45;
  }

  .long-stay-location__image {
    position: relative;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    border-radius: var(--shell-radius-md);
    aspect-ratio: 16 / 9;
    background: var(--shell-color-surface-muted);
  }

  .long-stay-location__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .long-stay-location__image figcaption {
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    border-radius: var(--shell-radius-sm);
    background: rgb(10 42 94 / 0.86);
    padding: 0.5rem 0.7rem;
    color: white;
    font-size: 0.82rem;
    font-weight: 850;
  }

  .long-stay-pricing__cards {
    display: grid;
    gap: 0.75rem;
  }

  .long-stay-pricing__layout {
    display: grid;
    width: min(100%, 72rem);
    justify-self: center;
    gap: var(--shell-space-4);
    align-items: stretch;
  }

  .long-stay-pricing__header {
    display: grid;
    max-width: 58rem;
    justify-items: center;
    justify-self: center;
    text-align: center;
  }

  .long-stay-pricing__header h2 {
    max-width: 16ch;
  }

  .long-stay-pricing__header p:not(.shell-eyebrow) {
    max-width: 44rem;
  }

  .long-stay-pricing__feature,
  .long-stay-pricing__option {
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-surface);
  }

  .long-stay-pricing__feature {
    display: grid;
    align-content: center;
    gap: var(--shell-space-5);
    border-color: var(--shell-color-accent);
    background:
      linear-gradient(135deg, rgb(248 228 208 / 0.75), transparent 48%),
      var(--shell-color-surface);
    padding: clamp(1.5rem, 4vw, 2.75rem);
    box-shadow: 0 1rem 2.5rem rgb(10 42 94 / 0.1);
  }

  .long-stay-pricing__badge {
    display: inline-flex;
    justify-self: start;
    border-radius: 999px;
    background: white;
    padding: 0.5rem 0.75rem;
    color: var(--shell-color-ink);
    font-size: 0.78rem;
    font-weight: 900;
    line-height: 1;
    box-shadow: 0 0.35rem 1rem rgb(10 42 94 / 0.1);
    text-transform: uppercase;
  }

  .long-stay-pricing__feature h3 {
    margin: 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-sans);
    font-size: clamp(1.65rem, 3.6vw, 2.55rem);
    font-weight: 900 !important;
    line-height: 1.05;
  }

  .long-stay-pricing__feature-price {
    display: block;
    margin: 0;
    color: var(--shell-color-ink) !important;
    font-family: var(--shell-font-sans);
    font-size: clamp(1.45rem, 2.7vw, 0.5rem) !important;
    font-weight: 400 !important;
    letter-spacing: 0;
    line-height: 1.12 !important;
    text-align: left;
  }

  .long-stay-pricing__feature-note {
    max-width: 42rem;
    margin: 0;
    color: var(--shell-color-muted) !important;
    font-size: clamp(1rem, 1.6vw, 1.12rem) !important;
    line-height: 1.6 !important;
  }

  .long-stay-pricing__feature .shell-button {
    justify-self: start;
    margin-top: var(--shell-space-2);
  }

  .long-stay-pricing__options {
    display: grid;
    gap: var(--shell-space-3);
    align-content: stretch;
  }

  .long-stay-pricing__option {
    position: relative;
    display: grid;
    min-height: 8.25rem;
    align-content: center;
    gap: 0.45rem;
    overflow: hidden;
    padding: clamp(1.2rem, 2.8vw, 1.65rem);
    background:
      linear-gradient(135deg, rgb(14 107 110 / 0.08), transparent 56%),
      var(--shell-color-surface);
    box-shadow: 0 0.65rem 1.6rem rgb(10 42 94 / 0.06);
  }

  .long-stay-pricing__option::before {
    content: '';
    position: absolute;
    inset: 0 auto 0 0;
    width: 0.35rem;
    background: var(--shell-color-lagoon);
  }

  .long-stay-pricing__option-duration {
    color: var(--shell-color-muted);
    font-size: 25px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .long-stay-pricing__option strong {
    color: var(--shell-color-ink);
    font-family: var(--shell-font-sans);
    font-size: clamp(1.45rem, 2.7vw, 0.5rem);
    font-weight: 400;
    line-height: 1.12;
    text-align: left;
  }

  .long-stay-pricing__option-caption {
    color: var(--shell-color-subtle);
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.3;
  }

  .long-stay-pricing__fineprint {
    justify-self: center;
    max-width: 44rem;
    margin: 0;
    color: var(--shell-color-subtle) !important;
    font-size: 0.95rem !important;
    line-height: 1.5 !important;
    text-align: center;
  }

  .long-stay-faq__items {
    display: grid;
    gap: 0.75rem;
    max-width: 58rem;
  }

  .long-stay-faq__question {
    display: flex;
    width: 100%;
    min-height: 3.25rem;
    align-items: center;
    justify-content: space-between;
    gap: var(--shell-space-4);
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-surface);
    padding: var(--shell-space-4) var(--shell-space-5);
    color: var(--shell-color-ink);
    font-size: 1rem;
    font-weight: 800;
    text-align: left;
    cursor: pointer;
  }

  .long-stay-faq__question span {
    flex: 0 0 auto;
    font-size: 1.4rem;
    line-height: 1;
  }

  .long-stay-faq__answer {
    border: 1px solid var(--shell-color-hairline);
    border-top: 0;
    border-radius: 0 0 var(--shell-radius-md) var(--shell-radius-md);
    background: var(--shell-color-canvas);
    padding: var(--shell-space-5);
  }

  .long-stay-faq__answer p {
    margin: 0;
    color: var(--shell-color-muted);
    line-height: 1.65;
  }

  .long-stay-enquire__form {
    display: grid;
    gap: var(--shell-space-5);
    max-width: 32rem;
  }

  .long-stay-enquire__row {
    display: grid;
    gap: var(--shell-space-2);
  }

  .long-stay-enquire__label {
    color: var(--shell-color-ink);
    font-weight: 800;
    font-size: 0.95rem;
  }

  .long-stay-enquire__input--error,
  .long-stay-enquire__input--error:focus {
    border-color: #b42318 !important;
  }

  .long-stay-enquire__form input,
  .long-stay-enquire__form textarea {
    width: 100%;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-surface);
    color: var(--shell-color-ink);
    font: inherit;
    padding: 0.8rem 0.9rem;
  }

  .long-stay-enquire__form textarea {
    resize: vertical;
  }

  .long-stay-enquire__error {
    color: #b42318;
    font-size: 0.78rem;
    font-style: normal;
  }

  .long-stay-enquire__success {
    margin: 0;
    border-radius: var(--shell-radius-sm);
    padding: var(--shell-space-4);
    background: color-mix(in srgb, var(--shell-color-lagoon) 13%, white);
    color: var(--shell-color-lagoon);
    font-weight: 800;
    line-height: 1.5;
  }

  @media (min-width: 560px) {
    .long-stay-hero__actions {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .long-stay-hero__facts {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .long-stay-contrast__panel {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .long-stay-accommodation__gallery,
    .long-stay-accommodation__features {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .long-stay-contrast__inner,
    .long-stay-accommodation__inner,
    .long-stay-location__inner,
    .long-stay-faq__inner,
    .long-stay-enquire__inner {
      grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1fr);
    }

    .long-stay-experience__feature {
      align-items: stretch;
      grid-template-columns: minmax(0, 0.45fr) minmax(0, 0.55fr);
    }

    .long-stay-experience__image {
      height: 100%;
      aspect-ratio: auto;
    }

    .long-stay-location__inner {
      grid-template-columns: 1fr;
    }

    .long-stay-pricing__cards {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .long-stay-pricing__layout {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    }

    .long-stay-golf__cards {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .long-stay-enquire__inner {
      grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1fr);
    }
  }
</style>
