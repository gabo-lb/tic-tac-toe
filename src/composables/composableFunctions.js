/**
 * Method to check if there is a winner in the vertical direction, it iterates
 * through each column and checks if all the values in that column are the same
 * and not empty. If a winner is found, it returns the character representing
 * the winner, otherwise it returns an empty string.
 * @param {Array} boardMatrix - The current state of the game board represented
 * as a 2D array.
 */
const checkForVerticalWinner = (boardMatrix) => {
  const boardMatrixColumnsLength = boardMatrix.at(0).length;

  let hasVerticalWinnerChar = "";
  for (
    let columnIndex = 0;
    columnIndex < boardMatrixColumnsLength;
    columnIndex++
  ) {
    const columnFirstValue = boardMatrix.at(0).at(columnIndex);
    const columnSecondValue = boardMatrix.at(1).at(columnIndex);
    const columnThirdValue = boardMatrix.at(2).at(columnIndex);

    const isColumnComplete =
      columnFirstValue &&
      columnSecondValue &&
      columnThirdValue &&
      columnFirstValue === columnSecondValue &&
      columnFirstValue === columnThirdValue;

    if (isColumnComplete) {
      hasVerticalWinnerChar = columnFirstValue;
    }
  }
  return hasVerticalWinnerChar;
};

/**
 * Method to check if there is a winner in the horizontal direction, it iterates
 * through each row and checks if all the values in that row are the same and
 * not empty. If a winner is found, it returns the character representing the
 * winner, otherwise it returns an empty string.
 * @param {Array} boardMatrix - The current state of the game board represented
 * as a 2D array.
 */
const checkForHorizontalWinner = (boardMatrix) => {
  let hasHorizontalWinnerChar = "";
  boardMatrix.forEach((row) => {
    const [rowFirstValue, rowSecondValue, rowThirdValue] = row;
    if (!rowFirstValue && !rowSecondValue && !rowThirdValue) return "";
    const hasHorizontalWinner =
      rowFirstValue === rowSecondValue && rowFirstValue === rowThirdValue;
    if (hasHorizontalWinner) {
      hasHorizontalWinnerChar = rowFirstValue;
    }
  });
  return hasHorizontalWinnerChar;
};

/**
 * Method to check if there is a winner in the diagonal direction, it checks the
 * two diagonals of the board and checks if all the values in either diagonal
 * are the same and not empty. If a winner is found, it returns the character
 * representing the winner, otherwise it returns an empty string.
 * @param {Array} boardMatrix - The current state of the game board represented
 * as a 2D array.
 */
const checkForDiagonalWinner = (boardMatrix) => {
  const boardMiddleRow = boardMatrix.at(1);
  const centerValue = boardMiddleRow.at(1);

  if (!centerValue) return "";
  const boardTopRow = boardMatrix.at(0);
  const boardBottomRow = boardMatrix.at(2);
  const cornerLeftTopValue = boardTopRow.at(0);
  const cornerRightTopValue = boardTopRow.at(2);
  const cornerLeftBottomValue = boardBottomRow.at(0);
  const cornerRightBottomValue = boardBottomRow.at(2);
  let diagonalWinnerChar = "";
  if (cornerLeftTopValue && cornerRightBottomValue) {
    const isLeftDiagonalWinner =
      cornerLeftTopValue === centerValue &&
      cornerLeftTopValue === cornerRightBottomValue;
    if (isLeftDiagonalWinner) {
      diagonalWinnerChar = cornerLeftTopValue;
    }
  }
  if (cornerRightTopValue && cornerLeftBottomValue) {
    const isRightDiagonalWinner =
      cornerRightTopValue === centerValue &&
      cornerRightTopValue === cornerLeftBottomValue;
    if (isRightDiagonalWinner) {
      diagonalWinnerChar = cornerRightTopValue;
    }
  }
  return diagonalWinnerChar;
};

/**
 * Method to check for any winner on the board, it checks for vertical,
 * horizontal, and diagonal winners. If a winner is found in any of these
 * directions, it returns the character representing the winner, otherwise it
 * returns an empty string.
 * @param {Array} boardMatrix - The current state of the game board represented
 * as a 2D array.
 */
export const checkForAnyWinner = (boardMatrixValue) => {
  const verticalWinnerChar = checkForVerticalWinner(boardMatrixValue);
  if (verticalWinnerChar) {
    return verticalWinnerChar;
  }

  const horizontalWinnerChar = checkForHorizontalWinner(boardMatrixValue);
  if (horizontalWinnerChar) {
    return horizontalWinnerChar;
  }

  const diagonalWinnerChar = checkForDiagonalWinner(boardMatrixValue);
  if (diagonalWinnerChar) {
    return diagonalWinnerChar;
  }
};

/**
 * Method to get a clean matrix board, it returns a 2D array representing an
 * empty game board with all values set to an empty string.
 */
export const getCleanMatrixBoard = () => [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
