<template>
  <NavBar :data="siteText['nav-bar']" />

  <main id="main-content">
    <section class="contact-page shell-section" id="contact" aria-labelledby="contact-title">
      <div class="contact-page__inner shell-container">
        <header class="contact-page__header">
          <p class="shell-eyebrow">{{ contactData.eyebrow }}</p>
          <h1 id="contact-title" class="shell-heading">{{ contactData.title }}</h1>
        </header>

        <section class="contact-page__cards" aria-label="Contact details">
          <p class="contact-page__assistive">Choose the best way to reach the team below.</p>

          <aside class="contact-page__hours shell-card" aria-labelledby="office-hours-title">
            <span class="contact-page__hours-icon" aria-hidden="true">schedule</span>
            <h2 id="office-hours-title">Office Hours</h2>
            <dl>
              <div>
                <dt>Monday to Friday</dt>
                <dd>08:00 - 17:00</dd>
              </div>
              <div>
                <dt>Saturday</dt>
                <dd>By appointment</dd>
              </div>
              <div>
                <dt>Sunday & public holidays</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </aside>

          <article
            v-for="person in contactPeople"
            :key="person.email"
            class="contact-person shell-card"
          >
            <img class="contact-person__avatar" :src="person.image" :alt="person.name" />

            <div class="contact-person__content">
              <h2>{{ person.name }}</h2>

              <a class="contact-person__link" :href="`tel:${person.phoneHref}`">
                <span class="contact-person__icon" aria-hidden="true">
                  call
                </span>
                <span class="contact-person__detail">
                  <span class="contact-person__label">Call {{ person.name }}</span>
                  {{ person.phone }}
                </span>
              </a>

              <a class="contact-person__link" :href="`mailto:${person.email}`">
                <span class="contact-person__icon" aria-hidden="true">
                  mail
                </span>
                <span class="contact-person__detail">
                  <span class="contact-person__label">Email {{ person.name }}</span>
                  {{ person.email }}
                </span>
              </a>

              <a
                class="contact-person__link"
                :href="person.whatsappHref"
                target="_blank"
                rel="noreferrer"
              >
                <span class="contact-person__icon contact-person__icon--whatsapp" aria-hidden="true">
                  chat
                </span>
                <span class="contact-person__detail">
                  <span class="contact-person__label">Message on WhatsApp</span>
                  Start a chat now
                </span>
              </a>
            </div>
          </article>
        </section>

        <div class="contact-page__content">
          <div class="contact-page__details">
            <p class="shell-lead contact-page__copy">{{ contactData.body }}</p>

            <aside class="banking-card shell-card" aria-labelledby="banking-title">
              <span class="banking-card__icon" aria-hidden="true">account_balance</span>
              <div class="banking-card__content">
                <h2 id="banking-title">{{ contactData.banking.title }}</h2>
                <dl>
                  <div v-for="item in contactData.banking.details" :key="item.label">
                    <dt>{{ item.label }}</dt>
                    <dd>{{ item.value }}</dd>
                  </div>
                </dl>
                <p>{{ contactData.banking.note }}</p>
              </div>
            </aside>
          </div>

          <form
            v-if="status !== 'success'"
            class="contact-form shell-card"
            novalidate
            @submit.prevent="handleSubmit"
          >
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
              <span>Full name <strong>*</strong></span>
              <input
                v-model="form.name"
                :class="{ 'contact-form__input--error': errors.name }"
                name="name"
                type="text"
                autocomplete="name"
              />
              <em v-if="errors.name">{{ errors.name }}</em>
            </label>

            <div class="contact-form__row">
              <label>
                <span>Email address <strong>*</strong></span>
                <input
                  v-model="form.emailAddress"
                  :class="{ 'contact-form__input--error': errors.emailAddress }"
                  name="emailAddress"
                  type="email"
                  autocomplete="email"
                />
                <em v-if="errors.emailAddress">{{ errors.emailAddress }}</em>
              </label>

              <label>
                <span>Mobile number</span>
                <input v-model="form.phoneNumber" name="phoneNumber" type="tel" autocomplete="tel" />
              </label>
            </div>

            <label>
              <span>Message <strong>*</strong></span>
              <textarea
                v-model="form.content"
                :class="{ 'contact-form__input--error': errors.content }"
                name="content"
                rows="6"
                placeholder="Tell us about your travel season, family holiday needs, or any questions."
              ></textarea>
              <em v-if="errors.content">{{ errors.content }}</em>
            </label>

            <label class="contact-form__check">
              <input v-model="form.whatsapp" name="whatsapp" type="checkbox" />
              <span>{{ contactData.fields.whatsapp }}</span>
            </label>

            <p v-if="status === 'error'" class="contact-form__status contact-form__status--error">
              Sorry, something went wrong. Please call or email us directly and we will assist you.
            </p>

            <button
              class="shell-button shell-button--primary"
              type="submit"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Sending...' : 'Send message' }}
            </button>

            <p class="contact-form__privacy">
              Your details are used only to respond to your enquiry and share relevant membership
              information.
            </p>
          </form>

          <section v-else class="contact-success shell-card" aria-live="polite">
            <p>Thank you. Your enquiry has been received and the team will be in touch.</p>
            <RouterLink class="shell-button shell-button--primary" to="/">Back home</RouterLink>
          </section>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter :data="siteText.footer" />
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { siteText } from '@/content/siteText'
  import { useSeoHead } from '@/composables/useSeoHead'
  import { useHead } from '@unhead/vue'
  import NavBar from '@/components/sections/NavBar.vue'
  import SiteFooter from '@/components/sections/SiteFooter.vue'

  const contactData = siteText.contact
  const apiUrl = import.meta.env.VITE_BROADSHEET_API_URL || ''
  const contactPeople = [
    {
      name: 'Neil',
      phone: '082 455 3180',
      phoneHref: '0824553180',
      whatsappHref: 'https://wa.me/27824553180',
      email: 'neil@sca-za.com',
      image: '/profile/neil.png',
    },
    {
      name: 'Jolene',
      phone: '083 237 0021',
      phoneHref: '0832370021',
      whatsappHref: 'https://wa.me/27832370021',
      email: 'jolene@sca-za.com',
      image: '/profile/jolene.png',
    },
  ] as const
  const isSubmitting = ref(false)
  const status = ref<'idle' | 'success' | 'error'>('idle')

  const form = reactive({
    name: '',
    emailAddress: '',
    phoneNumber: '',
    whatsapp: false,
    location: '',
    content: '',
  })

  const errors = reactive({
    name: '',
    emailAddress: '',
    content: '',
  })

  const clearErrors = () => {
    errors.name = ''
    errors.emailAddress = ''
    errors.content = ''
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

    if (!form.emailAddress.trim()) {
      errors.emailAddress = 'Email address is required'
      isValid = false
    } else if (!isValidEmail(form.emailAddress)) {
      errors.emailAddress = 'Please enter a valid email address'
      isValid = false
    }

    if (!form.content.trim()) {
      errors.content = 'Message is required'
      isValid = false
    }

    return isValid
  }

  const resetForm = () => {
    form.name = ''
    form.emailAddress = ''
    form.phoneNumber = ''
    form.whatsapp = false
    form.location = ''
    form.content = ''
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
        `Message: ${form.content.trim()}`,
        form.whatsapp ? 'Please contact me via WhatsApp' : '',
      ]
        .filter(Boolean)
        .join('\n')
      const payload = {
        name: form.name.trim(),
        emailAddress: form.emailAddress.trim(),
        phoneNumber: form.phoneNumber.trim(),
        location: form.location,
        content: details,
      }

      const response = await fetch(`${apiUrl}/v1/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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

  useSeoHead({
    title: 'Contact',
    description:
      'Request the Founding Family Information Pack for Coastal Preferred Escapes. Contact the launch team about flexible family beach holiday memberships.',
    path: '/contact',
  })

  useHead({
    title: 'Contact | Coastal Preferred Escapes',
    meta: [
      {
        name: 'description',
        content:
          'Request the Founding Family Information Pack for Coastal Preferred Escapes. Contact the launch team about flexible family beach holiday memberships.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
  })
</script>

<style scoped>
  .contact-page {
    padding-top: clamp(8rem, 14vw, 12rem);
    background:
      linear-gradient(180deg, rgb(14 107 110 / 0.08), transparent 58%),
      var(--shell-color-canvas);
  }

  .contact-page__inner {
    display: grid;
    gap: clamp(2rem, 5vw, 4rem);
  }

  .contact-page__header {
    max-width: 58rem;
  }

  .contact-page__header .shell-heading {
    max-width: 24ch;
  }

  .contact-page__content {
    display: grid;
    gap: clamp(2rem, 6vw, 5rem);
    align-items: start;
  }

  .contact-page__details {
    display: grid;
    gap: var(--shell-space-8);
  }

  .contact-page__copy {
    white-space: pre-line;
  }

  .banking-card {
    display: grid;
    gap: var(--shell-space-4);
    justify-items: center;
    padding: var(--shell-space-5);
    background: white;
  }

  .banking-card__icon {
    display: grid;
    width: 3.2rem;
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

  .banking-card h2 {
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

  .contact-page__assistive {
    grid-column: 1 / -1;
    margin: 0;
    color: var(--shell-color-muted);
    font-size: 0.95rem;
    font-weight: 700;
  }

  .contact-page__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--shell-space-4);
    align-items: stretch;
  }

  .contact-person,
  .contact-page__hours {
    display: grid;
    gap: var(--shell-space-4);
    align-content: start;
    justify-items: center;
    padding: var(--shell-space-5);
    background: white;
  }

  .contact-person__avatar {
    width: 4.8rem;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-color-lagoon) 12%, white);
    box-shadow: 0 0.55rem 1.4rem rgb(10 42 94 / 0.12);
  }

  .contact-person__content {
    display: grid;
    gap: var(--shell-space-3);
    width: 100%;
  }

  .contact-person__link {
    display: grid;
    grid-template-columns: 3.575rem minmax(0, 1fr);
    align-items: center;
    gap: var(--shell-space-3);
    border: 1px solid color-mix(in srgb, var(--shell-color-hairline) 70%, transparent);
    border-radius: var(--shell-radius-md);
    padding: 0.85rem 0.95rem;
    color: var(--shell-color-ink);
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.35;
    text-decoration: none;
    transition:
      transform 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease,
      background-color 180ms ease;
  }

  .contact-person__link:hover,
  .contact-person__link:focus-visible {
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--shell-color-accent) 40%, transparent);
    background: color-mix(in srgb, var(--shell-color-accent-soft) 42%, white);
    box-shadow: 0 0.6rem 1.4rem rgb(10 42 94 / 0.08);
    outline: none;
  }

  .contact-person__icon {
    display: grid;
    width: 3.575rem;
    aspect-ratio: 1;
    place-items: center;
    border: 1px solid color-mix(in srgb, var(--shell-color-lagoon) 24%, white);
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-color-lagoon) 10%, white);
    color: var(--shell-color-lagoon);
    font-family: "Material Symbols Rounded";
    font-size: 1.85rem;
    font-feature-settings: "liga";
    font-style: normal;
    font-weight: 600;
    line-height: 1;
    text-transform: none;
    white-space: nowrap;
  }

  .contact-person__icon--whatsapp {
    border-color: color-mix(in srgb, #25d366 32%, white);
    background: color-mix(in srgb, #25d366 14%, white);
    color: #128c4a;
  }

  .contact-person__detail {
    display: grid;
    min-width: 0;
    gap: 0.2rem;
    overflow-wrap: anywhere;
  }

  .contact-person__detail span {
    color: var(--shell-color-muted);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .contact-person__label {
    display: block;
    margin-bottom: 0.15rem;
    color: var(--shell-color-ink);
    font-size: 0.76rem;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .contact-page__hours {
    display: grid;
    width: 100%;
  }

  .contact-page__hours-icon {
    display: grid;
    width: 4.8rem;
    aspect-ratio: 1;
    place-items: center;
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-color-lagoon) 10%, white);
    color: var(--shell-color-lagoon);
    font-family: "Material Symbols Rounded";
    font-size: 2.25rem;
    font-feature-settings: "liga";
    font-style: normal;
    font-weight: 600;
    line-height: 1;
    text-transform: none;
    white-space: nowrap;
    box-shadow: 0 0.55rem 1.4rem rgb(10 42 94 / 0.08);
  }

  .contact-page__hours h2,
  .contact-person h2 {
    width: 100%;
    margin: 0;
    border-bottom: 1px solid var(--shell-color-hairline);
    padding-bottom: var(--shell-space-4);
    color: rgb(10 42 94);
    font-family:
      Montserrat, Avenir, Gotham, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.25;
    text-align: center;
  }

  .contact-page__hours dl {
    display: grid;
    width: 100%;
    gap: var(--shell-space-4);
    margin: 0;
  }

  .contact-page__hours div {
    display: flex;
    justify-content: space-between;
    gap: var(--shell-space-4);
  }

  .contact-page__hours dt,
  .contact-page__hours dd {
    margin: 0;
  }

  .contact-page__hours dt {
    color: var(--shell-color-ink);
    font-weight: 800;
  }

  .contact-page__hours dd {
    color: var(--shell-color-muted);
    text-align: right;
  }

  .contact-form {
    display: grid;
    gap: var(--shell-space-4);
    padding: var(--shell-space-6);
  }

  .contact-form__row {
    display: grid;
    gap: var(--shell-space-4);
  }

  .contact-form label {
    display: grid;
    gap: var(--shell-space-2);
    color: var(--shell-color-ink);
    font-weight: 800;
  }

  .contact-form strong {
    color: var(--shell-color-accent);
  }

  .contact-form input,
  .contact-form select,
  .contact-form textarea {
    width: 100%;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-surface);
    color: var(--shell-color-ink);
    font: inherit;
    padding: 0.8rem 0.9rem;
  }

  .contact-form textarea {
    resize: vertical;
  }

  .contact-form em {
    color: #b42318;
    font-size: 0.78rem;
    font-style: normal;
  }

  .contact-form__input--error {
    border-color: #b42318 !important;
  }

  .contact-form__check {
    display: flex !important;
    grid-template-columns: none;
    align-items: center;
  }

  .contact-form__check input {
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

  .contact-form__status--error {
    background: #fff3f0;
    color: #b42318;
  }

  .contact-form button {
    justify-self: start;
    border: 0;
    cursor: pointer;
  }

  .contact-form button:disabled {
    cursor: wait;
    opacity: 0.72;
  }

  .contact-form__privacy {
    margin: 0;
    color: var(--shell-color-subtle);
    font-size: 0.85rem;
    line-height: 1.55;
  }

  .contact-success {
    display: grid;
    min-height: 18rem;
    align-content: center;
    justify-items: start;
    gap: var(--shell-space-6);
    padding: var(--shell-space-8);
    background: white;
  }

  .contact-success p {
    max-width: 32rem;
    margin: 0;
    color: var(--shell-color-ink) !important;
    font-size: 1.1rem !important;
    font-weight: 700 !important;
    line-height: 1.6 !important;
  }

  @media (min-width: 768px) {
    .contact-page__cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .contact-form__row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .contact-page__content {
      grid-template-columns: minmax(0, 0.82fr) minmax(22rem, 1fr);
    }

    .contact-page__cards {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 560px) {
    .banking-card__icon {
      width: 3.6rem;
    }
  }
</style>
