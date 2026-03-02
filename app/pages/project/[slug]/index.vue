<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ProjectDetailsSection from "~/components/sections/ProjectDetailsSection.vue";

const menus = ref([
  { label: 'Project Details' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Project Details" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- project-details area start -->
  <ProjectDetailsSection/>
  <!-- project-details area end -->
</template>

<style scoped>

</style>