<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { SectionData } from '@/content/siteText'

  const props = defineProps<{
    data: SectionData<'contact'>
  }>()

  const apiUrl = import.meta.env.VITE_BROADSHEET_API_URL || ''
  const isSubmitting = ref(false)
  const status = ref<'idle' | 'success' | 'error'>('idle')

  const form = reactive({
    name: '',
    email: '',
    phone: '',
    whatsapp: false,
    message: '',
    location: '',
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
      errors.message = 'Message is required'
      isValid = false
    }

    return isValid
  }

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.phone = ''
    form.whatsapp = false
    form.location = ''
    form.message = ''
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    if (!apiUrl || form.location.trim()) {
      status.value = 'error'
      return
    }

    isSubmitting.value = true

    try {
      const details = [
        `Message: ${form.message.trim()}`,
        form.whatsapp ? 'Please contact me via WhatsApp' : '',
      ]
        .filter(Boolean)
        .join('\n')

      const response = await fetch(`${apiUrl}/v1/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          emailAddress: form.email.trim(),
          phoneNumber: form.phone.trim(),
          location: form.location,
          content: details,
        }),
      })

      if (!response.ok) {
        const responseText = await response.text()
        console.error('Contact API error', response.status, responseText)
        throw new Error(`Contact API error: ${response.status}`)
      }

      resetForm()
      clearErrors()
      status.value = 'success'
    } catch {
      status.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  }
</script>

<template>
  <section id="contact" class="contact-section shell-section" aria-labelledby="contact-title">
    <div class="contact-section__inner shell-container">
      <div>
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="contact-title" class="shell-heading">{{ data.title }}</h2>
        <p class="shell-lead">{{ data.body }}</p>

        <aside class="banking-card shell-card" aria-labelledby="home-banking-title">
          <span class="banking-card__icon" aria-hidden="true">account_balance</span>
          <div class="banking-card__content">
            <h3 id="home-banking-title">{{ data.banking.title }}</h3>
            <dl>
              <div v-for="item in data.banking.details" :key="item.label">
                <dt>{{ item.label }}</dt>
                <dd>{{ item.value }}</dd>
              </div>
            </dl>
            <p>{{ data.banking.note }}</p>
          </div>
        </aside>
      </div>

      <form class="contact-section__form shell-card" novalidate @submit.prevent="handleSubmit">
        <div class="contact-form__honeypot" aria-hidden="true">
          <label for="location">Location</label>
          <input
            id="location"
            v-model="form.location"
            name="location"
            type="text"
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <label>
          <span>{{ data.fields.name }} <strong>*</strong></span>
          <input
            v-model="form.name"
            :class="{ 'contact-form__input--error': errors.name }"
            name="name"
            type="text"
            autocomplete="name"
          />
          <em v-if="errors.name">{{ errors.name }}</em>
        </label>

        <label>
          <span>{{ data.fields.email }} <strong>*</strong></span>
          <input
            v-model="form.email"
            :class="{ 'contact-form__input--error': errors.email }"
            name="email"
            type="email"
            autocomplete="email"
          />
          <em v-if="errors.email">{{ errors.email }}</em>
        </label>

        <label>
          <span>{{ data.fields.phone }}</span>
          <input
            v-model="form.phone"
            name="phone"
            type="tel"
            autocomplete="tel"
          />
        </label>

        <label class="contact-section__check">
          <input v-model="form.whatsapp" name="whatsapp" type="checkbox" />
          <span>{{ data.fields.whatsapp }}</span>
        </label>

        <label>
          <span>{{ data.fields.message }} <strong>*</strong></span>
          <textarea
            v-model="form.message"
            :class="{ 'contact-form__input--error': errors.message }"
            name="message"
            rows="5"
          ></textarea>
          <em v-if="errors.message">{{ errors.message }}</em>
        </label>

        <p
          v-if="status === 'success'"
          class="contact-form__status contact-form__status--success"
        >
          {{ data.success }}
        </p>
        <p v-if="status === 'error'" class="contact-form__status contact-form__status--error">
          {{ data.error }}
        </p>

        <button
          class="shell-button shell-button--primary"
          type="submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? data.sending : data.submit }}
        </button>

        <p class="contact-form__privacy">{{ data.privacy }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
  .contact-section {
    background: var(--shell-color-surface-muted);
  }

  .contact-section__inner {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1fr);
    gap: clamp(2rem, 6vw, 5rem);
  }

  .contact-section__form {
    display: grid;
    gap: var(--shell-space-4);
    padding: var(--shell-space-6);
  }

  .banking-card {
    display: grid;
    gap: var(--shell-space-4);
    justify-items: center;
    margin-top: var(--shell-space-6);
    padding: var(--shell-space-5);
    background: white;
  }

  .banking-card__icon {
    display: grid;
    width: 3.6rem;
    aspect-ratio: 1;
    place-items: center;
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-color-accent-soft) 60%, white);
    color: var(--shell-color-lagoon);
    font-family: "Material Symbols Rounded";
    font-size: 1.95rem;
    font-feature-settings: "liga";
    font-style: normal;
    font-weight: 600;
    line-height: 1;
  }

  .banking-card__content {
    display: grid;
    gap: var(--shell-space-3);
    width: 100%;
    min-width: 0;
  }

  .banking-card h3 {
    margin: 0;
    color: rgb(10 42 94);
    font-size: 1.1rem;
    line-height: 1.3;
    text-align: center;
  }

  .banking-card dl {
    display: grid;
    gap: var(--shell-space-2);
    margin: 0;
  }

  .banking-card dl div {
    display: flex;
    justify-content: space-between;
    gap: var(--shell-space-3);
    border-bottom: 1px solid color-mix(in srgb, var(--shell-color-hairline) 70%, transparent);
    padding-bottom: var(--shell-space-2);
  }

  .banking-card dt,
  .banking-card dd,
  .banking-card p {
    margin: 0;
  }

  .banking-card dt {
    color: var(--shell-color-muted);
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .banking-card dd {
    color: var(--shell-color-ink);
    font-weight: 850;
    text-align: right;
    overflow-wrap: anywhere;
  }

  .banking-card p {
    color: var(--shell-color-subtle);
    font-size: 0.88rem;
    line-height: 1.55;
  }

  .contact-section__form label {
    display: grid;
    gap: var(--shell-space-2);
    font-weight: 700;
    color: var(--shell-color-ink);
  }

  .contact-section__form strong {
    color: var(--shell-color-accent);
  }

  .contact-section__form input,
  .contact-section__form select,
  .contact-section__form textarea {
    width: 100%;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-surface);
    color: var(--shell-color-ink);
    font: inherit;
    padding: 0.8rem 0.9rem;
  }

  .contact-section__form textarea {
    resize: vertical;
  }

  .contact-form__input--error {
    border-color: #b42318 !important;
  }

  .contact-section__form em {
    color: #b42318;
    font-size: 0.78rem;
    font-style: normal;
  }

  .contact-section__check {
    display: flex !important;
    grid-template-columns: none;
    align-items: center;
  }

  .contact-section__check input {
    width: auto;
  }

  .contact-form__honeypot {
    position: absolute;
    left: -9999px;
  }

  .contact-form__status {
    margin: 0;
    border-radius: var(--shell-radius-sm);
    padding: var(--shell-space-4);
    font-weight: 800;
    line-height: 1.5;
  }

  .contact-form__status--success {
    background: color-mix(in srgb, var(--shell-color-lagoon) 13%, white);
    color: var(--shell-color-lagoon);
  }

  .contact-form__status--error {
    background: #fff3f0;
    color: #b42318;
  }

  .contact-section__form button {
    justify-self: start;
    border: 0;
    cursor: pointer;
  }

  .contact-section__form button:disabled {
    cursor: wait;
    opacity: 0.72;
  }

  .contact-form__privacy {
    margin: 0;
    color: var(--shell-color-subtle);
    font-size: 0.85rem;
    line-height: 1.55;
  }

  @media (min-width: 768px) {
    .contact-section__inner {
      grid-template-columns: minmax(0, 0.8fr) minmax(18rem, 1fr);
    }
  }

  @media (max-width: 767px) {
    .banking-card__icon {
      width: 3.2rem;
    }
  }
</style>
