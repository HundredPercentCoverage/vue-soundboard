import { ref } from 'vue'
import { defineStore } from 'pinia'

type Sample = {
  id: number
  src: string
}

export const useAudioSampleStore = defineStore('samples', () => {
  const samples = ref<Sample[]>([])

  function addSample(sample: Sample) {
    samples.value.push(sample)
  }

  return { samples, addSample }
})
