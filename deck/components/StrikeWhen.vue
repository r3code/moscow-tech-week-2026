<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

// Toggles a CSS property on already-visible content at click N
// (legacy pattern: text-decoration none -> line-through on the same element).
const props = defineProps({
  at: { type: [Number, String], required: true },
  prop: { type: String, default: 'textDecoration' },
  on: { type: String, default: 'line-through' },
  off: { type: String, default: 'none' },
})

const { $clicks } = useSlideContext()
const style = computed(() => ({
  [props.prop]: $clicks.value >= Number(props.at) ? props.on : props.off,
}))
</script>

<template>
  <span :style="style"><slot /></span>
</template>
