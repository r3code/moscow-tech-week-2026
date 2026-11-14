<script setup>
import { computed } from 'vue'
import iconsData from '@iconify-json/fa6-solid/icons.json'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
  color: { type: String, default: 'currentColor' },
})

const ICON_W = 512
const ICON_H = 512

const body = computed(() => {
  const icon = iconsData.icons[props.name]
  if (!icon) throw new Error(`FAIcon: unknown icon "${props.name}" in fa6-solid`)
  return icon.body
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${ICON_W} ${ICON_H}`"
    fill="currentColor"
    :style="{ color: color, flexShrink: 0 }"
    aria-hidden="true"
    v-html="body"
  />
</template>
