<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
</script>

<template>
  <div class="tv-team-area2 pb-130 pt-130">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
          <div class="tv-section-title-box pb-20 pb-md-0">
            <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">Our Team Members</span>
            <h4 class="tv-section-title tv-spltv-text tv-spltv-in-right">Our Team is Ready To Help.</h4>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
          <div class="tv-team-arrow-box2 d-flex">

            <div class="it-fade-anim" data-fade-from="top" data-ease="bounce" data-delay=".7s">
              <button class="arrow-next">
                <i class="fa-light fa-arrow-left-long"></i>
              </button>
            </div>
            <div class="it-fade-anim" data-fade-from="top" data-ease="bounce" data-delay=".5s">
              <button class="arrow-prev active">
                <i class="fa-light fa-arrow-right-long"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
      <div class="tv-team-slider-area2">
        <div class="swiper-container tv-team-slider-active2">
          <Swiper
              class="swiper-wrapper"
              :modules="[Autoplay, Navigation]"
              :slidesPerView="4"
              :speed="1500"
              :loop="true"
              :spaceBetween="30"
              :autoplay="{
                delay: 4500,
              }"
              :breakpoints="{
                '1400': { slidesPerView: 4 },
                '1200': { slidesPerView: 4 },
                '992': { slidesPerView: 3 },
                '768': { slidesPerView: 2 },
                '576': { slidesPerView: 2 },
                '0': { slidesPerView: 1 },
              }"
              :navigation="{
                prevEl: '.arrow-prev',
                nextEl: '.arrow-next',
              }"
          >
            <SwiperSlide class="swiper-slide">
              <div class="single-team-item style-2">
                <img src="@/assets/img/team/team-1-2.png" alt="">
                <div class="team-social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="team-content d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="team-name"><NuxtLink to="/team/details">Arush Aggarwal</NuxtLink></h2>
                    <p class="designation">Founder & Ceo</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="single-team-item style-2">
                <img src="@/assets/img/team/team-1-3.png" alt="">
                <div class="team-social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="team-content d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="team-name"><NuxtLink to="/team/details">Marvin McKinney</NuxtLink></h2>
                    <p class="designation">Product Designer</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="single-team-item style-2">
                <img src="@/assets/img/team/team-1-5.png" alt="">
                <div class="team-social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="team-content d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="team-name"><NuxtLink to="/team/details">Kevin Martin</NuxtLink></h2>
                    <p class="designation">Product Designer</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="single-team-item style-2">
                <img src="@/assets/img/team/team-1-3.png" alt="">
                <div class="team-social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="team-content d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="team-name"><NuxtLink to="/team/details">Sophia Rodriguez</NuxtLink></h2>
                    <p class="designation">Creative Director</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="single-team-item style-2">
                <img src="@/assets/img/team/team-1-3.png" alt="">
                <div class="team-social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="team-content d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="team-name"><NuxtLink to="/team/details">Marvin McKinney</NuxtLink></h2>
                    <p class="designation">Product Designer</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="single-team-item style-2">
                <img src="@/assets/img/team/team-1-5.png" alt="">
                <div class="team-social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="team-content d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="team-name"><NuxtLink to="/team/details">Kevin Martin</NuxtLink></h2>
                    <p class="designation">Product Designer</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="single-team-item style-2">
                <img src="@/assets/img/team/team-1-3.png" alt="">
                <div class="team-social">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div class="team-content d-flex justify-content-between align-items-center">
                  <div>
                    <h2 class="team-name"><NuxtLink to="/team/details">Sophia Rodriguez</NuxtLink></h2>
                    <p class="designation">Creative Director</p>
                  </div>

                </div>
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