<script setup>
import { computed, ref } from "vue";

const list = ref([
  {
    id: 1,
    name: "Franz Ackermann",
    image: "/images/artist.png",
  },
  {
    id: 2,
    name: "Etel Adnan",
    image: "/images/artist.png",
  },
  {
    id: 3,
    name: "Darren Almond",
    image: "/images/artist.png",
  },
  {
    id: 4,
    name: "Ellen Altfest",
    image: "/images/artist.png",
  },
  {
    id: 5,
    name: "Michael Armitage",
    image: "/images/artist.png",
  },
  {
    id: 6,
    name: "Miroslaw Balka",
    image: "/images/artist.png",
  },
  {
    id: 7,
    name: "Georg Baselitz",
    image: "/images/artist.png",
  },
  {
    id: 8,
    name: "Larry Bell",
    image: "/images/artist.png",
  },
  {
    id: 9,
    name: "Jake & Dinos Chapman",
    image: "/images/artist.png",
  },
  {
    id: 10,
    name: "Chuck Close",
    image: "/images/artist.png",
  },
  {
    id: 11,
    name: "Gregory Crewdson",
    image: "/images/artist.png",
  },
  {
    id: 12,
    name: "Tracey Emin",
    image: "/images/artist.png",
  },
  {
    id: 13,
    name: "Katharina Fritsch",
    image: "/images/artist.png",
  },
  {
    id: 14,
    name: "Theaster Gates",
    image: "/images/artist.png",
  },
  {
    id: 15,
    name: "Gilbert & George",
    image: "/images/artist.png",
  },
  {
    id: 16,
    name: "Antony Gormley",
    image: "/images/artist.png",
  },
  {
    id: 17,
    name: "Andreas Gursky",
    image: "/images/artist.png",
  },
  {
    id: 18,
    name: "David Hammons",
    image: "/images/artist.png",
  },
  {
    id: 19,
    name: "Mona Hatoum",
    image: "/images/artist.png",
  },
  {
    id: 20,
    name: "He Xiangyu",
    image: "/images/artist.png",
  },
  {
    id: 21,
    name: "Damien Hirst",
    image: "/images/artist.png",
  },
  {
    id: 22,
    name: "Robert Irwin",
    image: "/images/artist.png",
  },
  {
    id: 23,
    name: "Runa Islam",
    image: "/images/artist.png",
  },
  {
    id: 24,
    name: "Sergej Jensen",
    image: "/images/artist.png",
  },
  {
    id: 25,
    name: "Anselm Kiefer",
    image: "/images/artist.png",
  },
  {
    id: 26,
    name: "Rachel Kneebone",
    image: "/images/artist.png",
  },
  {
    id: 27,
    name: "Imi Knoebel",
    image: "/images/artist.png",
  },
  {
    id: 28,
    name: "Elad Lassry",
    image: "/images/artist.png",
  },
  {
    id: 29,
    name: "Liza Lou",
    image: "/images/artist.png",
  },
  {
    id: 30,
    name: "Jac Leirner",
    image: "/images/artist.png",
  },
  {
    id: 31,
    name: "Liu Wei",
    image: "/images/artist.png",
  },
  {
    id: 32,
    name: "Christian Marclay",
    image: "/images/artist.png",
  },
  {
    id: 33,
    name: "Josiah McElheny",
    image: "/images/artist.png",
  },
  {
    id: 34,
    name: "Julie Mehretu",
    image: "/images/artist.png",
  },
  {
    id: 35,
    name: "Beatriz Milhazes",
    image: "/images/artist.png",
  },
  {
    id: 36,
    name: "Harland Miller",
    image: "/images/artist.png",
  },
  {
    id: 37,
    name: "Sarah Morris",
    image: "/images/artist.png",
  },
  {
    id: 38,
    name: "Gabriel Orozco",
    image: "/images/artist.png",
  },
  {
    id: 39,
    name: "Damián Ortega",
    image: "/images/artist.png",
  },
  {
    id: 40,
    name: "Virginia Overton",
    image: "/images/artist.png",
  },
  {
    id: 41,
    name: "Eddie Peake",
    image: "/images/artist.png",
  },
  {
    id: 42,
    name: "Magnus Plessen",
    image: "/images/artist.png",
  },
  {
    id: 43,
    name: "Jessica Rankin",
    image: "/images/artist.png",
  },
  {
    id: 44,
    name: "Christian Rosa",
    image: "/images/artist.png",
  },
  {
    id: 45,
    name: "Doris Salcedo",
    image: "/images/artist.png",
  },
  {
    id: 46,
    name: "Raqib Shaw",
    image: "/images/artist.png",
  },
  {
    id: 47,
    name: "Haim Steinbach",
    image: "/images/artist.png",
  },
  {
    id: 48,
    name: "Sam Taylor-Johnson",
    image: "/images/artist.png",
  },
  {
    id: 49,
    name: "Fred Tomaselli",
    image: "/images/artist.png",
  },
  {
    id: 50,
    name: "Jeff Wall",
    image: "/images/artist.png",
  },
  {
    id: 51,
    name: "Cerith Wyn Evans",
    image: "/images/artist.png",
  },
]);

const splitList = computed(() => {
  const chunkSize = list.value.length / 3;
  const chunks = [];

  for (let i = 0; i < list.value.length; i += chunkSize) {
    const chunk = list.value.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
});

const activeImage = ref("");

const setActiveImage = (id) => {
  const artist = list.value.find((artist) => artist.id === id);
  activeImage.value = artist.image;
};

const clearImage = () => {
  activeImage.value = "";
};
</script>

<template>
  <div class="mb-8 border-t border-line-gray pt-4 md:mb-20 md:pt-8">
    <h2 class="mb-2 text-base font-bold md:mb-4 md:text-2xl">Artists</h2>

    <div class="grid grid-cols-1 text-sm md:grid-cols-4 md:text-xl">
      <div
        v-for="(array, index) in splitList"
        :key="index"
        class="mb-2 space-y-2"
      >
        <div
          v-for="artist in array"
          :key="artist.name"
          class="ease cursor-pointer transition-all hover:underline"
          @mouseover="setActiveImage(artist.id)"
          @mouseleave="clearImage"
        >
          <p>{{ artist.name }}</p>
        </div>
      </div>
      <div class="hidden md:block">
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 "
          enter-to-class="opacity-1"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-1"
          leave-to-class="opacity-0 "
          mode="out-in"
        >
          <div
            v-if="activeImage"
            :key="activeImage"
            class="flex flex-col text-2xl"
          >
            <img :src="activeImage" alt="" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
