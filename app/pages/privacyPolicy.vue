<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import PrivacyPolicyInfo from "~/components/sections/PrivacyPolicyInfo.vue";
import FaqSectionOne from "~/components/sections/FaqSectionOne.vue";

const menus = ref([{ label: "Privacy Policy" }]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Privacy Policy" :menu="menus" />
  <!-- breadcrumb area end -->

  <!-- price-area-start -->
  <PrivacyPolicyInfo />
  <!-- price-area-end -->
</template>

<style scoped></style>
