<script setup lang="ts">
import {headerMenus} from "~/config/menuData";
import { ref } from 'vue';

defineProps({
  isMobile: {
    type: Boolean,
    default: false
  },
})

const openMenus = ref<Set<string>>(new Set());

const toggleDropdown = (event: Event, title: string) => {
  event.stopPropagation();

  if (openMenus.value.has(title)) {
    openMenus.value.delete(title);
  } else {
    openMenus.value.add(title);
  }
}
</script>

<template>
  <nav class="tv-menu-content">
    <ul>
      <li
          v-for="item in headerMenus"
          :key="item.title"
          :class="{
            'has-dropdown': item.children || item.type === 'mega',
            'p-static': item.type === 'mega',
            'open': isMobile && openMenus.has(item.title)
          }"
      >
        <NuxtLink :to="item.link">
          {{ item.title }}
          <button class="dropdown-toggle-btn" :class="{'dropdown-opened' : isMobile && openMenus.has(item.title)}">
            <i v-if="(item.children || item.type === 'mega') && isMobile" class="fal fa-angle-right" @click="toggleDropdown($event, item.title)"></i>
          </button>
        </NuxtLink>

        <!-- MEGA MENU (Home) -->
        <div
            v-if="item.type === 'mega'"
            class="tv-submenu submenu has-home-img"
            :class="{ 'open': isMobile && openMenus.has(item.title) }"
        >
          <div class="tv-homemenu-wrapper">
            <div class="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
              <div
                  v-for="home in item.homes"
                  :key="home.title"
                  class="col home-img"
              >
                <div class="home-img-thumb home-img-overly mb-20">
                  <img :src="home.img" :alt="home.title" />
                  <div class="home-img-btn">
                    <NuxtLink class="tv-btn-sm" :to="home.link">
                      <span class="text-one">{{ home.btn }}</span>
                    </NuxtLink>
                  </div>
                </div>
                <div class="home-img-content text-center">
                  <h4 class="home-img-title">
                    <NuxtLink :to="home.link">{{ home.title }}</NuxtLink>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- NORMAL DROPDOWN -->
        <ul v-else-if="item.children" class="tv-submenu submenu" :class="{ 'open': isMobile && openMenus.has(item.title) }">
          <li v-for="child in item.children" :key="child.title">
            <NuxtLink :to="child.link">{{ child.title }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>