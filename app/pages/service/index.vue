<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ServiceSectionFour from "~/components/sections/ServiceSectionFour.vue";
import TestimonialSectionOne from "~/components/sections/TestimonialSectionOne.vue";

const menus = ref([
  { label: 'Services' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Services" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- service-area-start -->
  <ServiceSectionFour/>
  <!-- service-area-end -->

  <!-- testimonial-area-start -->
  <TestimonialSectionOne/>
  <!-- testimonial-area-end -->
</template>

<style scoped>

</style>