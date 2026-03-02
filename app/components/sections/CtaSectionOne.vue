<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {});
})
</script>

<template>
  <div class="tv-cta-area pt-150 cta-one-bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-5">
          <div class="video-play-btn-area p-relative">
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
        <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-7 p-relative">
          <div class="cta-form">
            <h2>Make an Appointment</h2>
            <p>Feel free to contact with us, we don’t spam your email</p>
            <div class="tv-contact-select">
              <form action="#">
                <div class="it-contact-input-box mb-20">
                  <input type="text" placeholder="Full Name *">
                </div>
                <div class="it-contact-input-box mb-20">
                  <input type="email" placeholder="Email Here *">
                </div>
                <div class="it-contact-input-box mb-20">
                  <select class="nice-select">
                    <option value="" selected>Select an option *</option>
                    <option value="option1">Web developement</option>
                    <option value="option2">Mobile APP</option>
                    <option value="option3">Graphice Design</option>
                  </select>
                </div>

                <div class="it-contact-textarea-box ">
                  <textarea placeholder="Your Message *"></textarea>
                </div>
                <div class="it-contact-sumbit-box cta">
                  <button class="tv-btn-secondary p-relative">
                     <span class="btn-wrap">
                        <span class="btn-text1">Submit Message</span>
                        <span class="btn-text2">Submit Message</span>
                     </span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>