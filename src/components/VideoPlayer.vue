<script>
import { defineComponent } from "vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import PlayArrowIcon from "@/components/icons/PlayArrowIcon.vue";
import ArrowForwardIcon from "@/components/icons/ArrowForwardIcon.vue";

export default defineComponent({
  components: {
    ArrowForwardIcon,
    PlayArrowIcon,
    VideoPlayer,
  },
});
</script>

<template>
  <div
    class="mb-4 flex w-full justify-between border-t border-line-gray pt-4 text-base md:text-2xl"
  >
    <h2 class="font-bold">Channel</h2>

    <a href="#">
      <button
        type="button"
        class="ease flex h-8 items-center justify-center border-b border-white transition-opacity hover:border-black hover:opacity-50"
      >
        View all <ArrowForwardIcon class="ml-2 w-6" />
      </button>
    </a>
  </div>

  <VideoPlayer
    class="mb-4 h-[170px] w-full md:h-[530px]"
    src="https://vjs.zencdn.net/v/oceans.mp4"
    poster="images/video-placeholder.png"
    :loop="true"
    :volume="0.6"
  >
    <template #default="{ player, state }">
      <div
        class="absolute inset-0 flex h-full w-full items-center justify-center"
      >
        <button
          v-if="!state.playing"
          type="button"
          class="ease rounded-full bg-white p-6 ring-2 ring-white transition-all hover:opacity-60"
          @click="state.playing ? player.pause() : player.play()"
        >
          <PlayArrowIcon class="h-12 w-12" />
        </button>
      </div>
    </template>
  </VideoPlayer>

  <div
    class="mb-8 grid grid-cols-1 gap-4 text-sm md:mb-20 md:grid-cols-2 md:text-xl"
  >
    <div>
      <strong>
        Anselm Kiefer in conversation with Tim Marlow in the Auditorium
      </strong>
    </div>
    <div>
      <p>
        In this film Anselm Kiefer discusses his work and his exhibition
        ‘Walhalla’ at White Cube Bermondsey with Tim Marlow.
      </p>
    </div>
  </div>
</template>
