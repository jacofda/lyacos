<template>
  <section class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-4xl lg:text-7xl uppercase font-extrabold">
        The Premises
      </h2>
      <p
        class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
    </div>

    <div class="bg-gray-50 dark:bg-gray-800 pt-20 pb-10">
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="grid items-center gap-12 md:grid-cols-3">
          <div v-for="n in [1, 2, 3]" class="rounded-xl">
            <img
              :src="`${config.public.cdn}premises-${n}.webp`"
              class="rounded-xl saturate-50 hover:saturate-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 dark:bg-gray-800 pb-20">
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="grid items-center gap-12 md:grid-cols-2">
          <div v-for="n in [4, 5]" class="rounded-xl">
            <img
              :src="`${config.public.cdn}premises-${n}.webp`"
              class="rounded-xl saturate-50 hover:saturate-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
useSeoMeta({
  title: 'The Premises | Dimitris Lyacos Foundation',
  description: 'The Premises of the Dimitris Lyacos Foundation',
  ogTitle: 'The Premises| Dimitris Lyacos Foundation',
  ogDescription: 'The Premises of the Dimitris Lyacos Foundation',
  ogImage: `${config.public.cdn}tr:w-1230,h-630/lyacos-foundation.webp`,
  ogUrl: 'https://lyacos.org/foundation/the-premises',
});
</script>
