<template>
  <div :class="{ hidden: !isMobileOpen }" role="dialog" aria-modal="true">
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

            <template v-for="(item, i) in menu" :key="i">
              <div v-if="item.dropdown" class="-mx-3">
                <button
                  type="button"
                  class="flex items-center rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-200 hover:text-primary transition duration-300"
                  aria-controls="disclosure-1"
                  aria-expanded="false"
                  @click="toggleDropdown()">
                  {{ item.text }}
                  <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
                <div class="mt-2 space-y-2" :class="{ hidden: !dropdownOpen }">
                  <NuxtLink
                    v-for="(dropdownItem, j) in item.dropdownItems"
                    :key="j"
                    :to="dropdownItem.link"
                    class="ml-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-200 hover:text-primary transition duration-300"
                    @click="store.toggleMobile()"
                    >{{ dropdownItem.text }}</NuxtLink
                  >
                </div>
              </div>

              <NuxtLink
                v-else-if="!item.cta"
                :to="item.link"
                class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-200 hover:text-primary transition duration-300"
                @click="store.toggleMobile()"
                >{{ item.text }}</NuxtLink
              >
              <a
                v-else
                :href="item.link"
                target="_BLANK"
                v-html="item.text"
                class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-200 hover:text-primary transition duration-300 leading-4 text-center" />
            </template>
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
export default class TheMobileMenu extends Vue {
  @Prop() readonly isHome!: boolean;
  @Prop() readonly menu!: any[];
  public store = useLayoutStore();
  public isMobileOpen = storeToRefs(this.store).isMobileOpen;
  public dropdownOpen = false;

  public toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleDropdownOnClick(e: Event) {
    if (this.dropdownOpen) {
      const target = e.target as HTMLElement;
      if (!target.closest('.relative')) {
        this.dropdownOpen = false;
      }
    }
  }

  mounted() {
    document.addEventListener('click', this.toggleDropdownOnClick);
  }

  beforeUnmount() {
    document.removeEventListener('click', this.toggleDropdownOnClick);
  }
}
</script>
