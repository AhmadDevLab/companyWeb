<script setup lang="ts">

</script>

<template>
  <div class="tv-blog-area pt-130 pb-130">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-12">
          <div class="tv-blog-list-wrap">
            <div class="single-blog-item blog-list first mb-30 wow itfadeUp" data-wow-duratoin =".9s" data-wow-delay=".3s">
              <img src="@/assets/img/blog/blog-list-thum-1.png" alt="">
              <div class="blog-content">
                <div class="blog-meta">
                  <span class="author">Business solution</span>
                  <span class="date">27 May, 2024</span>
                </div>
                <h2><NuxtLink to="/blog/details">Boost your Startup Business With our Digital Agency</NuxtLink></h2>
                <p>Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks. </p>
                <NuxtLink class="read-more-btn" to="/blog-details">Read More<i class="fa-solid fa-arrow-right"></i></NuxtLink>
              </div>
            </div>
            <div class="single-blog-item blog-list first mb-30 wow itfadeUp" data-wow-duratoin =".9s" data-wow-delay=".5s">
              <img src="@/assets/img/blog/blog-list-thum-2.png" alt="">
              <div class="blog-content">
                <div class="blog-meta">
                  <span class="author">Business solution</span>
                  <span class="date">27 May, 2024</span>
                </div>
                <h2><NuxtLink to="/blog/details">Boost your Startup Business With our Digital Agency</NuxtLink></h2>
                <p>Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks. </p>
                <NuxtLink class="read-more-btn" to="/blog-details">Read More<i class="fa-solid fa-arrow-right"></i></NuxtLink>
              </div>
            </div>
            <div class="single-blog-item blog-list first mb-30 wow itfadeUp" data-wow-duratoin =".9s" data-wow-delay=".7s">
              <img src="@/assets/img/blog/blog-list-thum-3.png" alt="">
              <div class="blog-content">
                <div class="blog-meta">
                  <span class="author">Business solution</span>
                  <span class="date">27 May, 2024</span>
                </div>
                <h2><NuxtLink to="/blog/details">Data Backup and Recovery Best Practices Small</NuxtLink></h2>
                <p>Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks. </p>
                <NuxtLink class="read-more-btn" to="/blog-details">Read More<i class="fa-solid fa-arrow-right"></i></NuxtLink>
              </div>
            </div>
            <div class="tv-pagination mt-80">
              <nav>
                <ul>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li class="current">
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-solid fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-12">
          <div class="tv-sidebar-area">
            <div class="tv-widget widget mb-30 wow itfadeUp" data-wow-duratoin =".9s" data-wow-delay=".3s">
              <h4>Search Here</h4>
              <div class="widget-search-form">
                <input type="search" placeholder="search">
                <button type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
            <div class="tv-widget widget mb-30  wow-itfadeUp" data-wow-duratoin =".9s" data-wow-delay=".3s">
              <h4>Categories</h4>
              <ul>
                <li class="cat-item">
                  <a href="">Technology</a>
                  (03)
                </li>
                <li class="cat-item">
                  <a href="">Apps Development </a>
                  (01)
                </li>
                <li class="cat-item">
                  <a href="">Business</a>
                  (05)
                </li>
                <li class="cat-item">
                  <a href="">Social Marketing</a>
                  (02)
                </li>
                <li class="cat-item">
                  <a href="">Business Intelligence</a>
                  (04)
                </li>
              </ul>


            </div>
            <div class="tv-widget widget mb-30  wow itfadeUp" data-wow-duratoin =".9s" data-wow-delay=".3s">
              <h4>Recent Post</h4>
              <div class="widget-latest-post d-flex">
                <div class="widget-thumb">
                  <img src="@/assets/img/blog/blog-grid-1-1.png" alt="">
                </div>
                <div class="widget-content">
                  <h6><NuxtLink to="/blog/details">Boost your startup business with our digital agency</NuxtLink></h6>
                  <p>26 June 2024</p>
                </div>
              </div>
              <div class="widget-latest-post d-flex">
                <div class="widget-thumb">
                  <img src="@/assets/img/blog/blog-grid-1-2.png" alt="">
                </div>
                <div class="widget-content">
                  <h6><NuxtLink to="/blog/details">Boost your startup business with our digital agency</NuxtLink></h6>
                  <p>26 June 2024</p>
                </div>
              </div>
              <div class="widget-latest-post d-flex">
                <div class="widget-thumb">
                  <img src="@/assets/img/blog/blog-grid-1-3.png" alt="">
                </div>
                <div class="widget-content">
                  <h6><NuxtLink to="/blog/details">Boost your startup business with our digital agency</NuxtLink></h6>
                  <p>26 June 2024</p>
                </div>
              </div>
            </div>
            <div class="tv-widget widget mb-30  wow itfadeUp" data-wow-duratoin =".9s" data-wow-delay=".3s">
              <h4>Tag Cloud</h4>
              <div class="tagcloud">
                <a href="#">Brand</a>
                <a href="#">Business</a>
                <a href="#"> Development</a>
                <a href="#"> Marketing</a>
                <a href="#">SaaS</a>
                <a href="#">Technology</a>
                <a href="#">Startup</a>
                <a href="#">Services</a>
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