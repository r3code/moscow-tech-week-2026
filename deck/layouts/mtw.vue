<template>
  <div class="slide-container">
    <div class="grid-pattern" data-decor aria-hidden="true"></div>
    <div v-if="frontmatter?.case" class="mtw-case" aria-hidden="true">CASE {{ frontmatter.case }}</div>
    <MtwBadge :page="frontmatter?.badgePage" />
    <header class="mtw-header">
      <div class="mtw-accent-bar"></div>
      <div>
        <div v-if="frontmatter?.titleEn" class="header-eyebrow">{{ frontmatter.titleEn }}</div>
        <h1 class="header-title">{{ frontmatter?.titleRu }}</h1>
      </div>
    </header>
    <main class="mtw-main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Standard content slide: top full-width header (accent-bar + EN eyebrow + RU title),
// page badge top-right (frontmatter.badgePage overrides auto click-map number),
// optional CASE watermark anchored to the canvas (frontmatter.case).
defineProps<{
  frontmatter?: Record<string, any>
}>()
</script>
