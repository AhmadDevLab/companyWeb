<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ServiceDetailsSectionOne from "~/components/sections/ServiceDetailsSectionOne.vue";

const menus = ref([
  { label: 'Service Details' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Service Details" :menu="menus"/>
  <!-- breadcrumb area end -->

  <ServiceDetailsSectionOne/>
</template>

<style scoped>

</style>