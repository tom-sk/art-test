<script setup>
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import LinkButton from "@/components/LinkButton.vue";
</script>
<template>
  <div class="bg-footer">
    <div
      class="mx-auto max-w-7xl px-2 py-6 text-white sm:px-6 md:py-12 lg:px-8"
    >
      <div class="flex justify-between pb-4">
        <div
          class="flex flex-col space-y-2 text-base font-bold md:flex-row md:space-x-6 md:space-y-0 md:text-2xl"
        >
          <LinkButton href="/newsletter" class="">Newsletter</LinkButton>
          <LinkButton href="/contact" class="">Contact</LinkButton>
          <LinkButton href="/press" class="">Press Room</LinkButton>
        </div>

        <div class="flex space-x-4">
          <LinkButton href="#" class="">
            <FacebookIcon class="h-6 w-6 text-white" />
          </LinkButton>

          <LinkButton href="#">
            <TwitterIcon class="h-6 w-6 text-white" />
          </LinkButton>
        </div>
      </div>

      <div class="mb-4 border-b border-t py-4">
        <address class="space-y-2 not-italic md:text-xl">
          ART GALLERY <br />
          38-40 Southwark Street <br />
          London SE1 1UN <br />
          Telephone +44 20 74905337<br />
        </address>
      </div>

      <p class="text-line-gray md:text-xl">&#169; 2022 EC1 GALLERY</p>
    </div>
  </div>
</template>
