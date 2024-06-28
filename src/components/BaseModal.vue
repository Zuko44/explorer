<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TreeFolder from '@/components/TreeFolder.vue';
import { useExplorerStore } from '../stores/explorer';

const accent = ref();
const folderStore = useExplorerStore();

interface Props {
  title: string;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'switchBaseModal'): void;
}

const emit = defineEmits<Emits>();

const closeHandler = () => {
  emit('switchBaseModal');
};

const exportHeaderAndClose = () => {
  closeHandler();
  console.log(folderStore.folderId);
};

onMounted(() => {
  accent.value.focus();
});
</script>

<template>
  <div
    class="fixed"
    tabindex="-1"
    ref="accent"
    @click.self="closeHandler"
    @keydown.esc="closeHandler"
  >
    <div class="content">
      <img
        class="strike"
        src="../assets/icons/strike.svg"
        alt="close"
        @click="closeHandler"
      />
      <h2>{{ props.title }}</h2>
      <TreeFolder />
      <button class="close-and-select" @click="exportHeaderAndClose">ok</button>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  z-index: 10;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(188, 195, 208, 0.5);
  opacity: 60;
  outline: none;
}

.content {
  background: white;
  width: 60vw;
  height: 80vh;
  margin: 5% auto;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  overflow: auto;
  position: relative;
}

.strike {
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 90%;
}

.close-and-select {
  margin: 10px auto;
  display: block;
  width: 60px;
  height: 30px;
}
</style>
