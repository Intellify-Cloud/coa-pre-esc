<template>
  <NavBar :data="siteText['nav-bar']" />

  <main id="main-content">
    <section class="wallet-calculator shell-section" aria-labelledby="wallet-title">
      <div class="wallet-calculator__inner shell-container">
        <button class="wallet-calculator__back" type="button" @click="goBack">
          Back to previous page
        </button>

        <div class="wallet-calculator__header">
          <p class="shell-eyebrow">Holiday Wallet Calculator</p>
          <h1 id="wallet-title" class="shell-heading">Estimate your holiday wallet.</h1>
          <p>
            Choose a membership and term to see how monthly contributions could build usable
            holiday value. This is an estimate only; final values must be confirmed with the team.
          </p>
        </div>

        <div class="wallet-calculator__panel">
          <form class="wallet-calculator__controls" aria-label="Holiday wallet estimate controls">
            <label>
              Membership
              <select v-model="selectedPlanId">
                <option v-for="plan in availablePlans" :key="plan.id" :value="plan.id">
                  {{ plan.name }}
                </option>
              </select>
            </label>

            <fieldset>
              <legend>Term</legend>
              <div class="wallet-calculator__terms">
                <label v-for="term in terms" :key="term">
                  <input v-model.number="selectedTerm" type="radio" name="term" :value="term" />
                  <span>{{ term }} months</span>
                </label>
              </div>
            </fieldset>
          </form>

          <article class="wallet-calculator__result" aria-live="polite">
            <span>Estimated wallet value</span>
            <strong>{{ formatCurrency(walletValue) }}</strong>
            <dl>
              <div>
                <dt>Monthly contribution</dt>
                <dd>{{ formatCurrency(selectedPlan.monthlyValue) }}</dd>
              </div>
              <div>
                <dt>Selected term</dt>
                <dd>{{ selectedTerm }} months</dd>
              </div>
              <div>
                <dt>Joining fee</dt>
                <dd>{{ selectedPlan.joiningFee }}</dd>
              </div>
            </dl>
            <p>
              Estimate excludes any confirmed security deposit, seasonal rules, optional add-ons,
              exchange-rate changes or final booking terms.
            </p>
            <a class="shell-button shell-button--primary" href="/contact/">
              Calculate With a Consultant
            </a>
          </article>
        </div>

        <div class="wallet-calculator__notes">
          <article>
            <h2>What the wallet may help unlock</h2>
            <p>
              Accommodation, additional nights, upgrades, golf days and optional experiences may be
              discussed with the Coastal Preferred Escapes team.
            </p>
          </article>
          <article>
            <h2>Why this is an estimate</h2>
            <p>
              The calculator uses current headline monthly values only. Final membership agreements,
              deposits, availability and booking rules remain subject to written confirmation.
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter :data="siteText.footer" />
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useHead } from '@unhead/vue'
  import { useSeoHead } from '@/composables/useSeoHead'
  import { siteText } from '@/content/siteText'
  import NavBar from '@/components/sections/NavBar.vue'
  import SiteFooter from '@/components/sections/SiteFooter.vue'

  type WalletPlan = {
    id: 'coastal-escape' | 'coastal-preferred-escape' | 'coastal-premier-escape'
    name: string
    monthlyValue: number
    joiningFee: string
    unavailable?: boolean
  }

  const terms = [12, 24, 36, 48, 60] as const
  const router = useRouter()
  const plans: WalletPlan[] = [
    {
      id: 'coastal-escape',
      name: 'Coastal Escape',
      monthlyValue: 750,
      joiningFee: 'R 2 500',
    },
    {
      id: 'coastal-preferred-escape',
      name: 'Coastal Preferred Escape',
      monthlyValue: 1050,
      joiningFee: 'R 3 500',
    },
    {
      id: 'coastal-premier-escape',
      name: 'Coastal Premier Escape',
      monthlyValue: 0,
      joiningFee: 'Future Phase',
      unavailable: true,
    },
  ]

  const availablePlans = computed(() => plans.filter((plan) => !plan.unavailable))
  const selectedPlanId = ref<WalletPlan['id']>('coastal-escape')
  const selectedTerm = ref<(typeof terms)[number]>(24)
  const fallbackPlan = plans[0]!
  const selectedPlan = computed<WalletPlan>(
    () => availablePlans.value.find((plan) => plan.id === selectedPlanId.value) ?? fallbackPlan,
  )
  const walletValue = computed(() => selectedPlan.value.monthlyValue * selectedTerm.value)
  const formatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  })

  const formatCurrency = (value: number) => formatter.format(value).replace('ZAR', 'R')

  const goBack = () => {
    const referrer = document.referrer ? new URL(document.referrer) : null

    if (window.history.length > 1 && referrer?.origin === window.location.origin) {
      router.back()
      return
    }

    router.push('/#membership')
  }

  useSeoHead({
    title: 'Holiday Wallet Calculator',
    description: `Estimate how ${siteText.site.name} monthly contributions could build holiday value over 12 to 60 months.`,
    path: '/holiday-wallet-calculator/',
  })

  useHead({
    title: `Holiday Wallet Calculator | ${siteText.site.name}`,
    meta: [
      {
        name: 'description',
        content: `Estimate how ${siteText.site.name} monthly contributions could build holiday value over 12 to 60 months.`,
      },
      { name: 'robots', content: 'index, follow' },
    ],
  })
</script>

<style scoped>
  .wallet-calculator {
    padding-top: clamp(7rem, 13vw, 10rem);
    background:
      linear-gradient(180deg, rgb(14 107 110 / 0.08), transparent 48%),
      var(--shell-color-canvas);
  }

  .wallet-calculator__inner,
  .wallet-calculator__header,
  .wallet-calculator__controls,
  .wallet-calculator__result,
  .wallet-calculator__notes {
    display: grid;
  }

  .wallet-calculator__inner {
    gap: clamp(2rem, 5vw, 3.5rem);
  }

  .wallet-calculator__back {
    justify-self: start;
    border: 1px solid var(--shell-color-hairline);
    border-radius: 999px;
    background: white;
    padding: 0.65rem 1rem;
    color: var(--shell-color-ink);
    font: inherit;
    font-size: 0.82rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 0.55rem 1.5rem rgb(10 42 94 / 0.08);
  }

  .wallet-calculator__back:hover {
    background: var(--shell-color-ink);
    color: white;
  }

  .wallet-calculator__header {
    max-width: 58rem;
    gap: var(--shell-space-4);
  }

  .wallet-calculator__header .shell-heading,
  .wallet-calculator__header p {
    margin: 0;
  }

  .wallet-calculator__header p:not(.shell-eyebrow) {
    color: var(--shell-color-muted) !important;
    font-size: clamp(1rem, 1.5vw, 1.18rem) !important;
    line-height: 1.65 !important;
  }

  .wallet-calculator__panel {
    display: grid;
    gap: var(--shell-space-6);
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-md);
    background: white;
    padding: clamp(1rem, 3vw, 2rem);
    box-shadow: 0 1rem 2.5rem rgb(10 42 94 / 0.1);
  }

  .wallet-calculator__controls {
    align-content: start;
    gap: var(--shell-space-5);
  }

  .wallet-calculator__controls label,
  .wallet-calculator__controls legend {
    color: var(--shell-color-ink);
    font-size: 0.86rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .wallet-calculator__controls select {
    width: 100%;
    min-height: 3rem;
    margin-top: var(--shell-space-2);
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-sm);
    background: var(--shell-color-canvas);
    padding-inline: 0.9rem;
    color: var(--shell-color-ink);
    font: inherit;
    font-weight: 700;
  }

  .wallet-calculator__controls fieldset {
    min-width: 0;
    margin: 0;
    border: 0;
    padding: 0;
  }

  .wallet-calculator__terms {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.6rem;
    margin-top: var(--shell-space-2);
  }

  .wallet-calculator__terms label {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    border: 1px solid var(--shell-color-hairline);
    border-radius: var(--shell-radius-sm);
    background: var(--shell-color-canvas);
    padding: 0.75rem;
    text-transform: none;
  }

  .wallet-calculator__result {
    gap: var(--shell-space-4);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-ink);
    padding: clamp(1.25rem, 3vw, 2rem);
    color: white;
  }

  .wallet-calculator__result span {
    color: rgb(255 255 255 / 0.78);
    font-size: 0.8rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .wallet-calculator__result strong {
    color: white;
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 900;
    line-height: 1;
  }

  .wallet-calculator__result dl {
    display: grid;
    gap: 0.75rem;
    margin: 0;
  }

  .wallet-calculator__result div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1px solid rgb(255 255 255 / 0.16);
    padding-top: 0.75rem;
  }

  .wallet-calculator__result dt,
  .wallet-calculator__result dd {
    margin: 0;
    color: white;
  }

  .wallet-calculator__result dt {
    color: rgb(255 255 255 / 0.72);
  }

  .wallet-calculator__result p {
    margin: 0;
    color: rgb(255 255 255 / 0.82) !important;
    font-size: 0.9rem !important;
    line-height: 1.5 !important;
  }

  .wallet-calculator__result .shell-button {
    justify-self: start;
  }

  .wallet-calculator__notes {
    gap: var(--shell-space-4);
  }

  .wallet-calculator__notes article {
    border-left: 3px solid var(--shell-color-accent);
    padding-left: var(--shell-space-4);
  }

  .wallet-calculator__notes h2 {
    margin: 0;
    color: var(--shell-color-ink);
    font-size: 1.1rem;
    font-weight: 900;
  }

  .wallet-calculator__notes p {
    margin: var(--shell-space-2) 0 0;
    color: var(--shell-color-muted) !important;
    line-height: 1.6 !important;
  }

  @media (min-width: 768px) {
    .wallet-calculator__panel {
      grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    }

    .wallet-calculator__terms {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .wallet-calculator__notes {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
