<template>
  <header class="bg-transparent group-hover:md:bg-gray-950/20 transition duration-300">
    <LayoutTheMenu @toggle-mobile="$emit('toggleMobile')" :is-home="isHome" />
    <LayoutTheMobileMenu @toggle-mobile="$emit('toggleMobile')" :is-home="isHome" />
  </header>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator';

@Component
export default class TheHeader extends Vue {
  @Prop({ default: false }) readonly isHome!: boolean;
}
</script>
