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

// export const isSolvable = (arr) => {
//   let number_of_inv = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] && arr[j] && arr[i] > arr[j]) number_of_inv++;
//     }
//   }
//   return number_of_inv % 2 == 0;
// };

export const addBoxProperties = (number) => {
  const column = number % 4;
  const row = (number / 4) << 0;
  return {
    column,
    row,
  };
};
