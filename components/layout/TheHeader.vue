<template>
  <!-- group-hover:lg:bg-gray-950/20 -->
  <header
    class="bg-transparent group-hover:lg:bg-gray-950/20 transition duration-300">
    <LayoutTheMenu
      @toggle-mobile="$emit('toggleMobile')"
      :is-home="isHome"
      :menu="menu" />
    <LayoutTheMobileMenu
      @toggle-mobile="$emit('toggleMobile')"
      :is-home="isHome"
      :menu="menu" />
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
        {
          link: '/foundation/the-premises',
          text: 'The Premises',
        },
      ],
      cta: false,
    },
    {
      link: '/partners',
      text: 'Partners',
      cta: false,
    },
    {
      link: '/collaborations',
      text: 'Collaborations',
      cta: false,
    },
    {
      link: '/contacts',
      text: 'Contacts',
      cta: false,
    },
    {
      link: 'https://www.lyacos.net',
      text: 'Dimitris Lyacos <br> <span style="font-weight:100; opacity:0.85;font-size:90%">Official website</span>',
      external: true,
      cta: true,
    },
  ];
}
</script>
