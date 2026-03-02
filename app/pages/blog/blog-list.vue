<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import BlogListSection from "~/components/sections/BlogListSection.vue";

const menus = ref([
  { label: 'Blog Sidebar' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Blog Sidebar" :menu="menus"/>
  <!-- breadcrumb area end -->

  <BlogListSection/>
</template>

<style scoped>

</style>