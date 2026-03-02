<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// const images = [
//   new URL('@/assets/img/team/team-1-1.png', import.meta.url).href,
//   new URL('@/assets/img/team/team-1-2.png', import.meta.url).href,
//   new URL('@/assets/img/team/team-1-3.png', import.meta.url).href
// ]

import img1 from '@/assets/img/team/team-1-1.png'
import img2 from '@/assets/img/team/team-1-2.png'
import img3 from '@/assets/img/team/team-1-3.png'

const images = [img1, img2, img3]

const paginationOptions = {
  el: '.tv-team-pagination',
  clickable: true,
  renderBullet: (index, className) => {
    return `<span class="${className}">
              <img src="${images[index]}" alt="Thumb ${index + 1}" />
            </span>`
  }
}
</script>

<template>
  <Swiper
      class="swiper-wrapper"
      :modules="[Navigation, Autoplay, Pagination, Navigation]"
      :slidesPerView="1"
      :speed="1500"
      :loop="true"
      :rtl="false"
      :direction="'horizontal'"
      :spaceBetween="35"
      :autoplay="{
        delay: 5000,
        reverseDirection: true
      }"
      :breakpoints="{
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
      :pagination="paginationOptions"
  >
    <SwiperSlide class="swiper-slide">
      <div class="single-team-item">
        <img src="@/assets/img/team/team-1-1.png" alt="">
        <div class="team-social">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="team-content d-flex justify-content-between align-items-center">
          <div>
            <h2 class="team-name"><NuxtLink to="/team/details">Rosy Gaggero</NuxtLink></h2>
            <p class="designation">Web Developer</p>
          </div>
          <div>
            <div class="round-shape">-</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="single-team-item">
        <img src="@/assets/img/team/team-1-2.png" alt="">
        <div class="team-social">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="team-content d-flex justify-content-between align-items-center">
          <div>
            <h2 class="team-name"><NuxtLink to="/team/details">Rosy Gaggero</NuxtLink></h2>
            <p class="designation">Web Developer</p>
          </div>
          <div>
            <div>
              <div class="round-shape">-</div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="single-team-item">
        <img src="@/assets/img/team/team-1-3.png" alt="">
        <div class="team-social">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="team-content d-flex justify-content-between align-items-center">
          <div>
            <h2 class="team-name"><NuxtLink to="/team/details">Rosy Gaggero</NuxtLink></h2>
            <p class="designation">Web Developer</p>
          </div>
          <div>
            <div>
              <div class="round-shape">-</div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>

</style>