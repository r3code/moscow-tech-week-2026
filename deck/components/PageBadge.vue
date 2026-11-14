<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

// Page badge with legacy parity: increments per click state.
// base = page number of the slide's FIRST click state (1..51).
const props = defineProps({
  base: { type: [Number, String], required: true },
  total: { type: [Number, String], default: 51 },
})

const { $clicks } = useSlideContext()
const num = computed(() =>
  String(Number(props.base) + ($clicks.value || 0)).padStart(2, '0'),
)
</script>

<template>
  <div class="page-badge">
    <span class="badge-num">{{ num }} / {{ total }}</span>
    <span class="badge-bar"></span>
  </div>
</template>
