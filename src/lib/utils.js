// export const shuffle = function (arr) {
//   let newPos, temp;
//   for (let i = arr.length - 1; i > 0; i--) {
//     newPos = Math.floor(Math.random() * (i + 1));
//     temp = arr[i];
//     arr[i] = arr[newPos];
//     arr[newPos] = temp;
//   }
//   return arr;
// };

// shuffle the array
export const shuffleArray = (arr) => {
  const copy = [...arr];
  // loop over half or full of the array
  for (let i = 0; i < copy.length; i++) {
    // for each index,i pick a random index j
    let j = parseInt(Math.random() * copy.length);
    // swap elements at i and j
    let temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
};

export const addBoxProperties = (number) => {
  const column = number % 4;
  const row = (number / 4) << 0;
  return {
    column,
    row,
  };
};
