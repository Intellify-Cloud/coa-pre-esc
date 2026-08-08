<script setup lang="ts">
  import type { SectionData } from '@/content/siteText'

  defineProps<{
    data: SectionData<'team'>
  }>()
</script>

<template>
  <section id="membership" class="membership-section" aria-labelledby="membership-title">
    <div class="membership-section__inner shell-container">
      <p class="shell-eyebrow">{{ data.eyebrow }}</p>
      <h2 id="membership-title">{{ data.title }}</h2>

      <article v-if="data.members.length" class="membership-card">
        <div class="membership-card__hero" aria-labelledby="included-title">
          <div class="membership-card__hero-copy">
            <p class="membership-card__eyebrow">A calmer way to plan beach time</p>
            <h3 id="included-title">Choose the pace that suits your family</h3>
            <p>
              Start with the package that fits your plans today, then grow into richer holiday
              flexibility over time.
            </p>
            <p class="membership-card__clarifier">
              You are not buying a fixed week; your membership builds holiday value that can be used
              toward available Cabana Mio stays within your selected season.
            </p>
          </div>
          <div class="membership-card__hero-badge">Flexible by design</div>
        </div>

        <div class="membership-card__grid">
          <article
            v-for="member in data.members"
            :key="member.name"
            class="membership-tier"
            :class="{ 'membership-tier--featured': member.tier === 'preferred' }"
          >
            <div class="membership-tier__header">
              <p class="membership-tier__label">{{ member.tier }}</p>
              <h4>{{ member.name }}</h4>
            </div>

            <p class="membership-tier__bio">{{ member.bio }}</p>

            <dl class="membership-tier__meta">
              <div>
                <dt>Joining fee</dt>
                <dd>{{ member.joiningFee }}</dd>
              </div>
              <div>
                <dt>Monthly contribution</dt>
                <dd>{{ member.monthlyContribution }}</dd>
              </div>
            </dl>
          </article>
        </div>

        <footer class="membership-card__footer">
          <p>{{ data.footer.body }}</p>
          <a :href="data.footer.cta.href">{{ data.footer.cta.label }}</a>
        </footer>
      </article>

      <div v-else class="membership-section__empty shell-card">
        Add membership tiers in `siteText.ts`, or remove `team` from the section registry.
      </div>
    </div>
  </section>
</template>

<style scoped>
  .membership-section {
    padding-block: clamp(3.5rem, 7vw, 5.5rem);
    background:
      radial-gradient(circle at 50% 0%, rgb(14 107 110 / 0.11), transparent 34%),
      var(--shell-color-canvas);
  }

  .membership-section__inner {
    display: grid;
    justify-items: center;
  }

  .membership-section h2 {
    position: relative;
    margin: 0;
    color: var(--shell-color-ink);
    font-family: var(--shell-font-serif);
    font-size: clamp(1.85rem, 3vw, 2.35rem);
    font-weight: 800;
    letter-spacing: 0.05em;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
  }

  .membership-section h2::after {
    content: '';
    display: block;
    width: 3rem;
    height: 2px;
    margin: 0.85rem auto 0;
    background: #0e6b6e;
  }

  .membership-card {
    display: grid;
    width: min(100%, 1100px);
    margin-top: var(--shell-space-8);
    gap: clamp(1rem, 2vw, 1.5rem);
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--shell-color-hairline) 70%, transparent);
    border-radius: var(--shell-radius-md);
    background: var(--shell-color-surface);
    box-shadow: 0 1.15rem 2.75rem rgb(10 42 94 / 0.1);
    padding: clamp(1rem, 2vw, 1.5rem);
  }

  .membership-card__hero {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--shell-space-4);
    align-items: start;
    padding: clamp(1.1rem, 2.2vw, 1.4rem);
    border: 1px solid color-mix(in srgb, var(--shell-color-hairline) 60%, transparent);
    border-radius: calc(var(--shell-radius-md) + 0.2rem);
    background:
      linear-gradient(135deg, rgb(248 228 208 / 0.9), rgb(255 255 255)),
      color-mix(in srgb, var(--shell-color-canvas) 65%, white);
  }

  .membership-card__hero-copy h3 {
    margin: 0;
    color: var(--shell-color-ink);
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    font-weight: 900;
    line-height: 1.2;
  }

  .membership-card__hero-copy p:last-child {
    margin: 0.45rem 0 0;
    color: var(--shell-color-muted);
    font-size: 0.96rem;
    line-height: 1.55;
    max-width: 40rem;
  }

  .membership-card__hero-copy .membership-card__clarifier {
    margin-top: var(--shell-space-3);
    border-left: 3px solid #0e6b6e;
    padding-left: var(--shell-space-3);
    color: var(--shell-color-ink);
    font-size: 0.92rem;
    font-weight: 800;
  }

  .membership-card__eyebrow {
    margin: 0 0 0.2rem;
    color: #0e6b6e;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .membership-card__hero-badge {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 0.55rem 0.85rem;
    background: #0e6b6e;
    color: white;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .membership-card__grid {
    display: grid;
    gap: var(--shell-space-4);
  }

  .membership-tier {
    display: grid;
    gap: var(--shell-space-4);
    border: 1px solid color-mix(in srgb, var(--shell-color-hairline) 70%, transparent);
    border-radius: var(--shell-radius-md);
    padding: var(--shell-space-5);
    background: white;
    box-shadow: 0 0.4rem 1rem rgb(10 42 94 / 0.04);
  }

  .membership-tier--featured {
    border-color: rgb(14 107 110 / 0.35);
    background: linear-gradient(180deg, rgb(255 255 255), rgb(14 107 110 / 0.08));
    box-shadow: 0 0.8rem 1.8rem rgb(10 42 94 / 0.08);
  }

  .membership-tier__header h4 {
    margin: 0;
    color: var(--shell-color-ink);
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    font-weight: 900;
    line-height: 1.2;
  }

  .membership-tier__label {
    margin: 0 0 0.35rem;
    color: #0e6b6e;
    font-size: 0.72rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .membership-tier__bio {
    margin: 0;
    color: var(--shell-color-muted);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .membership-tier__meta {
    display: grid;
    gap: var(--shell-space-3);
    margin: 0;
  }

  .membership-tier__meta div {
    display: flex;
    justify-content: space-between;
    gap: var(--shell-space-3);
    padding-top: var(--shell-space-3);
    border-top: 1px solid color-mix(in srgb, var(--shell-color-hairline) 60%, transparent);
  }

  .membership-tier__meta dt {
    color: var(--shell-color-muted);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .membership-tier__meta dd {
    margin: 0;
    color: var(--shell-color-ink);
    font-size: 0.95rem;
    font-weight: 900;
    text-align: right;
  }

  .membership-card__benefits {
    display: grid;
    gap: var(--shell-space-3);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .membership-card__benefits li {
    display: grid;
    grid-template-columns: 1.2rem minmax(0, 1fr);
    align-items: start;
    gap: var(--shell-space-2);
    color: var(--shell-color-muted);
    font-size: 0.95rem;
    line-height: 1.35;
  }

  .membership-card__benefits span {
    position: relative;
    display: grid;
    width: 1rem;
    height: 1rem;
    place-items: center;
    border-radius: 999px;
    background: var(--shell-color-lagoon);
    color: white;
    transform: translateY(0.1rem);
  }

  .membership-card__benefits span::after {
    content: '';
    width: 0.3rem;
    height: 0.5rem;
    border: solid currentColor;
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg) translate(-1px, -1px);
  }

  .membership-card__footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: var(--shell-space-3);
    border-top: 1px solid color-mix(in srgb, var(--shell-color-hairline) 50%, transparent);
  }

  .membership-card__footer p {
    flex: 1 1 auto;
    margin: 0;
    color: var(--shell-color-ink);
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.35;
    text-align: center;
    align-self: center;
  }

  .membership-card__footer a {
    display: inline-flex;
    flex: 0 0 auto;
    min-height: 2.75rem;
    align-items: center;
    justify-content: center;
    align-self: center;
    border: 2px solid #0e6b6e;
    border-radius: var(--shell-radius-sm);
    padding: 0.65rem 1rem;
    background: #0e6b6e;
    color: white;
    font-size: 0.8rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .membership-section__empty {
    margin-top: var(--shell-space-10);
    padding: var(--shell-space-6);
    color: var(--shell-color-muted);
  }

  @media (min-width: 768px) {
    .membership-card__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .membership-card__grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (min-width: 560px) {
    .membership-card__footer {
      align-items: center;
      flex-direction: row;
      min-height: 3.25rem;
    }

    .membership-card__footer p {
      white-space: nowrap;
    }
  }
</style>
