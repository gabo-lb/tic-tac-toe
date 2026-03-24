<script setup>
import { useBoardMatrix } from "@/composables/useBoardMatrix";

const { errorMessage } = useBoardMatrix();
</script>

<template>
  <div class="text-red-500">{{ errorMessage }}</div>
</template>
