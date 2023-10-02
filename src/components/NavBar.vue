<script setup>
import { RouterLink } from "vue-router";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import SearchBar from "@/components/SearchBar.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Art & Artists", href: "#", current: false },
  { name: "Exhibitions", href: "#", current: false },
  { name: "News", href: "#", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Private area", href: "#", current: false },
];
</script>

<template>
  <Disclosure as="nav" class="bg-white">
    <div class="mx-auto max-w-7xl px-2 py-8 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="text-2xl md:text-4xl">ART GALLERY</div>

        <div class="flex space-x-4">
          <SearchBar />

          <DisclosureButton>
            <MenuIcon class="h-6 w-6" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="-translate-y-full "
      enter-to-class="translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="translate-y-0"
      leave-to-class="-translate-y-full"
    >
      <DisclosurePanel
        v-slot="{ close }"
        class="fixed top-0 z-20 w-full bg-white shadow-2xl"
      >
        <div class="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="absolute right-2 top-8 sm:right-6 lg:right-8">
            <DisclosureButton>
              <CloseIcon class="h-6 w-6" />
            </DisclosureButton>
          </div>

          <div class="flex flex-col divide-y">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              class="py-4 text-3xl font-normal lg:text-5xl"
              :href="item.href"
            >
              <RouterLink
                :to="item.href"
                class="text-gray-900"
                @click="close()"
              >
                {{ item.name }}
              </RouterLink>
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>
