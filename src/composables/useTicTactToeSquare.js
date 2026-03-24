import { ref, watchEffect } from "vue";
import {
  getIsValidInput,
  getNormalizedValue,
} from "@/components/TicTacToeSquare/ticTacToeSquareFunctions";

export const useTicTacToeSquare = ({
  squareValue,
  handleMatrixChange,
  columnIndex,
  rowIndex,
}) => {
  const squareInput = ref("");

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
    squareInput.value = squareValue.value;
  });

  return { squareInput, handleSquareInputChange };
};
