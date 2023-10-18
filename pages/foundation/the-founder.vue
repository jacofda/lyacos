<template>
  <section class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-4xl lg:text-7xl uppercase font-extrabold">The Founder</h2>
      <p class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
      <h1 class="text-4xl lg:text-6xl font-thin text-gray-950">
        Dimitris Lyacos |
        <span class="text-gray-700 group-hover:text-gray-400 transition-all ease-in duration-500 delay-150"
          >Biography</span
        >
      </h1>
      <div class="grid lg:grid-cols-2 gap-12 mx-8 mt-20">
        <p class="text-justify lg:text-lg text-gray-700">
          Dimitris Lyacos was born and raised in Athens, where he studied Law while also living in Venice where he
          started producing his literary work. In 1992 he settled in London where he studied philosophy at UCL, among
          with analytical philosophers Ted Honderich and Tim Crane and with a special focus on Epistemology and
          Metaphysics, Ancient Greek philosophy and Wittgenstein. In 1992, Lyacos set about writing a trilogy under the
          collective name Poena Damni, referring to the hardest trial the condemned souls in Hell have to endure, i.e.
          the loss of the vision of God. The trilogy developed gradually during the course of thirty years. The third
          part (The First Death) appeared first in Greek (Ο πρώτος θάνατος) and was the first to be translated in
          English in 2000. Lyacos continued to write and revise his trilogy until 2018, when the English Box Set Edition
          appeared in print. In the meantime, the trilogy had given rise to a number of sister projects across the arts,
          including music, visual arts, photography, and dance. A sound and sculpture installation that toured Europe in
          2004-2006 abruptly came to a halt when the works of Austrian sculptor Fritz Unegg who had created the visual
          part of the installation, mysteriously disappeared on their way from Vienna to Krakau as they headed for their
          appointment in the city’s Bunkier Sztuki. <br />During the years of working and reworking his trilogy, Lyacos
          also gave numerous lectures and readings in public venues, universities and festival across the world. He also
          gave interviews in journals such as Bomb, Los Angeles Review of Books, World Literature Today, and Gulf Coast,
          in order to elucidate upon the theoretical aspects of his work. In 2023 he completed the zeroeth book of his
          trilogy (Until the Victim Becomes our Own) which is due to first appear in Italy in spring 2024, published by
          Il Saggiatore, thus transforming his hitherto Poena Damni trilogy into a tetralogy.
        </p>
        <div class="bg-gray-100 lg:bg-white -mx-12 p-12 lg:mx-auto lg:p-0">
          <p class="text-justify lg:text-lg text-gray-700">
            While critics categorize Lyacos’ trilogy as postmodern, the author’s constant dialogue with works of the
            western tradition, his interest in physical science, as well as his work’s religious and anthropological
            concerns - and his lifelong interest in tragic poetry and epic drama - place his work outside the postmodern
            agenda. At the same time, Lyacos’s use of innovative, structures as well as multiple narratological
            techniques reinforce a perception of literature that is consonant with the author’s early concern: namely,
            the deep structure of tragedy rather than its formal characteristics. Unsurprisingly, the trilogy has been
            characterized, over the years, as an example of a post-tragic work. Homer and the Greek tradition have pride
            of place, with Homer Aeschylus as an obvious reference point, while Dante and the darker aspects of romantic
            poetry, together with symbolism and expressionism, also permeate the trilogy. Plotwise, the first of the
            three pieces, Z213: Exit (Z213: ΕΞΟΔΟΣ), recounts a man&#39;s escape from a guarded city and his journey
            through dreamlike, sometimes nightmarish, lands. In the second book, With the People from the Bridge (Με
            Τους Ανθρώπους Από Τη Γέφυρα) the protagonist of Z213: Exit becomes a first-person Narrator appearing as one
            spectator to a makeshift play performed under the arches of a derelict train station. The third book, The
            First Death (Ο Πρώτος Θάνατος) opens with a marooned man on a rocky island and details his struggle for
            survival as well as the disintegration of his body and the unrolling of its memory banks.<br />
            As a later addition to the trilogy, the “zeroeth book” brings to completion a work that had started in
            “medias res”. In a 2021 interview with Lyacos for 3:AM Magazine, Andrew Barrett, Lyacos’ English translator,
            announced that he was in the process of translating the author&#39;s new work which was envisioned as
            converting Poena Damni into a tetralogy. According to Barrett, the new book explores bloodshed as the
            building-block in the formation of society and the eventual place of the individual in a world
            &quot;permeated by institutionalized violence.&quot; The first excerpt from the book in English translation
            appeared in Mayday Magazine in March 2023 (chapter G) while chapter C is due to appear in Image Journal in
            spring 2024, the time of the publication of the Italian Edition.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig();
useSeoMeta({
  title: 'The founder | Dimitris Lyacos Foundation',
  description: 'The founder of the Dimitris Lyacos Foundation',
  ogTitle: 'The founder | Dimitris Lyacos Foundation',
  ogDescription: 'The founder of the Dimitris Lyacos Foundation',
  ogImage: `${config.public.cdn}lyacos-foundation-bw.jpeg`,
  ogUrl: 'https://lyacos.org/foundation/the-founder',
});
</script>
