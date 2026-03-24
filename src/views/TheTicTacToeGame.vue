<script setup>
import TheGameErrorMessage from "@/components/TheGameErrorMessage.vue";
import TheResetGameButton from "@/components/TheResetGameButton.vue";
import TheTicTacToeBoard from "@/components/TheTicTacToeBoard.vue";
import TheTicTacToeGameTitle from "@/components/TheTicTacToeGameTitle.vue";
import TheWinnerMessage from "@/components/TheWinnerMessage.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <TheTicTacToeGameTitle />
    <TheGameErrorMessage />
    <TheTicTacToeBoard />
    <TheWinnerMessage />
    <TheResetGameButton />
  </div>
</template>
