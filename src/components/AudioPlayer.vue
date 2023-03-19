<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({ src: String })

const audio = ref(new Audio(props.src));
</script>

<template>
  <button @click="() => audio.play()">Play</button>
</template>