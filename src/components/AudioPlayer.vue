<script setup lang="ts">
import { ref } from 'vue'
import PlayIcon from './icons/IconPlay.vue'
import PauseIcon from './icons/IconPause.vue'
import type { PropType } from 'vue'
import type { Sample } from '@/stores/audioSamples'

const props = defineProps({ sample: Object as PropType<Sample> })

const audio = new Audio(props.sample?.src)
const isPlaying = ref(false)

function playAudio() {
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
  <div class="item-container">
    <p>{{ sample?.name }}</p>
    <button @click="playAudio" :title="isPlaying ? 'Pause' : 'Play'">
      <i>
        <PlayIcon v-if="!isPlaying" />
        <PauseIcon v-if="isPlaying" />
      </i>
    </button>
  </div>
</template>

<style scoped>
@import '../assets/item.css';

.item-container > button {
  background-color: white;
  outline: none;
  border: none;
}

.item-container > button :hover {
  cursor: pointer;
  opacity: 0.75;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
}
</style>
