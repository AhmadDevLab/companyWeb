<script setup lang="ts">
const showBackTop = ref(false)

let ticking = false

const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      showBackTop.value = window.scrollY > 20
      ticking = false
    })
    ticking = true
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // native + performant
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, {passive: true})
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <button
      class="scroll-top scroll-to-target"
      :class="{ open: showBackTop }"
      @click.prevent="scrollToTop"
  >
    <i class="far fa-angle-double-up"></i>
  </button>
</template>

<style scoped>

</style>