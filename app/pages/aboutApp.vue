<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import AboutAppInfo from "~/components/sections/AboutAppInfo.vue";

const menus = ref([{ label: "About App" }]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="About App" :menu="menus" />
  <!-- breadcrumb area end -->

  <!-- price-area-start -->
  <AboutAppInfo />
  <!-- price-area-end -->
</template>

<style scoped></style>
