<template>
  <div class="long-stay-page">
    <NavBar :data="siteText['long-stay-nav']" />

    <main id="main-content">
      <section id="escape" class="long-stay-hero shell-section" aria-labelledby="long-stay-title">
        <img class="long-stay-hero__image" :src="withCacheBust(data.image)" :alt="data.imageAlt" aria-hidden="true" />
        <div class="long-stay-hero__shade" aria-hidden="true"></div>
        <div class="long-stay-hero__inner shell-container">
          <div class="long-stay-hero__content">
            <p v-if="data.eyebrow" class="shell-eyebrow long-stay-hero__eyebrow">{{ data.eyebrow }}</p>
            <h1 id="long-stay-title" class="long-stay-hero__title">{{ data.title }}</h1>
            <p class="long-stay-hero__lead">{{ data.lead }}</p>
            <p class="long-stay-hero__highlight">{{ data.highlight }}</p>
            <div class="long-stay-hero__actions" aria-label="Primary actions">
              <a class="shell-button shell-button--primary" :href="data.primaryCta.href">
                {{ data.primaryCta.label }}
              </a>
              <a class="shell-button shell-button--secondary" :href="data.secondaryCta.href">
                {{ data.secondaryCta.label }}
              </a>
            </div>
            <ul class="long-stay-hero__facts" aria-label="Key Cabana Mio facts">
              <li v-for="fact in data.facts" :key="fact">{{ fact }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="winter-contrast" class="long-stay-contrast shell-section" aria-labelledby="winter-contrast-title">
        <div class="long-stay-contrast__inner shell-container">
          <div class="long-stay-contrast__copy">
            <p class="shell-eyebrow">The Escape</p>
            <h2 id="winter-contrast-title">{{ data.winterContrast.title }}</h2>
            <p>{{ data.winterContrast.body }}</p>
          </div>
          <div class="long-stay-contrast__panel" aria-label="Approximate winter temperature comparison">
            <div v-for="city in data.temperatureComparison" :key="city.name" class="long-stay-contrast__city" :class="{ 'long-stay-contrast__city--warm': city.featured }">
              <span>{{ city.name }}</span>
              <strong>{{ city.temperature }}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="accommodation" class="long-stay-accommodation shell-section" aria-labelledby="accommodation-title">
        <div class="long-stay-accommodation__inner shell-container">
          <div class="long-stay-accommodation__copy">
            <p class="shell-eyebrow">Accommodation</p>
            <h2 id="accommodation-title">{{ data.accommodation.title }}</h2>
            <p>{{ data.accommodation.body }}</p>
          </div>
          <div class="long-stay-accommodation__gallery" aria-label="Cabana Mio accommodation images">
            <figure v-for="image in data.accommodation.images" :key="image.src" class="long-stay-accommodation__image">
              <img :src="withCacheBust(image.src)" :alt="image.alt" loading="lazy" decoding="async" />
              <figcaption>{{ image.label }}</figcaption>
            </figure>
          </div>
          <ul class="long-stay-accommodation__features" aria-label="Accommodation features">
            <li v-for="feature in data.accommodation.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </section>

      <section id="experience" class="long-stay-experience shell-section" aria-labelledby="experience-title">
        <div class="long-stay-experience__inner shell-container">
          <figure class="long-stay-experience__image">
            <img :src="withCacheBust(data.experience.image.src)" :alt="data.experience.image.alt" loading="lazy" decoding="async" />
            <figcaption>{{ data.experience.image.label }}</figcaption>
          </figure>
          <div class="long-stay-experience__copy">
            <p class="shell-eyebrow">Long-Stay Living</p>
            <h2 id="experience-title">{{ data.experience.title }}</h2>
            <p>{{ data.experience.body }}</p>
            <ul class="long-stay-experience__list" aria-label="Long-stay lifestyle moments">
              <li v-for="item in data.experience.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="golf" class="long-stay-golf shell-section" aria-labelledby="golf-title">
        <div class="long-stay-golf__inner shell-container">
          <div class="long-stay-golf__copy">
            <p class="shell-eyebrow">Golf</p>
            <h2 id="golf-title">{{ data.golf.title }}</h2>
            <p>{{ data.golf.body }}</p>
          </div>
          <div class="long-stay-golf__gallery" aria-label="Golf and coastal lifestyle">
            <figure v-for="image in data.golf.images" :key="image.src" class="long-stay-golf__image">
              <img :src="withCacheBust(image.src)" :alt="image.alt" loading="lazy" decoding="async" />
              <figcaption>{{ image.label }}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="location" class="long-stay-location shell-section" aria-labelledby="location-title">
        <div class="long-stay-location__inner shell-container">
          <div class="long-stay-location__copy">
            <p class="shell-eyebrow">Location</p>
            <h2 id="location-title">{{ data.location.title }}</h2>
            <p>{{ data.location.body }}</p>
          </div>
          <figure class="long-stay-location__image">
            <img :src="withCacheBust(data.location.image)" alt="Aerial view of Cabana Mio and the coastline" loading="lazy" decoding="async" />
            <figcaption>Amanzimtoti Coastline</figcaption>
          </figure>
        </div>
      </section>

      <section id="pricing" class="long-stay-pricing shell-section" aria-labelledby="pricing-title">
        <div class="long-stay-pricing__inner shell-container">
          <div class="long-stay-pricing__header">
            <p class="shell-eyebrow">{{ data.pricing.eyebrow }}</p>
            <h2 id="pricing-title">{{ data.pricing.title }}</h2>
            <p>{{ data.pricing.note }}</p>
          </div>
          <div class="long-stay-pricing__cards" role="list">
            <div v-for="row in data.pricing.rows" :key="row.duration" class="long-stay-pricing__card" :class="{ 'long-stay-pricing__card--featured': row.featured }" role="listitem">
              <p class="long-stay-pricing__duration">{{ row.duration }}</p>
              <p class="long-stay-pricing__price">{{ row.price }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="long-stay-faq shell-section" aria-labelledby="faq-title">
        <div class="long-stay-faq__inner shell-container">
          <div class="long-stay-faq__header">
            <p class="shell-eyebrow">{{ data.faq.eyebrow }}</p>
            <h2 id="faq-title">{{ data.faq.title }}</h2>
          </div>
          <div class="long-stay-faq__items" role="region" aria-label="Frequently asked questions">
            <div v-for="(item, index) in data.faq.items" :key="item.question" class="long-stay-faq__item">
              <button :id="`faq-question-${index}`" class="long-stay-faq__question" type="button" :aria-expanded="openFaqIndex === index" :aria-controls="`faq-answer-${index}`" @click="toggleFaq(index)">
                 {{ item.question }}
                 <span aria-hidden="true">{{ openFaqIndex === index ? '-' : '+' }}</span>
               </button>
               <div :id="`faq-answer-${index}`" class="long-stay-faq__answer" :hidden="openFaqIndex !== index" role="region" :aria-labelledby="`faq-question-${index}`">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="enquire" class="long-stay-enquire shell-section" aria-labelledby="enquire-title">
        <div class="long-stay-enquire__inner shell-container">
          <div class="long-stay-enquire__copy">
            <p class="shell-eyebrow">{{ data.enquire.eyebrow }}</p>
            <h2 id="enquire-title">{{ data.enquire.title }}</h2>
            <p>{{ data.enquire.body }}</p>
          </div>
          <form class="long-stay-enquire__form" @submit.prevent="handleSubmit" novalidate>
            <div class="long-stay-enquire__row">
              <label class="long-stay-enquire__label" for="long-stay-name">Full name</label>
              <input id="long-stay-name" v-model="form.name" type="text" name="name" autocomplete="name" :class="{ 'long-stay-enquire__input--error': errors.name }" />
              <em v-if="errors.name" class="long-stay-enquire__error">{{ errors.name }}</em>
            </div>
            <div class="long-stay-enquire__row">
              <label class="long-stay-enquire__label" for="long-stay-email">Email address</label>
              <input id="long-stay-email" v-model="form.email" type="email" name="email" autocomplete="email" :class="{ 'long-stay-enquire__input--error': errors.email }" />
              <em v-if="errors.email" class="long-stay-enquire__error">{{ errors.email }}</em>
            </div>
            <div class="long-stay-enquire__row">
              <label class="long-stay-enquire__label" for="long-stay-message">Travel dates and notes</label>
              <textarea id="long-stay-message" v-model="form.message" name="message" rows="4" :class="{ 'long-stay-enquire__input--error': errors.message }"></textarea>
              <em v-if="errors.message" class="long-stay-enquire__error">{{ errors.message }}</em>
            </div>
            <button class="shell-button shell-button--primary" type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Check Availability' }}
            </button>
            <p v-if="status === 'success'" class="long-stay-enquire__success" role="status">
              Thank you. Your enquiry has been received and the team will be in touch.
            </p>
            <p v-if="status === 'error'" class="long-stay-enquire__error" role="alert">
              Sorry, something went wrong. Please call or email us directly and we will assist you.
            </p>
          </form>
        </div>
      </section>
    </main>

    <SiteFooter :data="siteText.footer" />
  </div>
</template>
<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { siteText, type SectionData } from '@/content/siteText'
  import type { LongStayData } from '@/content/siteText'
  import { withCacheBust } from '@/composables/cacheBustedAsset'
  import NavBar from '@/components/sections/NavBar.vue'
  import SiteFooter from '@/components/sections/SiteFooter.vue'

  const data = siteText['long-stay'] as LongStayData

  const openFaqIndex = ref<number | null>(null)

  const toggleFaq = (index: number) => {
    openFaqIndex.value = openFaqIndex.value === index ? null : index
  }

  const isSubmitting = ref(false)
  const status = ref<'idle' | 'success' | 'error'>('idle')

  const form = reactive({
    name: '',
    email: '',
    message: '',
  })

  const errors = reactive({
    name: '',
    email: '',
    message: '',
  })

  const clearErrors = () => {
    errors.name = ''
    errors.email = ''
    errors.message = ''
    status.value = 'idle'
  }

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateForm = () => {
    clearErrors()
    let isValid = true

    if (!form.name.trim()) {
      errors.name = 'Full name is required'
      isValid = false
    }

    if (!form.email.trim()) {
      errors.email = 'Email address is required'
      isValid = false
    } else if (!isValidEmail(form.email)) {
      errors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!form.message.trim()) {
      errors.message = 'Travel dates and notes are required'
      isValid = false
    }

    return isValid
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    isSubmitting.value = true

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
    } catch {
      status.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  }
</script>

<style scoped>
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
      linear-gradient(90deg, rgb(10 42 94 / 0.82), rgb(10 42 94 / 0.48) 46%, rgb(10 42 94 / 0.18)),
      linear-gradient(180deg, rgb(10 42 94 / 0.15), rgb(10 42 94 / 0.62));
  }

  .long-stay-hero__inner {
    display: grid;
    padding-block: clamp(7rem, 12vw, 10rem) clamp(3rem, 6vw, 5rem);
  }

  .long-stay-hero__content {
    max-width: 100%;
  }

  .long-stay-hero__eyebrow {
    margin: 0;
    color: var(--shell-color-sun);
    font-size: 0.9rem;
    font-weight: 850;
    letter-spacing: 0.08em;
    line-height: 1.35;
    text-transform: uppercase;
  }

  .long-stay-hero__title {
    max-width: 12ch;
    margin: 1rem 0 0;
    color: white;
    font-family: var(--shell-font-serif);
    font-size: clamp(3rem, 12vw, 6.9rem);
    font-weight: 750;
    letter-spacing: 0;
    line-height: 0.92;
  }

  .long-stay-hero__lead,
  .long-stay-hero__highlight {
    max-width: 44rem;
    color: rgb(255 255 255 / 0.94);
  }

  .long-stay-hero__lead {
    margin: 1.25rem 0 0;
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    line-height: 1.55;
  }

  .long-stay-hero__highlight {
    margin: 0.85rem 0 0;
    font-size: clamp(1rem, 1.6vw, 1.16rem);
    font-weight: 800;
    line-height: 1.45;
  }

  .long-stay-hero__actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: min(100%, 24rem);
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
    color: white;
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
    gap: clamp(2rem, 5vw, 4rem);
    align-items: center;
  }

  .long-stay-experience__image {
    position: relative;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    border-radius: var(--shell-radius-md);
    aspect-ratio: 4 / 5;
    background: var(--shell-color-surface-muted);
    box-shadow: 0 1rem 2.5rem rgb(10 42 94 / 0.1);
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

  .long-stay-experience h2 {
    max-width: 14ch;
    margin: 0.85rem 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(2.1rem, 4.8vw, 4.2rem);
    font-weight: 750;
    line-height: 1;
  }

  .long-stay-experience__copy p:not(.shell-eyebrow) {
    max-width: 43rem;
    margin: 1.25rem 0 0;
    color: var(--shell-color-muted);
    font-size: clamp(1.05rem, 1.8vw, 1.18rem);
    line-height: 1.65;
  }

  .long-stay-experience__list {
    display: grid;
    gap: 0.75rem;
    margin: 1.5rem 0 0;
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

  .long-stay-golf__gallery {
    display: grid;
    gap: 0.75rem;
  }

  .long-stay-golf__image {
    position: relative;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    border-radius: var(--shell-radius-md);
    aspect-ratio: 4 / 3;
    background: var(--shell-color-surface-muted);
  }

  .long-stay-golf__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .long-stay-golf__image figcaption {
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

  .long-stay-pricing__card {
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-surface);
    padding: var(--shell-space-6);
    text-align: center;
  }

  .long-stay-pricing__card--featured {
    border-color: var(--shell-color-accent);
    box-shadow: 0 0.65rem 1.5rem rgb(10 42 94 / 0.08);
  }

  .long-stay-pricing__duration {
    margin: 0;
    color: var(--shell-color-muted);
    font-size: 0.88rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .long-stay-pricing__price {
    margin: 0.5rem 0 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 750;
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
    .long-stay-accommodation__features,
    .long-stay-experience__list,
    .long-stay-golf__gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .long-stay-contrast__inner,
    .long-stay-accommodation__inner,
    .long-stay-experience__inner,
    .long-stay-golf__inner,
    .long-stay-location__inner,
    .long-stay-pricing__inner,
    .long-stay-faq__inner,
    .long-stay-enquire__inner {
      grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1fr);
    }

    .long-stay-location__inner {
      grid-template-columns: 1fr;
    }

    .long-stay-pricing__cards {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .long-stay-enquire__inner {
      grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1fr);
    }
  }
</style>
