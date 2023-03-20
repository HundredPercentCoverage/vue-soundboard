<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({ src: String })

const audio = new Audio(props.src)
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
  <button @click="playAudio">{{ isPlaying ? 'Pause' : 'Play' }}</button>
</template>
