<script lang="ts" setup>
import Preloader from "~/components/Preloader.vue";
import Header from "~/components/header/Header.vue";
import BackToTop from "~/components/BackToTop.vue";
import Footer from "~/components/footer/Footer.vue";
import SearchPopup from "~/components/SearchPopup.vue";
import Offcanvus from "~/components/Offcanvus.vue";

</script>

<template>
  <div>
    <!-- preloader -->
    <Preloader/>

    <!-- Back To Top Start -->
    <ClientOnly>
      <BackToTop/>
    </ClientOnly>
    <!-- Back To Top End -->

    <!-- search popup start -->
    <SearchPopup/>
    <!-- search popup end -->

    <!-- tv-offcanvus-area-start -->
    <Offcanvus/>
    <!-- tv-offcanvus-area-end -->

    <ClientOnly>
      <Header/>
    </ClientOnly>

    <main>
      <slot/>
    </main>

    <Footer/>
  </div>
</template>

<style scoped>

</style>