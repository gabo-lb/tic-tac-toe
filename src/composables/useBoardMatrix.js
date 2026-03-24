import { ref } from "vue";
import {
  checkForAnyWinner,
  getCleanMatrixBoard,
} from "@/composables/composableFunctions";

const boardMatrix = ref(getCleanMatrixBoard());

const winnerCharValue = ref("");

const errorMessage = ref("");

const lastCharPlayed = ref("");

/**
 * Method to handle error messages related to invalid input in the tic-tac-toe
 * game.
 * @param {String} errorMsg - The error message to display.
 */
const handleErrorMessage = (errorMsg) => {
  errorMessage.value = errorMsg;
};

/**
 * Method to handle changes in the board matrix when a player makes a move. It
 * updates the board matrix with the new value and checks for a winner.
 * If a winner is found, it updates the winner character value.
 * @param {number} columnIndex - The index of the column where the change
 * occurred.
 * @param {number} rowIndex - The index of the row where the change occurred.
 * @param {string} squareValue - The value of the square that was changed
 * (e.g., 'X' or 'O').
 */
const handleMatrixChange = ({ columnIndex, rowIndex, squareValue }) => {
  boardMatrix.value[rowIndex][columnIndex] = squareValue;
  const boardMatrixValue = boardMatrix.value;
  const winnerChar = checkForAnyWinner(boardMatrixValue);
  if (winnerChar) {
    winnerCharValue.value = winnerChar;
  }
};

/**
 * Method to reset the game by clearing the board matrix and resetting the
 * winner character value. It sets the board matrix to a clean state and clears
 * any winner information.
 */
const handleResetGame = () => {
  boardMatrix.value = getCleanMatrixBoard();
  handleErrorMessage("");
  lastCharPlayed.value = "";
  winnerCharValue.value = "";
};

/**
 * Composable function that provides the board matrix and related
 * functionalities for a tic-tac-toe game.
 * It includes the board matrix state, the winner character value, and functions
 * to handle matrix changes and reset the game.
 */
export const useBoardMatrix = () => ({
  boardMatrix,
  winnerCharValue,
  errorMessage,
  lastCharPlayed,
  handleMatrixChange,
  handleResetGame,
  handleErrorMessage,
});
