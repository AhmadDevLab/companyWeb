<script setup lang="ts">

</script>

<template>
  <div class="tv-blog-area pt-130 pb-130">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-6 col-lg-6">
          <div class="tv-section-title-box">
            <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">Our Blogs</span>
            <h4 class="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right">Recent Blog & Articles <br> About Technology</h4>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 text-end">
          <div class="tv-fade-anim button" data-fade-from="top" data-ease="bounce" data-delay=".5">
            <NuxtLink to="/blog/details" class="tv-btn-primary p-relative">
               <span class="btn-wrap">
                  <span class="btn-text1">View All Posts</span>
                  <span class="btn-text2">View All Posts</span>
               </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="tv-blog-wrap mt-60">
        <div class="row">
          <div class="col-lg-6 col-xl-6 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
            <div class="single-blog-item first mb-30">
              <img src="@/assets/img/blog/blog-thumb-1.png" alt="">
              <div class="blog-content mt-30">
                <div class="blog-meta">
                  <span class="author">Alom Khan</span>
                  <span class="date">27 May, 2024</span>
                </div>
                <h2><NuxtLink to="/blog/details">Boost your Startup Business With our Digital Agency</NuxtLink></h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-3 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
            <div class="single-blog-item mb-30">
              <img src="@/assets/img/blog/blog-thumb-2.png" alt="">
              <div class="blog-content mt-30">
                <div class="blog-meta">
                  <span class="author">Alom Khan</span>
                  <span class="date">27 May, 2024</span>
                </div>
                <h2><NuxtLink to="/blog/details">Planning your Online Business Goals With a Specialist</NuxtLink></h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-3 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
            <div class="single-blog-item mb-30">
              <img src="@/assets/img/blog/blog-thumb-3.png" alt="">
              <div class="blog-content mt-30">
                <div class="blog-meta">
                  <span class="author">Alom Khan</span>
                  <span class="date">27 May, 2024</span>
                </div>
                <h2><NuxtLink to="/blog/details">Including Animation In Your Design System</NuxtLink></h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>