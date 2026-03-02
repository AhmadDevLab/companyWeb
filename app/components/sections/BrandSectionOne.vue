<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
</script>

<template>
  <div class="tv-brand-area gray-bg pb-130">
    <div class="container">
      <div class="tv-brand-content pt-80">
        <div class="row">
          <div class="col-12 text-center">
            <p>Empowered professionals to connect with top-tier opportunities</p>
          </div>
        </div>
      </div>
      <div class="tv-brand-slider ">
        <div class="swiper-container tv-brand-slider-active">
          <Swiper
            :modules="[Navigation, Autoplay]"
            :slidesPerView="1"
            :speed="1500"
            :loop="true"
            :spaceBetween="30"
            :autoplay="{
              delay: 4500,
            }"
            :breakpoints="{
              '1400': { slidesPerView: 5 },
              '1200': { slidesPerView: 5 },
              '992': { slidesPerView: 5 },
              '768': { slidesPerView: 4 },
              '576': { slidesPerView: 3 },
              '0': { slidesPerView: 3 },
            }"
            class="swiper-wrapper"
          >
            <SwiperSlide class="swiper-slide">
              <div class="tv-brand-single-item">
                <img src="@/assets/img/brand/brand-1-1.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="tv-brand-single-item">
                <img src="@/assets/img/brand/brand-1-2.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="tv-brand-single-item">
                <img src="@/assets/img/brand/brand-1-1.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="tv-brand-single-item">
                <img src="@/assets/img/brand/brand-1-4.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="tv-brand-single-item">
                <img src="@/assets/img/brand/brand-1-5.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="tv-brand-single-item">
                <img src="@/assets/img/brand/brand-1-1.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="tv-brand-single-item">
                <img src="@/assets/img/brand/brand-1-4.png" alt="">
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="tv-brand-single-item">
                <img src="@/assets/img/brand/brand-1-5.png" alt="">
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>