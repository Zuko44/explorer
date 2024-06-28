<script setup lang="ts">
import { ref } from 'vue';
import BaseModal from '../components/BaseModal.vue';

const isModalOpen = ref<boolean>(false);
</script>

<template>
  <main>
    <button @click="isModalOpen = true">Открыть</button>
    <BaseModal
      title="Explorer"
      v-if="isModalOpen"
      @switchBaseModal="isModalOpen = false"
    />
  </main>
</template>

<style scoped>
.showTitle {
  margin: 10px 40% 0%;
  display: block;
}

button {
  cursor: pointer;
  margin: 7% auto 0%;
  display: block;
}
</style>
