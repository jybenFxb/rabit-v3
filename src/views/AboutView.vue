<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 @click="changed">{{ data }}</h2>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue'
const changed = inject('state-fn')

const data = inject('data-key')

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
