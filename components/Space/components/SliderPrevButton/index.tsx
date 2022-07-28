import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "./styles";

function SliderPrevButton(props:any) {
    const { className, style, onClick } = props;
  return (
    <Button onClick={onClick}>
      <FaArrowLeft />
    </Button>
  );
}

export default SliderPrevButton;
