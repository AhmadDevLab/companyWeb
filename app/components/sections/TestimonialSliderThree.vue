<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
</script>

<template>
  <div class="swiper-container tv-testi-slider-active3">
    <Swiper
      :modules="[Pagination, Autoplay]"
      :slidesPerView="1"
      :speed="1500"
      :loop="true"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 4500,
      }"
        :breakpoints="{
        '1400': { slidesPerView: 2, centeredSlides: true },
        '1200': { slidesPerView: 2, centeredSlides: true },
        '992': { slidesPerView: 2, centeredSlides: true },
        '768': { slidesPerView: 1, centeredSlides: true },
        '576': { slidesPerView: 1, centeredSlides: true },
        '0': { slidesPerView: 1, centeredSlides: true },
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      class="swiper-wrapper"
    >
      <SwiperSlide class="swiper-slide">
        <div class="single-testi-slider-item style-3">
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
        <div class="single-testi-slider-item style-3">
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
        <div class="single-testi-slider-item style-3">
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
      <SwiperSlide class="swiper-slide">
        <div class="single-testi-slider-item style-3">
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
      <SwiperSlide class="swiper-slide">
        <div class="single-testi-slider-item style-3">
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
      <SwiperSlide class="swiper-slide">
        <div class="single-testi-slider-item style-3">
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
  </div>
</template>

<style scoped>

</style>