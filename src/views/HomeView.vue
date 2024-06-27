<script setup lang="ts">
import { ref } from 'vue';
import BaseModal from '../components/BaseModal.vue';

const isModalOpen = ref<boolean>(false);
</script>

<template>
  <main>
    <button @click="isModalOpen = true">Открыть</button>
    <BaseModal v-if="isModalOpen" @switchBaseModal="isModalOpen = false" />
  </main>
</template>

<style scoped>
button {
  margin: 7% auto 0%;
  display: block;
  cursor: pointer;
}
</style>
