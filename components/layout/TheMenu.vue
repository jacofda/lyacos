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

      <NuxtLink
        to="/the-foundation"
        class="text-xl font-semibold text-gray-100 hover:text-primary border-b border-dashed border-transparent hover:border-primary transition duration-300"
        >The foundation</NuxtLink
      >
      <NuxtLink
        to="/blog"
        class="text-xl font-semibold text-gray-100 hover:text-primary border-b border-dashed border-transparent hover:border-primary transition duration-300"
        >Blog</NuxtLink
      >
      <NuxtLink
        to="/collaborations"
        class="text-xl font-semibold text-gray-100 hover:text-primary border-b border-dashed border-transparent hover:border-primary transition duration-300"
        >Collaborations</NuxtLink
      >
      <NuxtLink
        to="/contacts"
        class="text-xl font-semibold text-gray-100 hover:text-primary border-b border-dashed border-transparent hover:border-primary transition duration-300"
        >Contacts</NuxtLink
      >
    </div>
  </nav>
</template>

<script lang="ts" setup>
const prop = defineProps({
  isHome: {
    type: Boolean,
    default: false,
  },
});
</script>
