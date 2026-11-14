<template>
  <div class="mtw-case" aria-hidden="true">CASE {{ n }}</div>
</template>

<script setup lang="ts">
defineProps<{ n: string | number }>()
</script>
