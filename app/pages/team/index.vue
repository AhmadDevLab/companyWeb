<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import TeamSectionThree from "~/components/sections/TeamSectionThree.vue";

const menus = ref([
  { label: 'Team' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Team" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- team-area-start -->
  <TeamSectionThree/>
  <!-- team-area-end -->
</template>

<style scoped>

</style>