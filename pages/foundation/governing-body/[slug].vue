<template>
  <section v-if="item" class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-2xl lg:text-4xl uppercase font-extrabold">{{ item.position }}</h2>
      <p class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
      <h1 class="text-xl md:text-2xl lg:text-3xl font-thin text-gray-950">{{ item.name }}</h1>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto my-24">
      <img
        class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
        :src="config.public.cdn + item.img"
        :alt="item.name"
        loading="lazy"
        width="400"
        height="600" />
      <div class="p-4 lg:p-8 text-justify lg:text-lg text-gray-700">{{ item.description }}</div>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto my-24">
      <NuxtLink
        to="/foundation/governing-body"
        class="group text-xl lg:text-3xl font-semibold px-6 py-3 border-2 border-black flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 mr-3 group-hover:scale-150 transform-gpu transition duration-200"
          viewBox="0 0 448 512">
          <path
            d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 432 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-176 176z" />
        </svg>
        Back</NuxtLink
      >
    </div>
  </section>
</template>
<script setup lang="ts">
import { items, TeamMember } from '@/data/team';

const router = useRouter();
const config = useConfig();
defineProps({
  item: {
    type: Object as PropType<TeamMember>,
  },
});

const item = computed(() => {
  const slug = router.currentRoute.value.params.slug as string;
  return items.find((i: TeamMember) => i.slug === slug);
});

useSeoMeta({
  title: item.value?.name + ' | Dimitris Lyacos Foundation',
  description: item.value?.description?.substring(0, 150) || item.value?.name + ' | Dimitris Lyacos Foundation',
  ogTitle: item.value?.name + ' | Dimitris Lyacos Foundation',
  ogDescription: item.value?.description?.substring(0, 150) || item.value?.name + ' | Dimitris Lyacos Foundation',
  ogImage: config.public.cdn + item.value?.img,
  ogUrl: 'https://lyacos.org/foundation/governing-body/' + item.value?.slug,
});
</script>
