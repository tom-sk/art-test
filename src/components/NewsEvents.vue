<script setup>
import { ref } from "vue";
import NewsItem from "@/components/NewsItem.vue";
import ArrowForwardIcon from "@/components/icons/ArrowForwardIcon.vue";

const news = ref([
  {
    id: 1,
    image: "/images/news-1.png",
    title: "Exhibition: He Xiangyu monograph released by Distanz",
    date: "From March 2016",
    excerpt:
      "He Xiangyu and Liu Wei are among 74 international artists from 33 countries chosen to feature in the Yinchuan Biennale 2016",
  },
  {
    id: 2,
    image: "/images/news-2.png",
    title: "Exhibition: Runa Islam at SFMOMA, San Francisco",
    date: "From March 2016",
    excerpt:
      "‘Verso’, SFMOMA’s solo presentation of Bangladeshi-born British artist Runa Islam, features the US premiere of Cabinet of Prototypes (2009-10)",
  },
  {
    id: 3,
    image: "/images/news-3.png",
    title: "Preview: White Cube Mason’s Yard",
    date: "123",
    excerpt:
      "Join us at Mason's Yard, London for the preview of the new Park Seo-Bo exhibition curated by Katharine Kostyál. Curated by Katharine Kostyál",
  },
]);
</script>

<template>
  <div class="flex flex-col border-t border-line-gray pb-20 pt-4">
    <div class="mb-4 flex w-full justify-between text-base md:text-2xl">
      <h2 class="font-bold">News & Events</h2>

      <a href="#">
        <button
          type="button"
          class="ease flex h-8 items-center justify-center border-b border-white transition-opacity hover:border-black hover:opacity-50"
        >
          View all <ArrowForwardIcon class="ml-2 w-6" />
        </button>
      </a>
    </div>
    <div
      class="grid w-full grid-cols-1 items-start gap-8 sm:grid-cols-2 md:grid-cols-3"
    >
      <NewsItem v-for="item in news" :key="item.id" :item="item" />
    </div>
  </div>
</template>
