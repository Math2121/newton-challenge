import React from "react";

import SliderNextButton from "../Space/components/SliderNextButton";
import SliderPrevButton from "../Space/components/SliderPrevButton";
import Slider from "react-slick";
function SliderSpace() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderNextButton />,
    prevArrow: <SliderPrevButton />,
  };
  return (
    <>
      <Slider
        {...settings}
        className="w-full col-span-2 m-auto text-center relative top-24 "
      >
        <div className="relative">
          <img
            src="picture4.png"
            alt=""
            className=" h-full w-full object-cover float-right"
          />
        </div>
        <div className="">
          <img
            src="picture4.png"
            alt=""
            className=" h-full w-full object-cover float-right"
          />
        </div>
      </Slider>
    </>
  );
}

export default SliderSpace;
