import React from "react";
import Boxelement from "../elements/Boxelement";

const Box = ({ number, boxClick }) => {
  return <Boxelement onClick={boxClick}>{number}</Boxelement>;
};
export default Box;
