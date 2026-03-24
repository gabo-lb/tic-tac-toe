<script setup>
import { useBoardMatrix } from "@/composables/useBoardMatrix";

const { winnerCharValue } = useBoardMatrix();
</script>

<template>
  <div v-if="winnerCharValue">"{{ winnerCharValue }}" Wins!</div>
</template>
