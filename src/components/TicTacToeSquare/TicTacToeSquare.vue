<script setup>
import { useTicTacToeSquare } from "@/composables/useTicTactToeSquare";
import { toRef } from "vue";

const props = defineProps({
  isThereAWinner: Boolean,
  handleMatrixChange: Function,
  columnIndex: Number,
  rowIndex: Number,
  squareValue: String,
});

const { squareInput, handleSquareInputChange } = useTicTacToeSquare({
  squareValue: toRef(props, "squareValue"),
  handleMatrixChange: props.handleMatrixChange,
  columnIndex: props.columnIndex,
  rowIndex: props.rowIndex,
});
</script>

<template>
  <div
    class="'flex w-1/3 bg-slate-200 outline-1 outline-slate-400 focus-within:bg-slate-300 focus-within:scale-102 transition-transform duration-100 ease-in-out'"
  >
    <input
      class="w-full h-full outline-none text-9xl text-center caret-transparent"
      type="text"
      :value="squareInput"
      @input="handleSquareInputChange"
      @click="handleFocusedSquare"
      maxlength="1"
      :disabled="isThereAWinner"
    />
  </div>
</template>
