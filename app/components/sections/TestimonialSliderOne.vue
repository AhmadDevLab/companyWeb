<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
</script>

<template>
  <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slidesPerView="1"
      :speed="1500"
      :loop="true"
      :effect="'cards'"
      :spaceBetween="35"
      :autoplay="{
        delay: 5000,
        reverseDirection: true
      }"
      :breakpoints="{
        '1400': { slidesPerView: 1 },
        '1200': { slidesPerView: 1 },
        '992': { slidesPerView: 1 },
        '768': { slidesPerView: 1 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
      }"
      :navigation="{
        prevEl: '.arrow-prev',
        nextEl: '.arrow-next',
      }"
      class="swiper-wrapper"
  >
    <SwiperSlide class="swiper-slide">
      <div class="single-testi-slider-item">
        <div class="rating">
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
        </div>
        <p>“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already are company and the reviews that I have already are all excellent. Not only the design but the code ”</p>
        <div class="author-info d-flex  align-items-center">
          <img src="@/assets/img/testimonial/testi-avatar-1.png" alt="">
          <h5>Marvin McKinney<span>Product Manager</span></h5>
        </div>
        <img src="@/assets/img/testimonial/testi-shap-1.png" alt="" class="shap-icon">
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="single-testi-slider-item">
        <div class="rating">
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
        </div>
        <p>“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already are company and the reviews that I have already are all excellent. Not only the design but the code ”</p>
        <div class="author-info d-flex  align-items-center">
          <img src="@/assets/img/testimonial/testi-avatar-1.png" alt="">
          <h5>Marvin McKinney<span>Product Manager</span></h5>
        </div>
        <img src="@/assets/img/testimonial/testi-shap-1.png" alt="" class="shap-icon">
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="single-testi-slider-item">
        <div class="rating">
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
          <i class="fa-solid fa-star-sharp"></i>
        </div>
        <p>“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already are company and the reviews that I have already are all excellent. Not only the design but the code ”</p>
        <div class="author-info  d-flex  align-items-center">
          <img src="@/assets/img/testimonial/testi-avatar-1.png" alt="">
          <h5>Marvin McKinney<span>Product Manager</span></h5>
        </div>
        <img src="@/assets/img/testimonial/testi-shap-1.png" alt="" class="shap-icon">
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>

</style>