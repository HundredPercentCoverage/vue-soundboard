<script setup lang="ts">
import { ref } from 'vue'
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
    <p>{{ sample?.name }}</p>
</template>
