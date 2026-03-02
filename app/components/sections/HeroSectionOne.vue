<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
</script>

<template>
  <div class="tv-slider-area">
    <div class="tv-slider-wrap">
      <div class="swiper-container tv-slider-active tv-slider-animation p-relative">
        <Swiper
            :modules="[Navigation, Autoplay, Pagination]"
            :slidesPerView="1"
            :loop="true"
            :effect="'fade'"
            :autoplay="{ delay: 5000 }"
            :breakpoints="{
              '1400': {
                slidesPerView: 1,
              },
              '1200': {
                slidesPerView: 1,
              },
              '992': {
                slidesPerView: 1,
              },
              '768': {
                slidesPerView: 1,
              },
              '576': {
                slidesPerView: 1,
              },
              '0': {
                slidesPerView: 1,
              },
            }"
            :pagination="{
              clickable: true,
              el: '.swiper-pagination',
              renderBullet: (index, className) =>
                `<span class='${className}'>${index + 1}</span>`
            }"
            class="swiper-wrapper"
        >
          <SwiperSlide class="swiper-slide">
            <div class="tv-slider-overlay z-index-1 fix p-relative">
              <div class="tv-slider-bg hero-slider-bg"></div>
              <div class="container">
                <div class="row">
                  <div class="col-xl-6 col-lg-6">
                    <div class="tv-slider-content z-index-1">
                      <span class="tv-slider-subtitle">Best It Company</span>
                      <h1 class="tv-slider-title p-relative">Best It Solution Agency For Your Business
                      </h1>
                      <div class="tv-slider-text pb-20">
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews terative approaches bring table survival.
                        </p>
                      </div>
                      <div class="tv-slider-btn">
                        <NuxtLink to="/contact" class="tv-btn-primary">
                                       <span class="btn-wrap">
                                          <span class="btn-text1">Let’s Talk With Us</span>
                                          <span class="btn-text2">Let’s Talk With Us</span>
                                       </span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="tv-slider-overlay z-index-1 fix p-relative">
              <div class="tv-slider-bg hero-slider-bg-2"></div>
              <div class="container">
                <div class="row">
                  <div class="col-xl-6 col-lg-6">
                    <div class="tv-slider-content z-index-1">
                      <span class="tv-slider-subtitle">Best It Company</span>
                      <h1 class="tv-slider-title p-relative">Best It Solution Agency For Your Business
                      </h1>
                      <div class="tv-slider-text pb-20">
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews terative approaches bring table survival.
                        </p>
                      </div>
                      <div class="tv-slider-btn">
                        <NuxtLink to="/contact" class="tv-btn-primary">
                           <span class="btn-wrap">
                              <span class="btn-text1">Let’s Talk With Us</span>
                              <span class="btn-text2">Let’s Talk With Us</span>
                           </span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="tv-slider-overlay z-index-1 fix p-relative">
              <div class="tv-slider-bg hero-slider-bg-3"></div>
              <div class="container">
                <div class="row">
                  <div class="col-xl-6 col-lg-6">
                    <div class="tv-slider-content z-index-1">
                      <span class="tv-slider-subtitle">Best It Company</span>
                      <h1 class="tv-slider-title p-relative">Best It Solution Agency For Your Business
                      </h1>
                      <div class="tv-slider-text pb-20">
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews terative approaches bring table survival.
                        </p>
                      </div>
                      <div class="tv-slider-btn">
                        <NuxtLink to="/contact" class="tv-btn-primary">
                           <span class="btn-wrap">
                              <span class="btn-text1">Let’s Talk With Us</span>
                              <span class="btn-text2">Let’s Talk With Us</span>
                           </span>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="tv-slider-arrow-box d-none d-lg-block">
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>