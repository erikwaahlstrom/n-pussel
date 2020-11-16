import React, { useEffect, useState } from "react";
import { shuffleArray, addBoxProperties } from "../lib/utils";
import Box from "./Box";
import WrapperDiv from "../elements/WrapperDiv";

const boxesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// export const shuffledArray = shuffleArray(boxesArray);

const GameWrapper = () => {
  ///////////////////////
  // STATE
  ///////////////////////
  const [boxes, setBoxes] = useState([]);

  // UPDATE STATE INITIAL
  useEffect(() => {
    // setBoxes(generateBox(shuffledArray));
    setBoxes(generateBox(boxesArray));
  }, []);

  ///////////////////////
  // DRAW OUT BOXES
  ///////////////////////
  const generateBox = (boxArr) => {
    let shuffled = shuffleArray(boxArr);
    console.log("shuffled", shuffled);

    while (!isSolvable(shuffled)) {
      shuffled = shuffleArray(boxArr);
    }

    const tempBox = [];

    shuffled.forEach((box, index) => {
      tempBox[index] = {
        ...addBoxProperties(index),
        box,
      };
    });

    return tempBox;
  };

  ///////////////////////
  // IS POSSIBLE
  ///////////////////////
  const isSolvable = (arr) => {
    let number_of_inv = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] && arr[j] && arr[i] > arr[j]) number_of_inv++;
      }
    }
    return number_of_inv % 2 === 0;
  };

  ///////////////////////
  // CLICK SINGLE BOX
  ///////////////////////
  const boxClick = (box) => {
    const emptyBox = boxes.find((empty) => empty.box === 16);
    const emptyBoxIndex = boxes.indexOf(emptyBox);
    const boxIndex = boxes.findIndex((index) => index.box === box.box);

    if (boxIndex + 4 === emptyBoxIndex || boxIndex - 4 === emptyBoxIndex) {
      boxSwap(boxIndex, emptyBoxIndex);
    } else if (boxIndex + 1 === emptyBoxIndex && emptyBoxIndex % 4 !== 0) {
      boxSwap(boxIndex, emptyBoxIndex);
    } else if (
      boxIndex - 1 === emptyBoxIndex &&
      (emptyBoxIndex + 1) % 4 !== 0
    ) {
      boxSwap(boxIndex, emptyBoxIndex);
    }
  };

  ///////////////////////
  // SWAP BOX WITH EMPTY WHEN CLICKED
  ///////////////////////
  const boxSwap = (clickedBoxIndex, emptyBoxIndex) => {
    let tempArray = [...boxes];
    tempArray[emptyBoxIndex] = boxes[clickedBoxIndex];
    tempArray[clickedBoxIndex] = boxes[emptyBoxIndex];
    setBoxes(() => [...tempArray]);
  };

  console.log(
    "boxes",
    boxes.map((item) => item.box)
  );

  return (
    <>
      <WrapperDiv>
        {boxes.map((box, index) => {
          return <Box {...box} onClick={boxClick} key={index} />;
        })}
      </WrapperDiv>
    </>
  );
};

export default GameWrapper;
