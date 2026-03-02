<script setup lang="ts">
import NavMenu from "~/components/header/NavMenu.vue";
import {useSearchOverlay} from "~/composables/useSearchOverlay";
import {useOffcanvas} from "~/composables/useOffcanvas";
const { isSticky } = useStickyScroll(250);
const { openSearch } = useSearchOverlay();
const { toggleOffcanvas } = useOffcanvas();
</script>

<template>
  <header class="tv-header-height  ">

    <!-- header-area-start -->
    <div
        id="header-sticky"
        class="tv-header-area header-style-3 tv-header-transparent  tv-header-ptb p-relative"
        :class="{ 'header-sticky': isSticky }"
    >

      <div class="container container-1750 ">
        <div class="p-relative">
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-2 col-6">
              <div class="tv-header-logo">
                <NuxtLink to="/"><img src="@/assets/img/logo/logo-white2.png" alt=""></NuxtLink>
              </div>
            </div>
            <div class=" col-xxl-7 col-xl-7 d-none d-xl-block text-center">
              <div class="tv-header-menu tv-header-dropdown">
                <NavMenu/>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-6">
              <div class="tv-header-right-action d-flex justify-content-end align-items-center">
                <button class="tv-header-search search-open-btn d-none d-xxl-block" @click="openSearch">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <NuxtLink to="/contact"  class="tv-btn-primary p-relative d-none d-xxl-block">
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

<style scoped>

</style>