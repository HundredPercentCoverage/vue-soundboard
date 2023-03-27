<script setup lang="ts">
import { ref } from 'vue'
import { useAudioSampleStore } from '@/stores/audioSamples'
import AudioPlayer from '@/components/AudioPlayer.vue'
import PlusIcon from '@/components/icons/IconPlus.vue'

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
    <h1>Easy Soundboard</h1>
    <ul>
      <li v-for="sample in samples" :key="sample.id">
        <AudioPlayer :sample="sample" />
      </li>
      <li>
        <button @click="openFile" class="item last-item">
          <i>
            <PlusIcon />
          </i>
        </button>
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
  </main>
</template>

<style scoped>
@import './assets/item.css';

h1 {
  display: flex;
  justify-content: center;
  justify-items: center;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  margin: 10px;
  height: 100%;
}

.last-item {
  border: 2px dashed black;
  min-width: 75px;
}
</style>
