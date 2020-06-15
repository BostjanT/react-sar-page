import React/*  { useState } */ from "react";
import "./css/Carousel.css";
import ImgComp from "./ImgComp";
/* import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons"; */

function Sponsors() {
  /* const [imageIndex, setImageIndex] = useState(0); */
  let sliderArr = [
    <ImgComp src={"../img/company-logos/Hertz_logo.jpg"} />,
    <ImgComp src={"../img/company-logos/logo_triglav.png"} />,
    <ImgComp src={"../img/company-logos/pasjinet.jpg"} />,
  ];

  /*   const prevSlide = () => {
    const lastIndex = sliderArr.length - 1;
    const resetIndex = imageIndex === 0;
    const index = resetIndex ? lastIndex : imageIndex - 1;
    setImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = sliderArr.length - 1;
    const resetIndex = imageIndex === lastIndex;
    const index = resetIndex ? lastIndex : imageIndex + 1;
    setImageIndex(index);
  };
 */
  return (
    <div className="color">
      <div className="text">
        <h2>Sponzorji</h2>
      </div>
      <div className="slider">
        {sliderArr.map((item, i) => {
          if (i < sliderArr.length - 1) {
            i++;
          } else {
            i = 0;
          }
          return (
            <div key={i} className="slide fade">
              {item}
            </div>
          );
        })}
        {/* <IconContext.Provider value={{ className: "carousel-btn" }}>
          <button id="goLeft" onClick={prevSlide}>
            {FaChevronLeft}
          </button>
          <button id="goRight" onClick={nextSlide}>
            {FaChevronRight}
          </button>
        </IconContext.Provider> */}
      </div>
    </div>
  );
}

export default Sponsors;

/* setTimeout({item}, 3000) */
