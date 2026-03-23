<script setup>
import { ref, watchEffect } from "vue";
import { allowedValues } from "@/components/constants";

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

/**
 * Method to get if the square input is valid
 * @param value - value typed by user
 */
const getIsValidInput = (value) => {
  const isValidInput = allowedValues.includes(value);
  return isValidInput;
};

/**
 * Method to normalize input entered by user E.g x => X || o => O || 0 => O
 * @param value - value typed by user
 */
const getNormalizedValue = (value) => {
  let normalizedValue = value.toUpperCase();
  if (normalizedValue === "0") {
    return "O";
  }
  return normalizedValue;
};

/**
 * Method to handle board square change
 * @param event - Event triggered by square input change
 */
const handleSquareInputChange = (event) => {
  let typedValue = event.target.value;

  const isValidInput = getIsValidInput(typedValue);

  if (!isValidInput) {
    //Block enter any other value that is not allowed
    event.target.value = "";
    return;
  }

  typedValue = getNormalizedValue(typedValue);

  squareInput.value = typedValue;

  handleMatrixChange({
    columnIndex,
    rowIndex,
    squareValue: typedValue,
  });
};

/**
 * Here we put an initial value or reset ref from parent component
 */
watchEffect(() => {
  squareInput.value = squareValue;
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
