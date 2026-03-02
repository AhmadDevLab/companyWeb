<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <template v-if="route.name === 'home-2'">
    <FooterTwo/>
  </template>
  <template v-if="route.name === 'home-3'">
    <FooterThree/>
  </template>
  <template v-if="route.name !== 'home-2' && route.name !== 'home-3'">
    <FooterOne/>
  </template>
</template>

<style scoped>

</style>