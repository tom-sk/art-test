<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { computed, ref } from "vue";

const myCarousel = ref(null);

const items = [
  {
    id: 1,
    image: "/images/art-gallery.png",
    title: "Anselm Kiefer: Walhalla",
    location: "Until 12 February 2017, London",
  },
  {
    id: 2,
    image: "/images/art-gallery.png",
    title: "Anselm Kiefer: Walhalla 2",
    location: "Until 12 February 2017, London",
  },
  {
    id: 3,
    image: "/images/art-gallery.png",
    title: "Anselm Kiefer: Walhalla 3",
    location: "Until 12 February 2017, London",
  },
  {
    id: 4,
    image: "/images/art-gallery.png",
    title: "Anselm Kiefer: Walhalla 4",
    location: "Until 12 February 2017, London",
  },
];

const slideTo = (id) => {
  myCarousel.value.slideTo(id);
};

const currentSlide = computed(() => {
  if (!myCarousel.value) return;
  return myCarousel.value.data.currentSlide.value;
});
</script>

<template>
  <Carousel ref="myCarousel" :items-to-show="1">
    <Slide v-for="item in items" :key="item.id">
      <img class="w-full" :src="item.image" />
    </Slide>
  </Carousel>

  <div v-if="myCarousel" class="mb-8 grid grid-cols-2 pt-4 md:mb-16">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 "
      enter-to-class="opacity-1"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-1"
      leave-to-class="opacity-0 "
      mode="out-in"
    >
      <div :key="currentSlide" class="flex flex-col text-base md:text-2xl">
        <strong>{{ items[currentSlide].title }}</strong>
        {{ items[currentSlide].location }}
      </div>
    </transition>

    <div class="ml-auto flex space-x-2">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="ease h-4 w-4 cursor-pointer rounded-full transition-all"
        :class="index === currentSlide ? 'bg-red-500' : 'bg-gray-400'"
        @click="slideTo(index)"
      />
    </div>
  </div>
</template>
