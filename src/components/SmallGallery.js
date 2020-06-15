import React from "react";
import "./css/Gallery.css";

function SmallGallery() {
  /*   $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // other options
    gallery: {
      // options for gallery
      enabled: true,
    },
  }); */

  return (
    <section id="gallery" className="container">
      <div>
        {/* section title */}
        <div className="row mb-2">
          <div className="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1">
              Galerija
            </h1>
          </div>
        </div>
        {/* end of section title */}
        <div className="photos">
          {/*image*/}
          <div className="image-grid ">
            <div className="image-container">
              <img
                src="img/aboutImg/about-1.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
              <a href="img/aboutImg/about-1.jpg">
                <h5 className="text-uppercase text-center item-link px-3">
                  click to zoom
                </h5>
              </a>
            </div>
          </div>
          {/*image end*/}
          {/*image*/}
          <div className="image-grid">
            <div className="image-container">
              <img
                src="img/aboutImg/about-2.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
              <a href="img/aboutImg/about-2.jpg">
                <h5 className="text-uppercase text-center item-link px-3">
                  click to zoom
                </h5>
              </a>
            </div>
          </div>
          {/*image end*/}
          {/*image*/}
          <div className="image-grid">
            <div className="image-container">
              <img
                src="img/aboutImg/about-5.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
              <a href="img/aboutImg/about-5.jpg">
                <h5 className="text-uppercase text-center item-link px-3">
                  click to zoom
                </h5>
              </a>
            </div>
          </div>
          {/*image end*/}
          {/*image*/}
          <div className="image-grid">
            <div className="image-container">
              <img
                src="img/aboutImg/about-6.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
              <a href="img/aboutImg/about-6.jpg">
                <h5 className="text-uppercase text-center item-link px-3">
                  click to zoom
                </h5>
              </a>
            </div>
          </div>
          {/*image end*/}
          {/*image*/}
          <div className="image-grid">
            <div className="image-container">
              <img
                src="img/aboutImg/about-5.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
              <a href="img/aboutImg/about-5.jpg">
                <h5 className="text-uppercase text-center item-link px-3">
                  click to zoom
                </h5>
              </a>
            </div>
          </div>
          {/*image end*/}
          {/*image*/}
          <div className="image-grid">
            <div className="image-container">
              <img
                src="img/aboutImg/about-6.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
              <a href="img/aboutImg/about-6.jpg">
                <h5 className="text-uppercase text-center item-link px-3">
                  click to zoom
                </h5>
              </a>
            </div>
          </div>
          {/*image end*/}
          {/*image*/}
          <div className="image-grid">
            <div className="image-container">
              <img
                src="img/aboutImg/about-2.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
              <a href="img/aboutImg/about-2.jpg">
                <h5 className="text-uppercase text-center item-link px-3">
                  click to zoom
                </h5>
              </a>
            </div>
          </div>
          {/*image end*/}
          {/*image*/}
          <div className="image-grid">
            <div className="image-container">
              <img
                src="img/aboutImg/about-1.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
              <a href="img/aboutImg/about-1.jpg">
                <h5 className="text-uppercase text-center item-link px-3">
                  click to zoom
                </h5>
              </a>
            </div>
          </div>
          {/*image end*/}
        </div>
      </div>
    </section>

    /* </div> */
  );
}

export default SmallGallery;
