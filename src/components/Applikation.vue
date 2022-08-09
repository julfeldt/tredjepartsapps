<script setup lang="ts">
// variable
const msg = 'Vue 3 click me!';

// functions
function log() {
  console.log('Hello from Vue 3 with composition API');
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>
