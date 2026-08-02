<template>
  <section class="coming-soon-hero">
    <video class="coming-soon-hero__video" autoplay muted loop playsinline aria-hidden="true">
      <source src="/videos/beach.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div
      class="coming-soon-hero__overlay"
      role="region"
      aria-label="Coastal Prepaid Escapes coming soon"
    >
      <div class="coming-soon-hero__content">
        <p class="coming-soon-hero__eyebrow">Coastal Prepaid Escapes</p>
        <h1 class="coming-soon-hero__title">Coming Soon</h1>
        <p class="coming-soon-hero__body">
          Your next coastal break is taking shape. We are preparing a simpler way to plan and prepay
          for beach escapes.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // Video is served from /videos/beach.mp4 in the public folder.
</script>

<style scoped>
  .coming-soon-hero {
    position: relative;
    min-height: 100svh;
    width: 100%;
    overflow: hidden;
    background: #0b2d35;
  }

  .coming-soon-hero__video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .coming-soon-hero__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: clamp(1.25rem, 4vw, 3rem);
    background:
      radial-gradient(circle at 50% 42%, rgba(255, 255, 255, 0.08), transparent 34rem),
      linear-gradient(180deg, rgba(4, 31, 38, 0.28), rgba(4, 31, 38, 0.72));
  }

  .coming-soon-hero__content {
    width: min(100%, 760px);
    color: #fff;
    text-align: center;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.42);
  }

  .coming-soon-hero__eyebrow {
    margin: 0 0 0.7rem;
    font-size: clamp(0.78rem, 1.8vw, 0.95rem);
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .coming-soon-hero__title {
    margin: 0 0 0.8rem;
    font-size: clamp(3rem, 11vw, 7.5rem);
    line-height: 0.9;
    font-weight: 800;
  }

  .coming-soon-hero__body {
    margin: 0 auto;
    max-width: 38rem;
    font-size: clamp(1rem, 2.4vw, 1.32rem);
    line-height: 1.55;
  }
</style>
