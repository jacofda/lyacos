<template>
  <section class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-4xl lg:text-7xl uppercase font-extrabold">Contacts</h2>
      <p class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
    </div>
    <div class="flex flex-col items-center justify-center py-12">
      <p>
        Dimitris Lyacos Foundation <br />
        Chrysiidos 29-31 <br />
        ILION - 13122<br />
        ATHENS<br />
        GREECE<br />
        Only postal address. Visits by appointment<br /><br />
        +30 21 02629161<br />
        http://www.lyacos.org
      </p>
    </div>
    <div class="group w-full flex justify-center pb-32">
      <a
        href="mailto:lyacos@yahoo.co.uk"
        class="text-gray-950 text-xl font-semibold uppercase px-16 py-5 border-4 border-inherit group-hover:border-gray-950 transition-all duration-300">
        Send an Email</a
      >
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator';

@Component
export default class TheFoundation extends Vue {}
</script>
