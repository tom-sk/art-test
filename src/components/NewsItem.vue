<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col justify-center">
    <div
      class="mb-4 h-80 w-full bg-cover bg-center bg-no-repeat"
      :style="{ 'background-image': 'url(' + item.image + ')' }"
    />

    <div class="space-y-2 text-left text-sm md:text-xl">
      <h4 class="font-bold">{{ item.title }}</h4>
      <p>{{ item.date }}</p>
      <p>{{ item.excerpt }}</p>
    </div>
  </div>
</template>
