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

const result = ref<number | null>(null);
const isLoading = ref(false);

const calculateFibonacci = (n: number): number => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

const handleCalculate = () => {
  isLoading.value = true;
  const fibonacciResult = calculateFibonacci(42);
  result.value = fibonacciResult;
  isLoading.value = false;
};
</script>

<style scoped></style>
