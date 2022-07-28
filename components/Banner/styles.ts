import styled from "styled-components";

export const SliderContent = styled.section`
  position: relative;
  .slick-next {
    display: none !important;
  }
  .slick-dots {
    bottom: 0 !important;
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 10px;
  }
  .slick-dots li button:before {
    font-size: 10px;
    color: #848484;
  }
`;
