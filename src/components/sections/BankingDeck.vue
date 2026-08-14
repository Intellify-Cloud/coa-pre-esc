<script setup lang="ts">
  import { computed, ref } from 'vue'

  type BankingDetail = {
    label: string
    value: string
  }

  const props = withDefaults(
    defineProps<{
      data: {
        title: string
        note: string
        details: readonly BankingDetail[]
      }
      heading?: string
      subtitle?: string
    }>(),
    {
      heading: 'Banking details',
      subtitle: 'For CPE holiday booking payments',
    },
  )

  const hasCopiedBankingDetails = ref(false)
  const bankingDetailsText = computed(() =>
    [
      props.data.title,
      ...props.data.details.map((item) => `${item.label}: ${item.value}`),
      props.data.note,
    ].join('\n'),
  )

  const copyBankingDetails = async () => {
    await navigator.clipboard.writeText(bankingDetailsText.value)
    hasCopiedBankingDetails.value = true
    window.setTimeout(() => {
      hasCopiedBankingDetails.value = false
    }, 1800)
  }
</script>

<template>
  <section class="banking-deck" aria-labelledby="banking-deck-title">
    <div class="shell-container banking-deck__inner">
      <div class="banking-deck__heading">
        <div class="banking-deck__title-group">
          <span aria-hidden="true">account_balance</span>
          <div>
            <h2 id="banking-deck-title">{{ heading }}</h2>
            <p>{{ subtitle }}</p>
          </div>
        </div>

        <button class="banking-deck__copy" type="button" @click="copyBankingDetails">
          <span aria-hidden="true">content_copy</span>
          {{ hasCopiedBankingDetails ? 'Copied' : 'Copy details' }}
        </button>
      </div>

      <dl class="banking-deck__details">
        <div v-for="item in data.details" :key="item.label">
          <dt>{{ item.label }}</dt>
          <dd>{{ item.value }}</dd>
        </div>
      </dl>

      <p class="banking-deck__note">{{ data.note }}</p>
    </div>
  </section>
</template>

<style scoped>
  .banking-deck {
    padding-block: clamp(2rem, 5vw, 3rem);
    background: var(--shell-color-canvas);
  }

  .banking-deck__inner {
    display: grid;
    gap: 1.25rem;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: white;
    padding: clamp(1.1rem, 3vw, 1.75rem);
    box-shadow: 0 1rem 2.25rem rgb(10 42 94 / 0.08);
  }

  .banking-deck__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid var(--shell-color-hairline);
    padding-bottom: 1rem;
  }

  .banking-deck__title-group {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 0.75rem;
  }

  .banking-deck__title-group > span {
    display: grid;
    width: 1.8rem;
    aspect-ratio: 1;
    place-items: center;
    color: var(--shell-color-ink);
    font-family: "Material Symbols Rounded";
    font-size: 1.45rem;
    font-feature-settings: "liga";
    font-weight: 600;
    line-height: 1;
  }

  .banking-deck__heading h2 {
    margin: 0;
    color: var(--shell-color-ink);
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    font-weight: 900;
    line-height: 1.15;
  }

  .banking-deck__heading p {
    margin: 0.15rem 0 0;
    color: var(--shell-color-muted);
    font-size: 0.92rem;
    font-weight: 650;
    line-height: 1.25;
  }

  .banking-deck__copy {
    display: none;
    align-items: center;
    gap: 0.4rem;
    min-height: 2.4rem;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-sm);
    background: white;
    padding: 0.55rem 0.85rem;
    color: var(--shell-color-ink);
    font: inherit;
    font-size: 0.9rem;
    font-weight: 800;
    cursor: pointer;
  }

  .banking-deck__copy span {
    font-family: "Material Symbols Rounded";
    font-size: 1.1rem;
    font-feature-settings: "liga";
    line-height: 1;
  }

  .banking-deck__details {
    display: grid;
    gap: 0;
    margin: 0;
  }

  .banking-deck__details div {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: 0.75rem;
    align-items: start;
    border-bottom: 1px solid color-mix(in srgb, var(--shell-color-hairline) 76%, transparent);
    padding-block: 0.75rem;
  }

  .banking-deck__details dt,
  .banking-deck__details dd,
  .banking-deck__note {
    margin: 0;
  }

  .banking-deck__details dt {
    color: var(--shell-color-muted);
    font-size: 0.9rem;
    font-weight: 650;
    line-height: 1.25;
  }

  .banking-deck__details dd {
    color: var(--shell-color-ink);
    font-size: 0.9rem;
    font-weight: 850;
    line-height: 1.2;
    overflow-wrap: anywhere;
    text-align: right;
  }

  .banking-deck__note {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.75rem;
    border-radius: var(--shell-radius-sm);
    background: color-mix(in srgb, var(--shell-color-accent-soft) 62%, white);
    padding: 0.95rem 1rem;
    color: var(--shell-color-subtle);
    font-size: 0.9rem;
    font-weight: 650;
    line-height: 1.5;
  }

  .banking-deck__note::before {
    content: "info";
    color: var(--shell-color-lagoon);
    font-family: "Material Symbols Rounded";
    font-size: 1.05rem;
    font-feature-settings: "liga";
    line-height: 1.35;
  }

  @media (min-width: 1024px) {
    .banking-deck__copy {
      display: inline-flex;
    }

    .banking-deck__details {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0 2.5rem;
    }

    .banking-deck__details div {
      display: block;
      min-height: 4rem;
      padding-block: 0.8rem;
    }

    .banking-deck__details div:first-child {
      grid-column: 1 / -1;
      min-height: auto;
    }

    .banking-deck__details div:nth-child(8) {
      grid-column: span 2;
    }

    .banking-deck__details dd {
      margin-top: 0.3rem;
      font-size: 0.98rem;
      text-align: left;
    }
  }
</style>
