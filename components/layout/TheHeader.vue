<template>
  <header class="bg-transparent group-hover:md:bg-gray-950/20 transition duration-300">
    <LayoutTheMenu @toggle-mobile="$emit('toggleMobile')" :is-home="isHome" :menu="menu" />
    <LayoutTheMobileMenu @toggle-mobile="$emit('toggleMobile')" :is-home="isHome" :menu="menu" />
  </header>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator';

@Component
export default class TheHeader extends Vue {
  @Prop({ default: false }) readonly isHome!: boolean;

  public menu = [
    {
      link: '/foundation',
      text: 'The Foundation',
      dropdown: true,
      dropdownItems: [
        {
          link: '/foundation/the-founder',
          text: 'The Founder',
        },
        {
          link: '/foundation/purpose',
          text: 'Purpose',
        },
        {
          link: '/foundation/governing-body',
          text: 'Governing Body',
        },
      ],
    },
    {
      link: '/blog',
      text: 'Blog',
    },
    {
      link: '/collaborations',
      text: 'Collaborations',
    },
    {
      link: '/contacts',
      text: 'Contacts',
    },
  ];
}
</script>
