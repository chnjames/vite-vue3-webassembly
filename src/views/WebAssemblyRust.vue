<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <button @click="handleCalculate"
      class="mb-8 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
      计算斐波那契数列
    </button>
    <Spinner v-if="isLoading" />
    <p v-else class="text-xl">结果: {{ result }}</p>
  </div>
</template>

<script lang="ts" setup>
import Spinner from '@/components/Spinner.vue';

import { ref } from 'vue';
import init, { fibonacci } from '@/assembly/pkg/hello_wasm.js';

const result = ref<number | null>(null);
const isLoading = ref(false);

const handleCalculate = async () => {
  isLoading.value = true;

  await init();
  result.value = fibonacci(42);

  isLoading.value = false;
};
</script>

<style scoped></style>
