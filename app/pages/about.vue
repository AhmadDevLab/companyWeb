<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import AboutSectionOne from "~/components/sections/AboutSectionOne.vue";
import WhyChooseTwo from "~/components/sections/WhyChooseTwo.vue";
import CounterSectionOne from "~/components/sections/CounterSectionOne.vue";
import TeamSectionOne from "~/components/sections/TeamSectionOne.vue";
import TestimonialSectionTwo from "~/components/sections/TestimonialSectionTwo.vue";

const menus = ref([
  { label: 'About us' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="About us" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- about-area-start -->
  <AboutSectionOne/>
  <!-- about-area-end -->

  <!-- why-choose-area-start -->
  <WhyChooseTwo/>
  <!-- why-choose-area-end -->

  <!-- counter-area-start -->
  <CounterSectionOne/>
  <!-- counter-area-end -->

  <!-- team-area-start -->
  <TeamSectionOne/>
  <!-- team-area-end -->

  <!-- testimonial-area-start -->
  <TestimonialSectionTwo/>
  <!-- testimonial-area-end -->
</template>

<style scoped>

</style>