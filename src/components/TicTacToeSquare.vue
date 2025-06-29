<script setup>
import { computed, ref, watchEffect } from "vue";

const {
  isThereAWinner,
  columnIndex,
  rowIndex,
  handleMatrixChange,
  squareValue,
} = defineProps({
  isThereAWinner: Boolean,
  handleMatrixChange: Function,
  columnIndex: Number,
  rowIndex: Number,
  squareValue: String,
});

const squareInput = ref("");
// Define allowed characters (e.g., only letters)
const allowedXValues = ["X", "x"];
const allowedOValues = ["O", "o", 0, "0"];

const handleSquareInputChange = (event) => {
  if (isThereAWinner) {
    event.target.value = "";
  }
  let value = event.target.value;
  if (![...allowedXValues, ...allowedOValues].includes(value)) {
    event.target.value = squareInput.value;
    return;
  }
  if (allowedOValues.includes(value)) {
    value = "O";
  }
  value = value.toUpperCase();
  squareInput.value = value;
  handleMatrixChange({
    columnIndex,
    rowIndex,
    squareValue: value,
  });
};

watchEffect(() => {
  squareInput.value = squareValue;
});
</script>

<template>
  <div
    class="'flex w-1/3 bg-slate-200 outline-1 outline-slate-400 focus-within:bg-slate-300 focus-within:scale-102 transition-transform duration-100 ease-in-out'"
  >
    <input
      type="text"
      :value="squareInput"
      @input="handleSquareInputChange"
      @click="handleFocusedSquare"
      maxlength="1"
      :class="[
        'w-full h-full outline-none text-9xl text-center caret-transparent',
      ]"
    />
  </div>
</template>
