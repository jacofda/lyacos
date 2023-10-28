<template>
  <section class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-4xl lg:text-7xl uppercase font-extrabold">Partners</h2>
      <p class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
    </div>
    <div class="flex flex-col items-center justify-center py-12 mx-8">
      <p class="text-justify lg:text-lg text-gray-700 mb-4">
        The Edelweiss Literary Agency is the principal agency handling the international rights for Dimitris Lyacos's
        books. Over the years the agency's directors <i>Roberto di Pietro</i> and <i>Andrea Carnevale</i> have developed
        a close collaboration with Lyacos based, first and foremost, on the deep knowledge and appreciation of the
        content of his work.
      </p>
      <p class="text-justify lg:text-lg text-gray-700 mb-4">
        The Edelweiss Literary Agency was established by <i>Andrea Carnevale</i> and <i>Roberto di Pietro</i>, and today
        relies on a team of high-profile collaborators and partner companies, with long experience in the publishing
        sector, covering all stages of the materialisation of a book project: reading and evaluating manuscripts,
        proofreading, editing, professional layout, intermediation, storytelling, legal protection of copyright,
        copywriting, press office, translations and foreign rights. The Edelweiss Literary Agency is animated by the
        belief that books are a prime tool in the ongoing effort to improve our societies through learning and culture.
        <br />
        <a class="block lg:text-xl text-blue-700 mt-6" href="https://www.agenziaedelweiss.com/" target="_BLANK"
          >agenziaedelweiss.com</a
        >
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
useSeoMeta({
  title: 'Partners | ' + config.public.siteName,
  description: 'Partners of the Dimitris Lyacos Foundation',
});
</script>
