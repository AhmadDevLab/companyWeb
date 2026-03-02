<script setup lang="ts">
interface MenuItem {
  label: string;
  link?: string;
}

const props = defineProps<{
  title: string;
  menu: MenuItem[];
}>();
</script>

<template>
  <div
    class="tv-breadcrumb-area tv-breadcrumb-overlay tv-breadcrumb-ptb z-index-1 fix p-relative breadcrumb-bg"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="tv-breadcrumb-content z-index-1 text-center">
            <div class="tv-breadcrumb-title-box">
              <h3 class="tv-breadcrumb-title tv-spltv-text tv-spltv-in-right">
                {{ props.title }}
              </h3>
            </div>
            <div class="tv-breadcrumb-list-wrap">
              <div class="tv-breadcrumb-list">
                <span><NuxtLink to="/">Home</NuxtLink></span>
                <template v-for="(item, index) in menu" :key="index">
                  <span class="dvdr">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path
                        d="M4.47698 6.00058L0.352151 10.1253L1.53065 11.3038L6.83398 6.00058L1.53065 0.697266L0.352151 1.87577L4.47698 6.00058Z"
                        fill="#F5F6F7"
                      />
                    </svg>
                  </span>

                  <span v-if="item.link">
                    <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
                  </span>

                  <i v-else>
                    {{ item.label }}
                  </i>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
