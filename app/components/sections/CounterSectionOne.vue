<script setup lang="ts">

</script>

<template>
  <div class="tv-counter-area pb-130">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-3 col-xl-3 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
          <div class="single-couter-wrap mt-60   d-flex align-items-center justify-content-center">
            <div class="inner">
              <h5>
                <ScrollCounter :start="0" :end="25"/>
                <span class="purecounter" data-purecounter-duration="0" data-purecounter-end="25">25</span>
              </h5>
              <h6>Years Experience</h6>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="single-couter-wrap  d-flex align-items-center justify-content-center">
            <div class="inner">
              <h5>
                <ScrollCounter :start="0" :end="97" suffix="%"/>
              </h5>
              <h6>Retention Rate</h6>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
          <div class="single-couter-wrap mt-60 d-flex align-items-center justify-content-center">
            <div class="inner">
              <h5>
                <ScrollCounter :start="0" :end="8" suffix="K"/>
              </h5>
              <h6>Project Completed</h6>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-3 col-md-6 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
          <div class="single-couter-wrap d-flex align-items-center justify-content-center">
            <div class="inner">
              <h5>
                <ScrollCounter :start="0" :end="19" suffix="K"/>
              </h5>
              <h6>Happy Clients</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>