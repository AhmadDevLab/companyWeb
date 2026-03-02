<script setup lang="ts">

import TestimonialSliderThree from "~/components/sections/TestimonialSliderThree.vue";
</script>

<template>
  <div class="tv-testimonial-area3 pb-130 pt-130">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="tv-section-title-box mb-60">
            <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">Testimonial</span>
            <h4 class="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right">What Our Clients Ask <br> About  Techor</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="tv-testmonial-wrap3">
      <ClientOnly>
        <TestimonialSliderThree/>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>

</style>