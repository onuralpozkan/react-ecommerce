import { useState } from "react";
import { imageUrls } from "./images.js";
import Slide from "./Slide";
import "./Slider.css";

const Slider = () => {
  let dots = [];
  for (let i = 0; i < imageUrls.length; i++) {
    dots.push("dot");
  }
  const [imgIndex, setImgIndex] = useState(0);
  const changeImg = (n) => {
    setImgIndex((state) =>
      state + n < 0
        ? imageUrls.length - 1
        : state + n > imageUrls.length - 1
        ? 0
        : state + n
    );
  };

  const imgDots = dots.map((dot, index) => <span key={index} className={`${dot} ${index == imgIndex ? 'fill' : ''}`}></span>)
  const slides = imageUrls.map((image, index) => <Slide key={index} {...image} imgIndex={{imgIndex, index}} />)
  return (
    <div className="slider-container">
      {slides}      

      <button
        onClick={() => changeImg(-1)}
        className="changeSlide prev"
      >
        <i class="las la-angle-left"></i>
      </button>
      <button
        onClick={() => changeImg(+1)}
        className="changeSlide next"
      >
        <i class="las la-angle-right"></i>
      </button>
      <div class="dots">
       {imgDots}
      </div>
    </div>
  );
};

export default Slider;
