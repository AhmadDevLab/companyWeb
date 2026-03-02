<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import PricingSectionThree from "~/components/sections/PricingSectionThree.vue";
import FaqSectionOne from "~/components/sections/FaqSectionOne.vue";

const menus = ref([
  { label: 'Pricing' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Pricing" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- price-area-start -->
  <PricingSectionThree/>
  <!-- price-area-end -->

  <!-- faq-area-start -->
  <FaqSectionOne/>
  <!-- faq-area-end -->
</template>

<style scoped>

</style>