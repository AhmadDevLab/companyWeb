<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {});
})
</script>

<template>
  <div class="tv-hero-area tv-hero-two pb-130 pt-130 p-relative hero-bg-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6">
          <div class="tv-hero-content">
            <h6 class="tv-hero-subtitle tv-spltv-text tv-spltv-in-right">Best It Company</h6>
            <h2 class="tv-hero-title tv-spltv-text tv-spltv-in-right">Revolutionizing the Future with Innovation</h2>
            <p  class="tv-spltv-text tv-spltv-in-right">Leverage agile frameworks to provide a robust synopsis for high level overviews terative approaches bring table survival.</p>
            <div class="tv-hero-btn-wrap d-flex align-items-center">
              <NuxtLink to="/contact"  class="tv-btn-primary p-relative">
                 <span class="btn-wrap">
                    <span class="btn-text1">Let’s Talk With Us</span>
                    <span class="btn-text2">Let’s Talk With Us</span>
                 </span>
              </NuxtLink>
              <div class="tv-video-icon">
                <a data-fancybox href="https://www.youtube.com/watch?v=YoOG5H4603Y" class="popup-video ripple-white">
                  <span>
                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9005 10.6854C21.2395 11.4541 21.2395 13.3857 19.9005 14.1544L3.23761 23.7201C1.90428 24.4856 0.241875 23.523 0.241875 21.9856L0.241875 2.85419C0.241875 1.31677 1.90428 0.354247 3.23761 1.11968L19.9005 10.6854Z" fill="#fff"></path>
                      </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 order-1  wow img-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1">
          <div class="tv-hero-banner-thumbnail mr-30">
            <img src="@/assets/img/hero/hero-thumb-2.jpeg" alt="">
            <div class="experience-wrapper">
              <div class="experience-content">
                <h2>
                  <ScrollCounter :start="0" :end="18" :duration="3000" suffix="+"/>
                </h2>
                <p>Years of <span>Experience</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>