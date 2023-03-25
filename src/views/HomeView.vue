<script setup lang="ts">
import { ref } from 'vue'
import { useAudioSampleStore } from '@/stores/audioSamples'
import AudioPlayer from '@/components/AudioPlayer.vue'

const fileInput = ref<HTMLInputElement>()
const currentId = ref(0)
const { samples } = useAudioSampleStore()

function fileChange(e: Event) {
  const target = e.target as HTMLInputElement

  if (target.files && target.files[0])
    samples.push({
      id: currentId.value,
      src: URL.createObjectURL(target.files[0]),
      name: target.files[0].name
    })
}

function openFile() {
  fileInput.value?.click()
}
</script>

<template>
  <main>
    <h1>Home Page</h1>
    <ul>
      <li v-for="sample in samples" :key="sample.id">
        <AudioPlayer :src="sample.src" />
      </li>
    </ul>
    <input
      type="file"
      name="new"
      id="new"
      ref="fileInput"
      @change="fileChange"
      accept="audio/*"
      hidden
    />
    <button @click="openFile">Add file</button>
  </main>
</template>
