<template>
  <div class="slide-container">
    <div class="grid-pattern" data-decor aria-hidden="true"></div>
    <MtwBadge />
    <main class="mtw-cover-main">
      <slot />
    </main>
    <MtwStamp />
  </div>
</template>

<script setup lang="ts">
// Cover slide: no header, decorative elements live in the page itself,
// version stamp bottom-right (auto date + short SHA).
</script>

<style>
/* full-canvas positioning context: page-level absolutely-positioned decor
   (circles with bottom:/right:) must anchor to the slide canvas, not a 0-height main */
.mtw-cover-main {
  position: absolute;
  inset: 0;
  z-index: 10;
}
</style>
