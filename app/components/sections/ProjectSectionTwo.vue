<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {});
})
</script>

<template>
  <div class="tv-project-area2 pt-130 pb-130">
    <div class="container">
      <div class="row align-items-end mb-60">
        <div class="col-xl-5 col-lg-5">
          <div class="tv-section-title-box">
            <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">Our Project</span>
            <h4 class="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right">Our latest project triumphs</h4>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7 text-end  ">
          <div class="tv-fade-anim button" data-fade-from="top" data-ease="bounce" data-delay=".5s">
            <NuxtLink to="/contact" class="tv-btn-primary p-relative">
              <span class="btn-wrap">
                 <span class="btn-text1">Know More</span>
                 <span class="btn-text2">Know More</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
          <div class="tv-single-project-item2 mb-30">
            <img src="@/assets/img/project/project-2-1.png" alt="">
            <div class="project-content">
              <div>
                <p>Analytics</p>
                <h6><NuxtLink to="/project/details">Data Tracking & Analysis</NuxtLink></h6>
              </div>
              <div>
                 <span class="video-icon">
                    <a class="popup-video ripple-white" data-fancybox href="https://www.youtube.com/watch?v=YoOG5H4603Y"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.2457 6.26939C14.5763 7.03972 14.5763 8.96076 13.2457 9.73109L3.59037 15.321C2.25704 16.0929 0.588294 15.1308 0.588294 13.5902L0.588295 2.4103C0.588295 0.869635 2.25704 -0.0924798 3.59037 0.67945L13.2457 6.26939Z" fill="white"/>
                       </svg>
                       </a>
                 </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tv-single-project-item2 mb-30">
            <img src="@/assets/img/project/project-2-2.png" alt="">
            <div class="project-content">
              <div>
                <p>Analytics</p>
                <h6><NuxtLink to="/project/details">Data Tracking & Analysis</NuxtLink></h6>
              </div>
              <div>
                           <span class="video-icon">
                              <a class="popup-video ripple-white" data-fancybox href="https://www.youtube.com/watch?v=YoOG5H4603Y"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M13.2457 6.26939C14.5763 7.03972 14.5763 8.96076 13.2457 9.73109L3.59037 15.321C2.25704 16.0929 0.588294 15.1308 0.588294 13.5902L0.588295 2.4103C0.588295 0.869635 2.25704 -0.0924798 3.59037 0.67945L13.2457 6.26939Z" fill="white"/>
                                 </svg>
                                 </a>
                           </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
          <div class="tv-single-project-item2 mb-30">
            <img src="@/assets/img/project/project-2-3.png" alt="">
            <div class="project-content">
              <div>
                <p>Analytics</p>
                <h6><NuxtLink to="/project/details">Data Tracking & Analysis</NuxtLink></h6>
              </div>
              <div>
                 <span class="video-icon">
                    <a class="popup-video ripple-white" data-fancybox href="https://www.youtube.com/watch?v=YoOG5H4603Y"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.2457 6.26939C14.5763 7.03972 14.5763 8.96076 13.2457 9.73109L3.59037 15.321C2.25704 16.0929 0.588294 15.1308 0.588294 13.5902L0.588295 2.4103C0.588295 0.869635 2.25704 -0.0924798 3.59037 0.67945L13.2457 6.26939Z" fill="white"/>
                       </svg>
                       </a>
                 </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
          <div class="tv-single-project-item2 mb-30">
            <img src="@/assets/img/project/project-2-4.png" alt="">
            <div class="project-content">
              <div>
                <p>Analytics</p>
                <h6><NuxtLink to="/project/details">Data Tracking & Analysis</NuxtLink></h6>
              </div>
              <div>
                 <span class="video-icon">
                    <a class="popup-video ripple-white" data-fancybox href="https://www.youtube.com/watch?v=YoOG5H4603Y"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.2457 6.26939C14.5763 7.03972 14.5763 8.96076 13.2457 9.73109L3.59037 15.321C2.25704 16.0929 0.588294 15.1308 0.588294 13.5902L0.588295 2.4103C0.588295 0.869635 2.25704 -0.0924798 3.59037 0.67945L13.2457 6.26939Z" fill="white"/>
                       </svg>
                       </a>
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 wow itfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
          <div class="tv-single-project-item2">
            <img src="@/assets/img/project/project-2-5.png" alt="">
            <div class="project-content">
              <div>
                <p>Analytics</p>
                <h6><NuxtLink to="/project/details">Data Tracking & Analysis</NuxtLink></h6>
              </div>
              <div>
                           <span class="video-icon">
                              <a class="popup-video ripple-white" data-fancybox href="https://www.youtube.com/watch?v=YoOG5H4603Y"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M13.2457 6.26939C14.5763 7.03972 14.5763 8.96076 13.2457 9.73109L3.59037 15.321C2.25704 16.0929 0.588294 15.1308 0.588294 13.5902L0.588295 2.4103C0.588295 0.869635 2.25704 -0.0924798 3.59037 0.67945L13.2457 6.26939Z" fill="white"/>
                                 </svg>
                                 </a>
                           </span>
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