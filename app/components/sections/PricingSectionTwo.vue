<script setup lang="ts">

</script>

<template>
  <div class="tv-pricing-area-tab section-bg gray-bg pt-130 pb-130 pricing-bg">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="tv-section-title-box mb-60">
            <span class="tv-section-subtitle tv-spltv-text tv-spltv-in-right">Pricing Plan</span>
            <h4 class="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right">Our Affordable Pricing Plans <br> For IT Business</h4>
          </div>
        </div>
      </div>
      <div class="tv-pricing-tab-wrap">
        <div class="row">
          <!-- Left Side -->
          <div class="col-xxl-4 col-xl-4 col-lg-5 wow itfadeUp" data-wow-delay=".2s">
            <div class="tv-pricing-tab-left">
              <ul class="nav nav-price mb-3" id="price-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="price-monthly-tab" data-bs-toggle="pill" data-bs-target="#left-price-monthly" type="button" role="tab" aria-controls="left-price-monthly" aria-selected="true">
                    Monthly
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="price-yearly-tab" data-bs-toggle="pill" data-bs-target="#left-price-yearly" type="button" role="tab" aria-controls="left-price-yearly" aria-selected="false">
                    Yearly
                  </button>
                </li>
              </ul>

              <div class="tab-content" id="price-tabContent-left">
                <div class="tab-pane fade show active" id="left-price-monthly" role="tabpanel" aria-labelledby="price-monthly-tab">
                  <div class="price-content-wrap">
                    <ul class="price-list-item">
                      <li><i class="fa-solid fa-check"></i> Executive Consultancy</li>
                      <li><i class="fa-solid fa-check"></i> Remuneration Handling</li>
                      <li><i class="fa-solid fa-check"></i> Company Formation</li>
                      <li><i class="fa-solid fa-check"></i> Always-On Support</li>
                      <li><i class="fa-solid fa-xmark"></i> Personal Habitat Advisory</li>
                      <li><i class="fa-solid fa-xmark"></i> Elite Assistance</li>
                      <li><i class="fa-solid fa-xmark"></i> Tailored Solutions</li>
                    </ul>
                    <NuxtLink to="/price" class="tv-btn-primary p-relative">
                       <span class="btn-wrap">
                         <span class="btn-text1">Select This Plan</span>
                         <span class="btn-text2">Select This Plan</span>
                       </span>
                    </NuxtLink>
                  </div>
                </div>
                <div class="tab-pane fade" id="left-price-yearly" role="tabpanel" aria-labelledby="price-yearly-tab">
                  <div class="price-content-wrap">
                    <ul class="price-list-item">
                      <li><i class="fa-solid fa-check"></i> Executive Consultancy</li>
                      <li><i class="fa-solid fa-check"></i> Remuneration Handling</li>
                      <li><i class="fa-solid fa-check"></i> Company Formation</li>
                      <li><i class="fa-solid fa-check"></i> Always-On Support</li>
                      <li><i class="fa-solid fa-xmark"></i> Personal Habitat Advisory</li>
                      <li><i class="fa-solid fa-xmark"></i> Elite Assistance</li>
                      <li><i class="fa-solid fa-xmark"></i> Tailored Solutions</li>
                    </ul>
                    <NuxtLink to="/price" class="tv-btn-primary p-relative">
                      <span class="btn-wrap">
                        <span class="btn-text1">Select This Plan</span>
                        <span class="btn-text2">Select This Plan</span>
                      </span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side (Sync Manually with JavaScript) -->
          <div class="col-xxl-8 col-xl-8 col-lg-7">
            <div class="tv-pricing-tab-right">
              <div class="tab-content" id="price-tabContent-right">
                <div class="tab-pane fade show active" id="right-price-monthly">
                  <div class="single-price-box-wrap d-flex align-items-center wow itfadeUp" data-wow-delay=".2s">
                    <div>
                      <h4>Basic Plan</h4>
                      <p>Easily create reusable payment links that you can share with your customers through email Easily </p>
                    </div>
                    <div>
                      <h2 class="price">
                        <span>$19</span>/Month
                      </h2>
                    </div>
                  </div>
                  <div class="single-price-box-wrap d-flex align-items-center wow itfadeUp" data-wow-delay=".3s">
                    <div>
                      <h4>Premium Plan</h4>
                      <p>Easily create reusable payment links that you can share with your customers through email Easily </p>
                    </div>
                    <div>
                      <h2 class="price">
                        <span>$50</span>/Month
                      </h2>
                    </div>
                  </div>
                  <div class="single-price-box-wrap d-flex align-items-center wow itfadeUp" data-wow-delay=".4s">
                    <div>
                      <h4>Gold Plan</h4>
                      <p>Easily create reusable payment links that you can share with your customers through email Easily </p>
                    </div>
                    <div>
                      <h2 class="price">
                        <span>$39</span>/Month
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="right-price-yearly">
                  <div class="single-price-box-wrap d-flex align-items-center wow itfadeUp" data-wow-delay=".2s">
                    <div>
                      <h4>Basic Plan</h4>
                      <p>Easily create reusable payment links that you can share with your customers through email Easily </p>
                    </div>
                    <div>
                      <h2 class="price">
                        <span>$19</span>/Month
                      </h2>
                    </div>
                  </div>
                  <div class="single-price-box-wrap d-flex align-items-center wow itfadeUp" data-wow-delay=".3s">
                    <div>
                      <h4>Premium Plan</h4>
                      <p>Easily create reusable payment links that you can share with your customers through email Easily </p>
                    </div>
                    <div>
                      <h2 class="price">
                        <span>$50</span>/Month
                      </h2>
                    </div>
                  </div>
                  <div class="single-price-box-wrap d-flex align-items-center wow itfadeUp" data-wow-delay=".4s">
                    <div>
                      <h4>Gold Plan</h4>
                      <p>Easily create reusable payment links that you can share with your customers through email Easily </p>
                    </div>
                    <div>
                      <h2 class="price">
                        <span>$39</span>/Month
                      </h2>
                    </div>
                  </div>
                </div>
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