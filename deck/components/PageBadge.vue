<script setup>
const props = defineProps({
  num: { type: String, required: true },
  total: { type: String, default: '51' },
})
</script>

<template>
  <div class="page-badge">
    <span class="badge-num">{{ num }} / {{ total }}</span>
    <span class="badge-bar"></span>
  </div>
</template>
