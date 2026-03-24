import { allowedValues } from "@/components/TicTacToeSquare/constants";

/**
 * Method to get if the square input is valid
 * @param value - value typed by user
 */
export const getIsValidInput = (value) => {
  const isValidInput = allowedValues.includes(value);
  return isValidInput;
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
