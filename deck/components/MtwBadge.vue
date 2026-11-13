<template>
  <div class="page-badge">
    <span class="badge-num">{{ display }} / {{ TOTAL_PAGES }}</span>
    <span class="badge-bar"></span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { slideBasePages, TOTAL_PAGES } from '../data/pageMap'

// Optional manual override for pilot pages: frontmatter badgePage -> <MtwBadge :page="48"/>
const props = defineProps<{ page?: number }>()

const nav = useNav()

// Click-state aware export page number (matches legacy NN/51):
// base export page of the current slide + current click index.
const display = computed(() => {
  const clicks = Math.max(0, nav.clicks.value ?? 0)
  if (props.page != null) return String(props.page + clicks).padStart(2, '0')
  const idx = Math.max(0, (nav.currentPage.value ?? 1) - 1)
  const base = slideBasePages[idx] ?? idx + 1
  return String(base + clicks).padStart(2, '0')
})
</script>
