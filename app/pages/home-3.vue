<script setup lang="ts">
import HeroSectionThree from "~/components/sections/HeroSectionThree.vue";
import ServiceSectionThree from "~/components/sections/ServiceSectionThree.vue";
import AboutSectionThree from "~/components/sections/AboutSectionThree.vue";
import ProjectSectionOne from "~/components/sections/ProjectSectionOne.vue";
import ProcessSectionThree from "~/components/sections/ProcessSectionThree.vue";
import TeamSectionTwo from "~/components/sections/TeamSectionTwo.vue";
import PricingSectionTwo from "~/components/sections/PricingSectionTwo.vue";
import TestimonialSectionThree from "~/components/sections/TestimonialSectionThree.vue";
import CtaSectionThree from "~/components/sections/CtaSectionThree.vue";
import BlogSectionThree from "~/components/sections/BlogSectionThree.vue";
</script>

<template>
  <!-- Hero-area-start -->
  <HeroSectionThree/>
  <!-- Hero-area-end -->

  <!-- Service area start  -->
  <ServiceSectionThree/>
  <!-- Service area end  -->

  <!-- about area start -->
  <AboutSectionThree/>
  <!-- about area end -->

  <!-- project-area-start -->
  <ProjectSectionOne/>
  <!-- project-area-end -->

  <!-- process area start -->
  <ProcessSectionThree/>
  <!-- process area end -->

  <!-- team-area-start -->
  <ClientOnly>
    <TeamSectionTwo/>
  </ClientOnly>
  <!-- team-area-end -->

  <!-- pricing area start -->
  <PricingSectionTwo/>
  <!-- pricing area end -->

  <!-- testimonial area start -->
  <TestimonialSectionThree/>
  <!-- testimonial area end -->

  <!-- cta area start -->
  <CtaSectionThree/>
  <!-- cta area end -->

  <!-- blog-area start -->
  <BlogSectionThree/>
  <!-- blog-area end -->
</template>

<style scoped>

</style>