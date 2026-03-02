<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import TeamDetailsSection from "~/components/sections/TeamDetailsSection.vue";

const menus = ref([
  { label: 'Team Details' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Team Details" :menu="menus"/>
  <!-- breadcrumb area end -->

  <TeamDetailsSection/>
</template>

<style scoped>

</style>