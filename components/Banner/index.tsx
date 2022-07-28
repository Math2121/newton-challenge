import Slider from "react-slick";
import { SliderContent } from "./styles";
function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderContent className="w-full">
      <Slider {...settings}>
        <div className="bg-[url('/picture3.png')] h-screen w-full text-center bg-cover bg-center	bg-no-repeat">
          <div className="flex justify-center h-full flex-col items-center z-40 relative">
            <h2 className="text-5xl text-white font-camaro font-bold">
              Lorem ipsum dolor sit amet
            </h2>
            <span className="font-segoe text-white text-xl">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
        <div className="bg-[url('/picture3.png')] h-screen w-full text-center bg-cover bg-center	bg-no-repeat">
          <div className="flex justify-center h-full flex-col items-center z-40 relative">
            <h2 className="text-5xl text-white font-camaro font-bold">
              Lorem ipsum dolor sit amet
            </h2>
            <span className="font-segoe text-white text-xl">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
      </Slider>
    </SliderContent>
  );
}

export default Banner;
