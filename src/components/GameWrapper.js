import React, { useState } from "react";
import { shuffleArray } from "../lib/utils";
import Box from "./Box";
import Button from "../elements/Button";
import WrapperDiv from "../elements/WrapperDiv";

const boxesArray = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
  { number: 7 },
  { number: 8 },
  { number: 9 },
  { number: 10 },
  { number: 11 },
  { number: 12 },
  { number: 13 },
  { number: 14 },
  { number: 15 },
  { number: 16 },
];

const GameWrapper = () => {
  const [
    boxes,
    // , setBoxes
  ] = useState(shuffleArray(boxesArray));
  const draw = () => {
    console.log("start game clicked");
    // setBoxes(boxes);
  };

  const boxClick = () => {
    console.log("box clicked");
  };
  return (
    <>
      <Button onClick={draw}>Start Game</Button>
      <WrapperDiv>
        {boxes.map((box, index) => {
          return <Box {...box} boxClick={boxClick} key={index} />;
        })}
      </WrapperDiv>
    </>
  );
};

export default GameWrapper;
