<script setup>
import { useBoardMatrix } from "@/composables/useBoardMatrix";

const { handleResetGame } = useBoardMatrix();
</script>

<template>
  <button
    class="border-2 rounded-2xl p-2 m-2 shadow-md hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:border-blue-500 ease-in-out duration-100"
    @click="handleResetGame"
  >
    Reset Game
  </button>
</template>
