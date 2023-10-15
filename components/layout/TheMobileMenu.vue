<template>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div :class="{ hidden: !isMobileOpen }" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div
      class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="-m-1.5 p-1.5 text-white flex flex-col">
          <div class="text-gray-200">Dimitri Lyacos</div>
          <div class="-mt-2 text-white font-bold uppercase">Foundation</div>
        </NuxtLink>
        <button type="button" class="-m-4.5 rounded-md p-2.5 text-gray-200" @click="$emit('toggleMobile')">
          <span class="sr-only">Close menu</span>
          <svg
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <NuxtLink
              v-if="!isHome"
              to="/"
              class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-200 hover:text-primary transition duration-300"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/the-foundation"
              class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-200 hover:text-primary transition duration-300"
              >The Foundation</NuxtLink
            >
            <NuxtLink
              to="/blog"
              class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-200 hover:text-primary transition duration-300"
              >Blog</NuxtLink
            >
            <NuxtLink
              to="/collaborations"
              class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-200 hover:text-primary transition duration-300"
              >Collaborations</NuxtLink
            >
            <NuxtLink
              to="/contacts"
              class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-200 hover:text-primary transition duration-300"
              >Contact</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { useLayoutStore } from '~/store/layouts';
import { storeToRefs } from 'pinia';

@Component
export default class TheHeader extends Vue {
  @Prop() readonly isHome!: boolean;
  public store = useLayoutStore();
  public isMobileOpen = storeToRefs(this.store).isMobileOpen;
}
</script>
