<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Item } from '../types/index';
import { VTreeview } from 'vuetify/labs/VTreeview';
import { useExplorerStore } from '../stores/explorer';

const accent = ref();
const header: string = 'Explorer';
const explorerStore = useExplorerStore();

const items = ref<Item[]>([
  {
    id: 1,
    title: 'Applications :',
    children: [
      { id: 2, title: 'Calendar : app' },
      { id: 3, title: 'Chrome : app' },
      { id: 4, title: 'Webstorm : app' },
    ],
  },
  {
    id: 5,
    title: 'Documents :',
    children: [
      {
        id: 6,
        title: 'vuetify :',
        children: [
          {
            id: 7,
            title: 'src :',
            children: [
              { id: 8, title: 'index : ts' },
              { id: 9, title: 'bootstrap : ts' },
            ],
          },
        ],
      },
      {
        id: 10,
        title: 'material2 :',
        children: [
          {
            id: 11,
            title: 'src :',
            children: [
              { id: 12, title: 'v-btn : ts' },
              { id: 13, title: 'v-card : ts' },
              {
                id: 14,
                title: 'v-window : ts',
                children: [
                  { id: 12, title: 'v-btn : ts' },
                  {
                    id: 13,
                    title: 'v-card : ts',
                    children: [
                      { id: 12, title: 'v-btn : ts' },
                      {
                        id: 13,
                        title: 'v-card : ts',
                        children: [
                          { id: 12, title: 'v-btn : ts' },
                          { id: 13, title: 'v-card : ts' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    title: 'Downloads :',
    children: [
      { id: 16, title: 'October : pdf' },
      { id: 17, title: 'November : pdf' },
      { id: 18, title: 'Tutorial : html' },
    ],
  },
  {
    id: 19,
    title: 'Videos :',
    children: [
      {
        id: 20,
        title: 'Tutorials :',
        children: [
          { id: 21, title: 'Basic layouts : mp4' },
          { id: 22, title: 'Advanced techniques : mp4' },
          { id: 23, title: 'All about app : dir' },
        ],
      },
      { id: 24, title: 'Intro : mov' },
      { id: 25, title: 'Conference introduction : avi' },
    ],
  },
]);

interface Emits {
  (e: 'switchBaseModal'): void;
}

const emit = defineEmits<Emits>();

const closeHandler = () => {
  emit('switchBaseModal');
};

const exportHeaderAndClose = () => {
  explorerStore.saveHeader(header);
  closeHandler();
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
      <h2>{{ header }}</h2>
      <v-treeview :items="items" activatable></v-treeview>
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
  width: 500px;
  height: 500px;
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
