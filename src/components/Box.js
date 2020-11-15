import React from "react";
import Boxelement from "../elements/Boxelement";

const Box = (props, { onClick }) => {
  const { number } = props;
  onClick = () => {
    props.onClick(props);
  };
  return <Boxelement onClick={onClick}>{props.box}</Boxelement>;
};
export default Box;
