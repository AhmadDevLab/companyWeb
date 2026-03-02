<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import BlogGridSection from "~/components/sections/BlogGridSection.vue";

const menus = ref([
  { label: 'Blog' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Blog" :menu="menus"/>
  <!-- breadcrumb area end -->

  <BlogGridSection/>
</template>

<style scoped>

</style>