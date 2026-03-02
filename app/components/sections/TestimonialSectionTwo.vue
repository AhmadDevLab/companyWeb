<script setup lang="ts">

import TestimonialSliderTwo from "~/components/sections/TestimonialSliderTwo.vue";
</script>

<template>
  <div class="tv-testimonial-area2 pt-130 pb-130">
    <div class="container">
      <div class="row align-items-end mb-60">
        <div class="col-xl-5 col-lg-5">
          <div class="tv-section-title-box">
            <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">Testimonial</span>
            <h4 class="tv-section-title  tv-spltv-text tv-spltv-in-right">What Our Clients Ask About Techor</h4>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7">
          <div class="tv-testimonial-nav2 text-end">
            <button class="arrow-next"><i class="fa-light fa-arrow-left-long"></i></button>
            <button class="arrow-prev"><i class="fa-light fa-arrow-right-long"></i></button>
          </div>
        </div>

      </div>
      <div class="row">
        <div class="tv-testiominal2-slider-wrap">
          <client-only>
            <TestimonialSliderTwo/>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>