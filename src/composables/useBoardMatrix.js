import { ref } from "vue";

const cleanBoardMatrix = () => [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const boardMatrix = ref(cleanBoardMatrix());

const winnerCharValue = ref(false);

const checkForHorizontalCombination = () => {
  let hasHorizontalWinnerChar = "";
  boardMatrix.value.forEach((row, rowIndex) => {
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
const boardMatrixColumnsLength = boardMatrix.value.at(0).length;

const checkForVerticalCombination = () => {
  let hasVerticalWinnerChar = "";
  for (
    let columnIndex = 0;
    columnIndex < boardMatrixColumnsLength;
    columnIndex++
  ) {
    const columnFirstValue = boardMatrix.value.at(0).at(columnIndex);
    const columnSecondValue = boardMatrix.value.at(1).at(columnIndex);
    const columnThirdValue = boardMatrix.value.at(2).at(columnIndex);

    const isVerticalComplete =
      columnFirstValue &&
      columnSecondValue &&
      columnThirdValue &&
      columnFirstValue === columnSecondValue &&
      columnFirstValue === columnThirdValue;
    if (isVerticalComplete) {
      hasVerticalWinnerChar = columnFirstValue;
    }
  }
  return hasVerticalWinnerChar;
};
const checkForDiagonalCombination = () => {
  const boardMiddleRow = boardMatrix.value.at(1);
  const centerValue = boardMiddleRow.at(1);
  if (!centerValue) return "";

  const boardTopRow = boardMatrix.value.at(0);
  const boardBottomRow = boardMatrix.value.at(2);

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

const checkForAnyWinner = () => {
  let isThereAWinnerCharValue = "";

  const verticalWinnerChar = checkForVerticalCombination();
  if (verticalWinnerChar) {
    isThereAWinnerCharValue = verticalWinnerChar;
  }

  const horizontalWinnerChar = checkForHorizontalCombination();
  if (horizontalWinnerChar) {
    isThereAWinnerCharValue = horizontalWinnerChar;
  }
  const diagonalWinnerChar = checkForDiagonalCombination();
  if (diagonalWinnerChar) {
    isThereAWinnerCharValue = diagonalWinnerChar;
  }
  winnerCharValue.value = isThereAWinnerCharValue;
};

const handleMatrixChange = ({ columnIndex, rowIndex, squareValue }) => {
  boardMatrix.value[rowIndex][columnIndex] = squareValue;
  checkForAnyWinner();
};

const handleResetGame = () => {
  boardMatrix.value = cleanBoardMatrix();
  winnerCharValue.value = false;
};

/**
 *
 * @returns
 */
export const useBoardMatrix = () => ({
  boardMatrix,
  winnerCharValue,
  handleMatrixChange,
  handleResetGame,
});
