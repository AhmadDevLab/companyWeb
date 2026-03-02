<script setup lang="ts">
import { useOffcanvas } from "~/composables/useOffcanvas";
import NavMenu from "~/components/header/NavMenu.vue";

const { isOffcanvasOpen, closeOffcanvas } = useOffcanvas();
</script>

<template>
  <div class="tv-offcanvas-area">
    <div class="itoffcanvas" :class="{ opened: isOffcanvasOpen }">
      <div class="itoffcanvas__close-btn">
        <button class="close-btn" @click="closeOffcanvas">
          <i class="fal fa-times"></i>
        </button>
      </div>
      <div class="itoffcanvas__logo">
        <NuxtLink to="/"> </NuxtLink>
      </div>
      <div class="itoffcanvas__text">
        <p>
          Suspendisse interdum consectetur libero id. Fermentum leo vel orci
          porta non. Euismod viverra nibh cras pulvinar suspen.
        </p>
      </div>
      <div class="tv-menu-mobile d-xl-none">
        <NavMenu :is-mobile="true" />
      </div>
      <div class="itoffcanvas__info">
        <h3 class="offcanva-title">Get In Touch</h3>
        <div class="tv-info-wrapper mb-20 d-flex align-items-center">
          <div class="itoffcanvas__info-icon">
            <a href="#"><i class="fal fa-envelope"></i></a>
          </div>
          <div class="itoffcanvas__info-address">
            <span>Email</span>
            <a href="maito:hello@yourmail.com">ahmaddev0011@gmail.com</a>
          </div>
        </div>
        <div class="tv-info-wrapper mb-20 d-flex align-items-center">
          <div class="itoffcanvas__info-icon">
            <a href="#"><i class="fal fa-phone-alt"></i></a>
          </div>
          <div class="itoffcanvas__info-address">
            <span>Phone</span>
            <a href="tel:(00)45611227890">(+92) 300 1031 340</a>
          </div>
        </div>
        <div class="tv-info-wrapper mb-20 d-flex align-items-center">
          <div class="itoffcanvas__info-icon">
            <a href="#"><i class="fas fa-map-marker-alt"></i></a>
          </div>
          <div class="itoffcanvas__info-address">
            <span>Location</span>
            <a
              href="htits://www.google.com/maps/@37.4801311,22.8928877,3z"
              target="_blank"
              >Gulshe-e-Jamal Sargodha, Pakistan
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="body-overlay"
    :class="{ apply: isOffcanvasOpen }"
    @click="closeOffcanvas"
  ></div>
</template>

<style scoped></style>
