import React, { useState, useEffect } from "react";
import Boxelement from "../elements/Boxelement";

const Box = (props, { onClick }) => {
  const [hide, setHide] = useState(false);
  onClick = () => {
    props.onClick(props);
  };

  useEffect(() => {
    props.box === 16 ? setHide(true) : setHide(false);
  }, [props.box]);

  return (
    <Boxelement state={hide} onClick={onClick}>
      {props.box}
    </Boxelement>
  );
};
export default Box;
