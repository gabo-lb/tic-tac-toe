<script setup>
import TicTacToeSquare from "@/components/TicTacToeSquare/TicTacToeSquare.vue";
import { useBoardMatrix } from "@/composables/useBoardMatrix";

const { boardMatrix, winnerCharValue, handleMatrixChange } = useBoardMatrix();
</script>

<template>
  <div class="w-96 h-96 outline-1">
    <div
      v-for="(boardRow, boardRowIndex) in boardMatrix"
      :key="boardRowIndex"
      class="flex w-full h-1/3"
    >
      <TicTacToeSquare
        v-for="(square, columnIndex) in boardRow"
        :key="columnIndex"
        :columnIndex
        :rowIndex="boardRowIndex"
        :handleMatrixChange
        :isThereAWinner="Boolean(winnerCharValue)"
        :squareValue="square"
      />
    </div>
  </div>
</template>
