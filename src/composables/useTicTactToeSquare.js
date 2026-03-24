import { ref, watchEffect } from "vue";
import {
  getIsValidInput,
  getNormalizedValue,
} from "@/components/TicTacToeSquare/ticTacToeSquareFunctions";
import { useBoardMatrix } from "@/composables/useBoardMatrix";

export const useTicTacToeSquare = ({
  squareValue,
  handleMatrixChange,
  columnIndex,
  rowIndex,
}) => {
  const squareInput = ref("");

  const { handleErrorMessage, lastCharPlayed } = useBoardMatrix();

  /**
   * Method to handle board square change
   * @param event - Event triggered by square input change
   */
  const handleSquareInputChange = (event) => {
    let typedValue = event.target.value;

    const normalizedValue = getNormalizedValue(typedValue);

    const { isValidInput, errorMsg } = getIsValidInput({
      typedValue: normalizedValue,
      lastCharPlayed: lastCharPlayed.value,
    });

    handleErrorMessage(errorMsg);

    if (!isValidInput) {
      //Block enter any other value that is not allowed
      event.target.value = "";
      return;
    }

    squareInput.value = normalizedValue;

    handleMatrixChange({
      columnIndex,
      rowIndex,
      squareValue: normalizedValue,
    });

    lastCharPlayed.value = normalizedValue;
  };

  /**
   * Here we put an initial value or reset ref from parent component
   */
  watchEffect(() => {
    squareInput.value = squareValue.value;
  });

  return { squareInput, handleSquareInputChange };
};
