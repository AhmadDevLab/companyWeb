<script setup lang="ts">
import HeroSectionTwo from "~/components/sections/HeroSectionTwo.vue";
import CustomerSupportSectionOne from "~/components/sections/CustomerSupportSectionOne.vue";
import AboutSectionTwo from "~/components/sections/AboutSectionTwo.vue";
import ServiceSectionTwo from "~/components/sections/ServiceSectionTwo.vue";
import ProjectSectionTwo from "~/components/sections/ProjectSectionTwo.vue";
import WhyChooseSectionOne from "~/components/sections/WhyChooseSectionOne.vue";
import TestimonialSectionTwo from "~/components/sections/TestimonialSectionTwo.vue";
import CtaSectionTwo from "~/components/sections/CtaSectionTwo.vue";
import FaqSectionOne from "~/components/sections/FaqSectionOne.vue";
import BlogSectionTwo from "~/components/sections/BlogSectionTwo.vue";
import BrandSectionOne from "~/components/sections/BrandSectionOne.vue";
</script>

<template>
  <!-- Hero-area-start -->
  <HeroSectionTwo/>
  <!-- Hero-area-end -->

  <!-- Customer Support-area-start -->
  <CustomerSupportSectionOne/>
  <!-- Customer Support-area-end -->

  <!-- about-us-start -->
  <AboutSectionTwo/>
  <!-- about-us-end -->

  <!-- Service-area-start -->
  <ClientOnly>
    <ServiceSectionTwo/>
  </ClientOnly>
  <!-- Service-area-end -->

  <!-- project-area-start -->
  <ProjectSectionTwo/>
  <!-- project-area-end -->

  <!-- why-choose-area-start -->
  <WhyChooseSectionOne/>
  <!-- why-choose-area-end -->

  <!-- testimonial-area-start -->
  <TestimonialSectionTwo/>
  <!-- testimonial-area-end -->

  <!-- cta-area-start -->
  <CtaSectionTwo/>
  <!-- cta-area-end -->

  <!-- faq-area-start -->
  <FaqSectionOne/>
  <!-- faq-area-end -->

  <!-- blog-area-start -->
  <BlogSectionTwo/>
  <!-- blog-area-end -->

  <!-- brand-area-start -->
  <BrandSectionOne/>
  <!-- brand-area-end -->
</template>

<style scoped>

</style>