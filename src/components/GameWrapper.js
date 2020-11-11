import React, { useState } from "react";
import Box from "./Box";
import Button from "../elements/Button";
import WrapperDiv from "../elements/WrapperDiv";

const boxes = [
  { box: "1" },
  { box: "2" },
  { box: "3" },
  { box: "4" },
  { box: "5" },
  { box: "6" },
  { box: "8" },
  { box: "9" },
  { box: "10" },
  { box: "11" },
  { box: "12" },
  { box: "13" },
  { box: "14" },
  { box: "15" },
];

const GameWrapper = () => {
  const [boxamount, setBoxes] = useState(boxes);
  const draw = () => {
    console.log("start game clicked");
    // setBoxes(boxes);
  };

  console.log(boxes);
  return (
    <>
      <Button onClick={draw}>Start Game</Button>
      <WrapperDiv>
        {boxamount.map((item, index) => {
          return <Box key={index} tile={item.box} />;
        })}
      </WrapperDiv>
    </>
  );
};

export default GameWrapper;
