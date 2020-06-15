import React from "react";

function ImgComp({ src }) {
  const imgStyles = {
    width: "auto",
    height: "76px",
  };
  return <img src={src} alt="slide-img" style={imgStyles} />;
}

export default ImgComp;
