<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <h2>Vue Soundboard</h2>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
}

header div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}

nav a {
  margin-left: 10px;
}
</style>
