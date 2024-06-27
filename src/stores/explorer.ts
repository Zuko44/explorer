import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useExplorerStore = defineStore('explorerStore', () => {
  const header = ref<string>('');

  const saveHeader = (body: string) => {
    header.value = body;
  };

  return { header, saveHeader };
});
