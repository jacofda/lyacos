<template>
  <section class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-4xl lg:text-7xl uppercase font-extrabold">Purpose</h2>
      <p class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
      <p class="mt-2 max-w-5xl text-center lg:text-lg">
        The purpose of the Foundation is the preservation, conservation and pervasion of the cultural heritage of the
        literary works of Dimitris Lyacos for the general public in behoof of science, art and culture.
      </p>

      <div class="grid lg:grid-cols-2 gap-12 mx-8 mt-20">
        <div>
          <div class="flex flex-row items-start gap-4">
            <ElementsTheCap />
            <p class="text-justify lg:text-lg text-gray-700 mb-12">
              The Foundation will promote the world-wide non-commercial events of the literary works of Dimitris Lyacos,
              particularly at Universities, public readings, festivals as well as related projects across the arts.
            </p>
          </div>
          <div class="flex flex-row items-start gap-4">
            <ElementsTheCap />
            <p class="text-justify lg:text-lg text-gray-700">
              The Foundation will take care of the preservation, the protection of the archives of the author and
              promote academic and artistic work based on Dimitris Lyacos’s works.
            </p>
          </div>
        </div>
        <div class="bg-gray-100 lg:bg-white -mx-12 p-12 lg:mx-auto lg:p-0">
          <div class="flex flex-row items-start gap-4">
            <ElementsTheCap />
            <p class="grow text-justify lg:text-lg text-gray-700 mb-12">
              The Foundation engages in the set up and development of an archive of the literary works of Dimitris
              Lyacos including cataloguing of publications in connection with the work. The archive shall be generally
              available to scholars.
            </p>
          </div>
          <div class="flex items-start gap-4">
            <ElementsTheCap />
            <p class="text-justify lg:text-lg text-gray-700 mb-12">
              The Foundation will fund and facilitate new translations of the works of Dimitris Lyacos.
            </p>
          </div>
          <div class="flex items-start gap-4">
            <ElementsTheCap />
            <p class="text-justify lg:text-lg text-gray-700 mb-12">
              The Foundation will facilitate and promote new artistic creations based on Dimitris Lyacos’s literary
              works.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig();
useSeoMeta({
  title: 'Purpose | Dimitris Lyacos Foundation',
  description: 'Purpose of the Dimitris Lyacos Foundation',
  ogTitle: 'Purpose | Dimitris Lyacos Foundation',
  ogDescription: 'Purpose of the Dimitris Lyacos Foundation',
  ogImage: `${config.public.cdn}lyacos-foundation-bw.jpeg`,
  ogUrl: 'https://lyacos.org/foundation/purpose',
});
</script>
