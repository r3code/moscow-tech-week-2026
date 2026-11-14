<script setup>
import { computed } from 'vue'
import iconsData from '@iconify-json/fa6-solid/icons.json'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
  color: { type: String, default: 'currentColor' },
})

// Legacy FA5 names -> FA6 solid names (verified against icons.json)
const FA5_TO_FA6 = {
  'exclamation-triangle': 'triangle-exclamation',
  'check-circle': 'circle-check',
  'times-circle': 'circle-xmark',
  'times': 'xmark',
  'question-circle': 'circle-question',
  'info-circle': 'circle-info',
  'hdd': 'hard-drive',
  'project-diagram': 'diagram-project',
  'search': 'magnifying-glass',
  'history': 'clock-rotate-left',
  'smile': 'face-smile',
  'cog': 'gear',
  'cogs': 'gears',
  'shield-alt': 'shield-halved',
  'file-alt': 'file-lines',
  'tachometer-alt': 'gauge-high',
  'compress-arrows-alt': 'arrows-to-dot',
  'user-cog': 'user-gear',
}

const ICON_W = 512
const ICON_H = 512

const body = computed(() => {
  const fa6 = FA5_TO_FA6[props.name] || props.name
  const icon = iconsData.icons[fa6]
  if (!icon) throw new Error(`FAIcon: unknown icon "${props.name}" (fa6: "${fa6}") in fa6-solid`)
  return icon.body
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${ICON_W} ${ICON_H}`"
    fill="currentColor"
    :style="{ color: color, flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }"
    aria-hidden="true"
    v-html="body"
  />
</template>
