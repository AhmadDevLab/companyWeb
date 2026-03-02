<script setup lang="ts">

import TestimonialSliderOne from "~/components/sections/TestimonialSliderOne.vue";
</script>

<template>
  <div class="tv-testimonial-area pt-130 pb-130 testimonial-one-bg">
    <div class="container">
      <div class="row">
        <div class="col-xxl-4 col-xl-5 col-lg-6 col">
          <div class="testimonial-left-content">
            <div class="tv-section-title-box mb-40">
              <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">Testimonial</span>
              <h4 class="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right">What Our Clients Say About Us</h4>
              <p>Each demo built with Teba will look different. You can customize almost anything in the appearance of your website.</p>
            </div>
            <div class="tv-testi-arrow-box d-flex">

              <div class="it-fade-anim">
                <button class="arrow-next">
                  <i class="fa-light fa-arrow-left-long"></i>
                </button>
              </div>
              <div class="it-fade-anim">
                <button class="arrow-prev active">
                  <i class="fa-light fa-arrow-right-long"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
        <div class="col-xxl-8 col-xl-7 col-lg-6 col">
          <div class="tv-testmonial-wrap">
            <div class="swiper-container tv-testi-slider-active">
              <ClientOnly>
                <TestimonialSliderOne/>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>