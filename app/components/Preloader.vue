<script setup lang="ts">
const showPreloader = ref(true)
let timeoutId: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  timeoutId = setTimeout(() => {
    showPreloader.value = false
  }, 1000)
})

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
})
</script>

<template>
  <div v-if="showPreloader" id="preloader">
    <div class="preloader">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>

</style>