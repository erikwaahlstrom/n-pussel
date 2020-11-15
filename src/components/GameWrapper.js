import React, { useEffect, useState } from "react";
import { shuffleArray, addBoxProperties } from "../lib/utils";
import Box from "./Box";
import WrapperDiv from "../elements/WrapperDiv";

const boxesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export const shuffledArray = shuffleArray(boxesArray);

const GameWrapper = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes(generateBox(shuffledArray));
  }, []);

  const generateBox = (boxArr) => {
    const tempBox = [];

    boxArr.forEach((box, index) => {
      tempBox[index] = {
        ...addBoxProperties(index),
        box,
      };
    });

    return tempBox;
  };

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

  const boxSwap = (clickedBoxIndex, emptyBoxIndex) => {
    let tempArray = [...boxes];
    tempArray[emptyBoxIndex] = boxes[clickedBoxIndex];
    tempArray[clickedBoxIndex] = boxes[emptyBoxIndex];
    setBoxes(() => [...tempArray]);
  };

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
