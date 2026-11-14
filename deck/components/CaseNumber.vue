<script setup>
const props = defineProps({
  num: { type: [String, Number], required: true },
})
</script>

<template>
  <div class="case-number" aria-hidden="true">CASE {{ num }}</div>
</template>
