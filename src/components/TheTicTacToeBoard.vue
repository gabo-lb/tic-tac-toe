<script setup>
import TicTacToeSquare from "./TicTacToeSquare.vue";
import { useBoardMatrix } from "@/composables/useBoardMatrix";

const { boardMatrix, winnerCharValue, handleMatrixChange, handleResetGame } =
  useBoardMatrix();
</script>

<template>
  <div class="w-96 h-96 outline-1">
    <div
      v-for="(row, rowIndex) in boardMatrix"
      :key="rowIndex"
      class="flex w-full h-1/3"
    >
      <TicTacToeSquare
        v-for="(square, columnIndex) in row"
        :key="columnIndex"
        :columnIndex
        :rowIndex
        :handleMatrixChange
        :isThereAWinner="Boolean(winnerCharValue)"
        :squareValue="square"
      />
    </div>
  </div>
  <div v-if="winnerCharValue">"{{ winnerCharValue }}" Wins!</div>
  <button
    class="border-2 rounded-2xl p-2 m-2 hover:cursor-pointer shadow-md"
    @click="handleResetGame"
  >
    Reset Game
  </button>
</template>
