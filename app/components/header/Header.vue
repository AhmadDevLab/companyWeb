<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <template v-if="route.name !== 'home-2' && route.name !== 'home-3'">
    <HeaderOne />
  </template>
</template>

<style scoped></style>
