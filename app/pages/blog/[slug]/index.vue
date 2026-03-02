<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import BlogDetailsSection from "~/components/sections/BlogDetailsSection.vue";

const menus = ref([
  { label: 'Blog Details' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Blog Details" :menu="menus"/>
  <!-- breadcrumb area end -->

  <BlogDetailsSection/>
</template>

<style scoped>

</style>