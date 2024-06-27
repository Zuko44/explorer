<script setup lang="ts">
import { onMounted, ref } from 'vue';

const accent = ref();

interface Emits {
  (e: 'switchBaseModal'): void;
}

const emit = defineEmits<Emits>();

const closeHandler = () => {
  emit('switchBaseModal');
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
      <div class="strike_container">
        <img
          class="strike"
          src="../assets/icons/strike.svg"
          alt="close"
          @click="closeHandler"
        />
      </div>
      <h2>Explorer</h2>
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
}

.strike_container {
  text-align: right;
}

.strike {
  cursor: pointer;
  padding: 10px;
}
</style>
