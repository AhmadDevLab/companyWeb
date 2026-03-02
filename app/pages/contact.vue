<script setup lang="ts">
import Breadcrumb from "~/components/sections/Breadcrumb.vue";
import ContactSectionOne from "~/components/sections/ContactSectionOne.vue";

const menus = ref([
  { label: 'Contact' }
]);
</script>

<template>
  <!-- breadcrumb area start -->
  <Breadcrumb title="Contact" :menu="menus"/>
  <!-- breadcrumb area end -->

  <!-- contact area start -->
  <ContactSectionOne/>
  <!-- contact area end -->

  <!-- google map start -->
  <div class="tv-google-map wow itfadeUp" data-wow-delay=".2s">
    <iframe class="tv-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.07665879064!2d-74.30914977179596!3d40.69667269554806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1744694839471!5m2!1sen!2sbd" style="border:0;" :allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <!-- google map end -->
</template>

<style scoped>

</style>