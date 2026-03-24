import { allowedValues } from "@/components/TicTacToeSquare/constants";

/**
 * Method to get if the square input is valid
 * @param typedValue - value typed by user
 * @param lastCharPlayed - value from the last movement
 */
export const getIsValidInput = ({ typedValue, lastCharPlayed }) => {
  let errorMsg = "";
  const isTheSameAsLastPlayed = typedValue === lastCharPlayed;

  const isValidInput =
    allowedValues.includes(typedValue) && !isTheSameAsLastPlayed;

  if (!isValidInput) {
    errorMsg = "Is not a valid char to play";
  }

  if (isTheSameAsLastPlayed) {
    errorMsg = "Is turn to the other player to make a move!";
  }

  return { isValidInput, errorMsg };
};

/**
 * Method to normalize input entered by user E.g x => X || o => O || 0 => O
 * @param value - value typed by user
 */
export const getNormalizedValue = (value) => {
  let normalizedValue = value.toUpperCase();
  if (normalizedValue === "0") {
    return "O";
  }
  return normalizedValue;
};
