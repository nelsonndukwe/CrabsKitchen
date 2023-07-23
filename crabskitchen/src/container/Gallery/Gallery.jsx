import React, { useRef, useState } from "react";
import { images } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import {
  BsInstagram,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";
import "./Gallery.css";


const Galleryimages = [
  images.crabs3,
  images.gallery01,
  images.crabs,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.crabs2,
  
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

 

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant ">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          accusantium facere ipsum voluptatibus dicta ratione minima veritatis
          iste est odit. Dicta rerum minima molestiae. Rerum sequi et vel ullam
          doloribus?
        </p>
        <button className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images-container" ref={scrollRef}>
          {Galleryimages.map((image, index) => {
            return (
              <div className="app__gallery_card-images flex__center" key={`gallery_image-${index + 1} `}>
                <img src={image} alt="menu images" />
                <BsInstagram className="app__gallery-images-icon"/>
                </div>
            )
          })}
        </div>

        <div className="app__gallery-images-arrow">
          <BsArrowLeftShort
            className="app__gallery-images-arrow-icon"
            onClick={() => scroll("left")}
          />

          <BsArrowRightShort
            className="app__gallery-images-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
