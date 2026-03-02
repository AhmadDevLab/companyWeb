<script setup lang="ts">
import { useSearchOverlay } from "~/composables/useSearchOverlay";
import { useOffcanvas } from "~/composables/useOffcanvas";
import NavMenu from "~/components/header/NavMenu.vue";

const { openSearch } = useSearchOverlay();
const { toggleOffcanvas } = useOffcanvas();

const { isSticky } = useStickyScroll(250);
</script>

<template>
  <header class="tv-header-height">
    <!-- <div class="tv-header-top-area tv-header-top-ptb">
      <div class="container container-1750">
        <div class="row align-items-center">
          <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
            <div class="tv-header-top-list-box">
              <ul>
                <li class="d-none d-lg-inline-block">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:008757845682">(+92) 300 103 1340</a>
                  </span>
                </li>
                <li>
                  <span
                    ><i class="fa-solid fa-envelope"></i
                    ><a href="mailto:techor@gmail.com"
                      >ahmaddev0011@gmail.com</a
                    ></span
                  >
                </li>
                <li class="d-none d-xxl-inline-block">
                  <span>
                    <i class="fa-solid fa-location-dot"></i>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/@23.843848,90.3081992,17.5z?entry=ttu&amp;g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                      >Gulshe-e-Jamal Sargo, Pakistan
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6 d-none d-sm-block">
            <div
              class="tv-header-top-right d-flex align-items-center justify-content-end"
            >
              <div class="tv-header-top-social-box">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- header-area-start -->
    <div
      id="header-sticky"
      class="tv-header-area header-style-1 tv-header-ptb p-relative"
      :class="{ 'header-sticky': isSticky }"
    >
      <div class="container container-1750">
        <div class="p-relative">
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-2 col-6">
              <div class="tv-header-logo">
                <NuxtLink to="/"
                  ><img src="@/assets/img/logo/logo-white.png" alt=""
                /></NuxtLink>
              </div>
            </div>
            <div class="col-xxl-7 col-xl-7 d-none d-xl-block">
              <div class="tv-header-menu tv-header-dropdown">
                <NavMenu />
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-6">
              <div
                class="tv-header-right-action d-flex justify-content-end align-items-center"
              >
                <button
                  class="tv-header-search search-open-btn d-none d-xxl-block"
                  @click="openSearch"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <NuxtLink
                  to="/contact"
                  class="tv-btn-primary d-none d-md-block"
                >
                  <span class="btn-wrap">
                    <span class="btn-text1">Get A Quote</span>
                    <span class="btn-text2">Get A Quote</span>
                  </span>
                </NuxtLink>
                <div class="tv-header-bar">
                  <button class="tv-menu-bar" @click="toggleOffcanvas">
                    <span>
                      <i class="fa-solid fa-bars-staggered"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header-area-end -->
  </header>
</template>

<style scoped></style>
