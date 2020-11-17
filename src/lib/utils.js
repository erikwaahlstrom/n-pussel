// IS POSSIBLE
export const isSolvable = (arr) => {
  let number_of_inv = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < i; j++) {
      if (arr[i] && arr[j] && arr[i] > arr[j]) number_of_inv++;
    }
  }
  return number_of_inv % 2 === 0;
};

export const shuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const addBoxProperties = (number) => {
  const column = number % 4;
  const row = (number / 4) << 0;
  return {
    column,
    row,
  };
};
