import React, { useEffect, useState } from "react";
import { shuffleArray, addBoxProperties } from "../lib/utils";
import Box from "./Box";
import WrapperDiv from "../elements/WrapperDiv";
import Button from "../elements/Button";
import HeaderOne from "../elements/HeaderOne";
import TitleWrapper from "../elements/TitleWrapper";
import Container from "../elements/Container";

const boxesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const compareArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const GameWrapper = () => {
  ///////////////////////
  // STATE
  ///////////////////////
  const [boxes, setBoxes] = useState([]);
  const [original] = useState(boxesArray);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const boxesJSON = makeJSON(boxes);
  }, [boxes]);

  useEffect(() => {
    const originalJSON = JSON.stringify(original);
    const compareArrayJSON = JSON.stringify(compareArray);

    const boxesJSON = makeJSON(boxes);

    if (originalJSON === boxesJSON) {
      setModal(true);
    }
  }, [boxes]);

  useEffect(() => {
    generateBox(boxesArray);
  }, []);

  ///////////////////////
  // MakeJSON converter
  ///////////////////////
  const makeJSON = (boxes) => {
    const mapedBoxState = boxes.map((item) => {
      return item.box;
    });

    const boxesJSON = JSON.stringify(mapedBoxState);

    return boxesJSON;
  };

  ///////////////////////
  // DRAW OUT BOXES
  ///////////////////////
  const generateBox = (boxArr) => {
    let shuffledArray = shuffleArray(boxArr);

    while (!isSolvable(shuffledArray)) {
      shuffledArray = shuffleArray(boxArr);
    }

    const tempBox = [];

    shuffledArray.forEach((box, index) => {
      tempBox[index] = {
        ...addBoxProperties(index),
        box,
      };
    });

    setBoxes(() => [...tempBox]);
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

  ///////////////////////
  // RESET CLICK
  ///////////////////////
  const resetClick = () => {
    generateBox(boxesArray);
  };

  return (
    <>
      <Container>
        {modal ? (
          <TitleWrapper>
            <HeaderOne>You finished the puzzle!</HeaderOne>
          </TitleWrapper>
        ) : (
          <TitleWrapper>
            <HeaderOne>Numbers Puzzle</HeaderOne>
          </TitleWrapper>
        )}

        <WrapperDiv>
          {boxes.map((box, index) => {
            return <Box {...box} onClick={boxClick} key={index} />;
          })}
        </WrapperDiv>
        <Button onClick={resetClick}>Restart game</Button>
      </Container>
    </>
  );
};

export default GameWrapper;
