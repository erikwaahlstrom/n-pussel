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
