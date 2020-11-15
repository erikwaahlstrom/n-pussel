import React, { useEffect, useState } from "react";
import { shuffleArray, addBoxProperties, distanceBetween } from "../lib/utils";
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

    const distance = distanceBetween(box, emptyBox);
    if (distance.neighbours) {
      swap(boxIndex, emptyBoxIndex);
    }
  };

  const swap = (clickedBoxIndex, emptyBoxIndex) => {
    let tempArr = [...boxes];
    tempArr[emptyBoxIndex] = boxes[clickedBoxIndex];
    tempArr[clickedBoxIndex] = 0;

    setBoxes(() => [...tempArr]);
  };

  console.log("boxes", boxes);
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
