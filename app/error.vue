<script setup lang="ts">
import type { NuxtError } from '#app'
import Breadcrumb from "~/components/sections/Breadcrumb.vue";

const props = defineProps<{ error: NuxtError }>()

const menus = ref([
  { label: '404' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="404" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- error page area start -->
  <div class="tv-error-area pt-130 pb-125">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-12 col-xl-7 col-lg-7 col-md-9">
          <div class="tv-error-thumb text-center mb-120 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
            <img src="@/assets/img/about/error.png" alt="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="tv-error-content text-center">
            <h5 class="tv-section-title pb-40 tv-spltv-text tv-spltv-in-right">We’re Sorry Page Not Found</h5>
            <div class="tv-fade-anim" data-fade-from="top" data-ease="bounce" data-delay=".5">
              <NuxtLink to="/"  class="tv-btn-primary p-relative">
                 <span class="btn-wrap">
                    <span class="btn-text1">Back To Home</span>
                    <span class="btn-text2">Back To Home </span>
                 </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- error page area end -->
</template>