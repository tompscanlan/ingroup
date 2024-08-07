<script setup lang="ts">
const version = 2 + 1

const counter = useState('counter', () => Math.round(Math.random() * 1000))
const sameCounter = useState('counter')

</script>

<template>
  <div class="hello">
    Hello Nuxt {{ version }}!
  </div>

    <NuxtExample dir="features/state-management">
    <p>Counter: {{ counter }}</p>
    <div class="flex gap-2 my-4">
      <UButton @click="counter--">-</UButton>
      <UButton @click="counter++">+</UButton>
    </div>
    <p>Same Counter: {{ sameCounter }}</p>
  </NuxtExample>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>