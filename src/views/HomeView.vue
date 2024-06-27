<script setup lang="ts">
import { ref } from 'vue';
import BaseModal from '../components/BaseModal.vue';
import { useExplorerStore } from '../stores/explorer';

const isModalOpen = ref<boolean>(false);
const explorerStore = useExplorerStore();
</script>

<template>
  <main>
    <button @click="isModalOpen = true">Открыть</button>
    <div class="showTitle">{{ 'header title - ' + explorerStore.header }}</div>
    <BaseModal v-if="isModalOpen" @switchBaseModal="isModalOpen = false" />
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
