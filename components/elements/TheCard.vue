<template>
  <div
    class="space-y-4 text-center saturate-0 hover:saturate-50 transition-all duration-300"
    :class="item.description ? 'cursor-pointer' : 'cursor-default'"
    @click="goToIf">
    <img
      class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64 mb-4"
      :src="item.img"
      :alt="item.name"
      loading="lazy"
      width="400"
      height="600" />
    <div>
      <h4 class="text-2xl text-gray-700 dark:text-white">{{ item.name }}</h4>
      <span class="block text-sm text-gray-500">{{ item.position }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator';

@Component
export default class TheCard extends Vue {
  @Prop() item!: any;

  goToIf() {
    if (this.item.description) {
      this.$router.push('/foundation/governing-body/' + this.item.slug);
    }
    return;
  }
}
</script>
