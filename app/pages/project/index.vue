<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ProjectSectionThree from "~/components/sections/ProjectSectionThree.vue";

const menus = ref([
  { label: 'Project' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Project" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- project area start -->
  <<ProjectSectionThree/>
  <!-- project area end -->
</template>

<style scoped>

</style>