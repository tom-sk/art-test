<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
    </div>
  </header>

  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <RouterView />
  </div>

  <PageFooter />
</template>
