<script setup>
import { ref, onMounted } from 'vue'

const version = ref('v…')
onMounted(async () => {
  try {
    const res = await fetch('/version.json')
    const data = await res.json()
    version.value = data.version || 'v?'
  } catch (e) {
    version.value = 'v-n/a'
  }
})
</script>

<template>
  <div class="version-stamp">{{ version }}</div>
</template>
