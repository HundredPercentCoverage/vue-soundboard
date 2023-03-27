<script setup lang="ts">
import { ref } from 'vue'
import PlayIcon from './icons/IconPlay.vue'
import PauseIcon from './icons/IconPause.vue'
import type { PropType } from 'vue'
import type { Sample } from '@/stores/audioSamples'

const props = defineProps({
  sample: {
    type: Object as PropType<Sample>,
    required: true,
  }
})

const audio = new Audio(props.sample?.src)
const isPlaying = ref(false)

audio.addEventListener('ended', () => {
  isPlaying.value = false
})

function handlePlayClick() {
  if (isPlaying.value) {
    audio.pause()
    audio.currentTime = 0
    isPlaying.value = false
  } else {
    audio.play()
    isPlaying.value = true
  }
}
</script>

<template>
  <button @click="handlePlayClick" :title="isPlaying ? 'Pause' : 'Play'" class="item">
    <p>{{ sample.name }}</p>
    <i>
      <PlayIcon v-if="!isPlaying" />
      <PauseIcon v-if="isPlaying" />
    </i>
  </button>
</template>

<style scoped>
@import '../assets/item.css';
</style>
