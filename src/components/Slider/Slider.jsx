import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  const [images, setImages] = useState([]);
  const [dots, setDots] = useState([]);
  useEffect(() => {
    setImages(document.querySelectorAll("img"));
    setDots(document.querySelectorAll(".dot"));
  }, []);

  let imgIndex = 0;
  const handleSlideChange = (dir) => {
    if (dir > 0) {
      imgIndex = imgIndex < images.length - 1 ? imgIndex + 1 : 0;
    } else {
      imgIndex = imgIndex > 0 ? imgIndex - 1 : images.length - 1;
    }
    images.forEach((slide) => (slide.className = ""));
    images[imgIndex].classList.add("active");
    dots.forEach((dot) => (dot.className = "dot"));
    dots[imgIndex].classList.add("fill");
  };

  return (
    <div className="slider-container">
      <Link to="/categories/beverages-1">
        <img
          className="active"
          src="/assets/images/slider_images/beverages.jpg"
          alt="Beverages"
        />
      </Link>
      <Link to="/categories/condiments-2">
        <img
          src="/assets/images/slider_images/condiments.jpg"
          alt="Condiments"
        />
      </Link>
      <Link to="/categories/electronics-9">
        <img
          src="/assets/images/slider_images/electronics.jpg"
          alt="Electronics"
        />
      </Link>

      <button
        onClick={() => handleSlideChange(-1)}
        className="changeSlide prev"
      >
        <i class="las la-angle-left"></i>
      </button>
      <button
        onClick={() => handleSlideChange(+1)}
        className="changeSlide next"
      >
        <i class="las la-angle-right"></i>
      </button>
      <div class="dots">
        <span className="dot fill"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Slider;
