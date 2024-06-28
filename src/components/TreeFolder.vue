<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import type { TreeProps } from 'ant-design-vue';
import type { Item, ThreeFolder } from '@/types';
import { items } from '@/data/data';
import { useExplorerStore } from '../stores/explorer';

const selectedKeys = ref<string[]>([]);
const treeData = ref<TreeProps['treeData']>([]);
const folderStore = useExplorerStore();

const transformDataToThree = (data: Item[]): TreeProps['treeData'] => {
  const three: TreeProps['treeData'] = [];
  const transformDataFolderToThreeFolder = (item: Item): ThreeFolder => {
    const threeFolder: ThreeFolder = {
      title: item.title,
      key: item.id.toString(),
      // children: item.children
      //   ? item.children.map((child) => transformDataFolderToThreeFolder(child))
      //   : undefined,
    };
    if (item.children) {
      threeFolder.children = item.children.map((child) =>
        transformDataFolderToThreeFolder(child),
      );
    }
    return threeFolder;
  };
  data.forEach((item) => {
    const threeFolder: any = transformDataFolderToThreeFolder(item);
    three.push(threeFolder);
  });
  console.log(three);
  return three;
};

watch(selectedKeys, () => {
  folderStore.saveId(selectedKeys.value[0]);
});

onMounted(() => {
  // transformDataToThree(items);
  treeData.value = transformDataToThree(items);
});
</script>

<template>
  <a-tree v-model:selectedKeys="selectedKeys" show-line :tree-data="treeData">
    <template #switcherIcon="{ switcherCls }"
      ><down-outlined :class="switcherCls"
    /></template>
  </a-tree>
</template>
