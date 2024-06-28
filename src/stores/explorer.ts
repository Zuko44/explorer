import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useExplorerStore = defineStore('explorerStore', () => {
  const folderId = ref<string>();

  const saveId = (id: string) => {
    if (id) {
      folderId.value = id;
    }
  };

  return { folderId, saveId };
});
