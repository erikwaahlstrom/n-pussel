export const shuffleArray = function (arr) {
  let newPos, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }
  return arr;
};

export const addBoxProperties = (number) => {
  const column = number % 4;
  const row = (number / 4) << 0;
  return {
    column,
    row,
  };
};

export const distanceBetween = (boxPosition, emptyPosition) => {
  const sameRow = boxPosition.row === emptyPosition.row;
  const sameColumn = boxPosition.column === emptyPosition.column;
  const rowDiff = boxPosition.row - emptyPosition.row;
  const columnDiff = boxPosition.column - emptyPosition.column;
  const diffRow = Math.abs(rowDiff) === 1;
  const diffColumn = Math.abs(columnDiff) === 1;
  const sameRowDiffColumn = sameRow && diffColumn;
  const sameColumnDiffRow = sameColumn && diffRow;

  return {
    neighbours: sameRowDiffColumn || sameColumnDiffRow,
  };
};
