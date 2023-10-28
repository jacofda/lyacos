<template>
  <NuxtLink :to="'/foundation/governing-body/' + item.slug" class="space-y-4 text-center">
    <img
      class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
      :src="item.img"
      :alt="item.name"
      loading="lazy"
      width="400"
      height="600" />
    <div>
      <h4 class="text-2xl text-gray-700 dark:text-white">{{ item.name }}</h4>
      <span class="block text-sm text-gray-500">{{ item.position }}</span>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator';

@Component
export default class TheCard extends Vue {
  @Prop() item!: any;
}
</script>
