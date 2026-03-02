<script setup lang="ts">

import TeamOneSlider from "~/components/sections/TeamOneSlider.vue";
</script>

<template>
  <div class="tv-team-area pt-130 pb-130 section-bg footer-bg team-one-bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-5 col-12">
          <div class="tv-team-slider-area">
            <div class="swiper-container tv-team-slide-active">
              <ClientOnly>
                <TeamOneSlider/>
              </ClientOnly>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7 col-12 order-md-0">
          <div class="tv-team-right-area">
            <div class="tv-section-title-box mb-40">
              <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">Our Team Members</span>
              <h4 class="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right">Our Team is Ready To Help.</h4>
              <p>It is a long established fact that a reader will be distracted the readable content of a page when looking.</p>
            </div>
            <div class="tv-team-arrow-box d-flex justify-content-md-end">
              <div>
                <div class="it-fade-anim" data-fade-from="top" data-ease="bounce" data-delay=".7">
                  <button class="arrow-next mb-25">
                    <i class="fa-light fa-arrow-left-long"></i>
                  </button>
                </div>
                <div class="it-fade-anim" data-fade-from="top" data-ease="bounce" data-delay=".5">
                  <button class="arrow-prev active">
                    <i class="fa-light fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="tv-team-pagination d-flex"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>