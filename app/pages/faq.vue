<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import FaqSectionOne from "~/components/sections/FaqSectionOne.vue";

const menus = ref([
  { label: 'Faq’s' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Faq’s" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- faq-area-start -->
  <FaqSectionOne/>
  <!-- faq-area-end -->
</template>

<style scoped>

</style>