<template>
  <section id="enquire" class="long-stay-enquire shell-section" aria-labelledby="enquire-title">
    <div class="long-stay-enquire__inner shell-container">
      <div class="long-stay-enquire__copy">
        <p class="shell-eyebrow">{{ data.eyebrow }}</p>
        <h2 id="enquire-title">{{ data.title }}</h2>
        <p>{{ data.body }}</p>
      </div>
      <form class="long-stay-enquire__form" novalidate @submit.prevent="handleSubmit">
        <div class="long-stay-enquire__row">
          <label class="long-stay-enquire__label" for="long-stay-name">Full name</label>
          <input
            id="long-stay-name"
            v-model="form.name"
            type="text"
            name="name"
            autocomplete="name"
            :class="{ 'long-stay-enquire__input--error': errors.name }"
          />
          <em v-if="errors.name" class="long-stay-enquire__error">{{ errors.name }}</em>
        </div>
        <div class="long-stay-enquire__row">
          <label class="long-stay-enquire__label" for="long-stay-email">Email address</label>
          <input
            id="long-stay-email"
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            :class="{ 'long-stay-enquire__input--error': errors.email }"
          />
          <em v-if="errors.email" class="long-stay-enquire__error">{{ errors.email }}</em>
        </div>
        <div class="long-stay-enquire__row">
          <label class="long-stay-enquire__label" for="long-stay-message">
            Travel dates and notes
          </label>
          <textarea
            id="long-stay-message"
            v-model="form.message"
            name="message"
            rows="4"
            :class="{ 'long-stay-enquire__input--error': errors.message }"
          ></textarea>
          <em v-if="errors.message" class="long-stay-enquire__error">{{ errors.message }}</em>
        </div>
        <button class="shell-button shell-button--primary" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Request Your 90-Day Escape' }}
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
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { LongStayData } from '@/content/siteText'

  defineProps<{
    data: LongStayData['enquire']
  }>()

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
