<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="href" class="ease transition-all hover:opacity-60">
    <slot />
  </a>
</template>
