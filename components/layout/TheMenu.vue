<template>
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="absolute lg:hidden top-6 right-6">
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2.5 text-white"
        @click="$emit('toggleMobile')">
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-24">
      <NuxtLink
        v-if="!isHome"
        to="/"
        class="text-xl font-semibold text-gray-100 hover:text-primary border-b border-dashed border-transparent hover:border-primary transition duration-300"
        >Home</NuxtLink
      >
      <template v-for="(item, i) in (menu as any[])" :key="i">
        <div v-if="item.dropdown" class="hidden lg:flex lg:gap-x-12">
          <div class="relative">
            <button
              type="button"
              class="flex items-center text-xl font-semibold text-gray-100 hover:text-primary border-b border-dashed border-transparent hover:border-primary transition duration-300"
              aria-expanded="false"
              @click="toggleDropdown()">
              {{ item.text }}
              <svg
                class="ml-2 h-5 w-5 flex-none text-gray-100 hover:text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </button>

            <div
              class="absolute -left-2 top-full z-10 mt-3 w-screen max-w-[12rem] overflow-hidden bg-gray-900 shadow-lg ring-1 ring-gray-900/5"
              :class="{ hidden: !dropdownOpen }">
              <div class="py-4 px-6 flex flex-col gap-6">
                <NuxtLink
                  v-for="(dropdownItem, j) in item.dropdownItems"
                  :key="j"
                  :to="dropdownItem.link"
                  class="block font-semibold text-gray-100 hover:text-primary transition duration-300"
                  @click="toggleDropdown()">
                  {{ dropdownItem.text }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink
          v-else
          :to="item.link"
          class="text-xl font-semibold text-gray-100 hover:text-primary border-b border-dashed border-transparent hover:border-primary transition duration-300"
          >{{ item.text }}</NuxtLink
        >
      </template>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const prop = defineProps({
  isHome: {
    type: Boolean,
    default: false,
  },
  menu: {
    type: Array,
    default: () => [],
  },
});
const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>
