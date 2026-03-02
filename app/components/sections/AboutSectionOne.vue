<script setup lang="ts">

</script>

<template>
  <div class="tv-about-area z-index-1 p-relative pt-130 pb-130 white-bg">

    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-5 col-lg-5">
          <div class="tv-section-title-box">
            <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">About Your Company</span>
            <h4 class="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right">We Execute Ideas From Start to Finish</h4>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7 text-end  ">
          <div class="tv-fade-anim button" data-fade-from="top" data-ease="bounce" data-delay=".5">
            <NuxtLink to="/contact" class="tv-btn-secondary">
                        <span class="btn-wrap">
                           <span class="btn-text1">Know More</span>
                           <span class="btn-text2">Know More</span>
                        </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="tv-about-section mt-60">
        <div class="row align-items-center">
          <div class="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
            <div class="tv-about-left">
              <div class="single-icon-box">
                <span><img src="@/assets/img/icon/about-icon-1.png" alt=""></span>
                <div class="icon-box-content">
                  <h3>Our Mission</h3>
                  <p>Our mission is to push boundaries, engage audiences, and driv engage innovation through</p>
                </div>
              </div>
              <div class="single-icon-box">
                <span><img src="@/assets/img/icon/about-icon-2.png" alt=""></span>
                <div class="icon-box-content">
                  <h3>Our Vission</h3>
                  <p>Our mission is to push boundaries, engage audiences, and driv engage innovation through</p>
                </div>
              </div>
              <div class="single-icon-box">
                <span><img src="@/assets/img/icon/about-icon-3.png" alt=""></span>
                <div class="icon-box-content">
                  <h3>Our Awards</h3>
                  <p>Our mission is to push boundaries, engage audiences, and driv engage innovation through</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
            <div class="tv-about-middle">
              <img src="@/assets/img/about/about-1-1.png" alt="">
              <p>Repellendus autem ruibusdam et aut officiis debitis aut re necessitatibus saepe eveniet ut et repudianda sint et molestiae non recusandae. </p>
            </div>
          </div>
          <div class="col-xl-4 d-xxl-block d-xl-block d-none col-md-6 col-sm-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
            <div class="tv-about-right">
              <img src="@/assets/img/about/about-1-2.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>