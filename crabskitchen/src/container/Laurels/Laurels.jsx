import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./Laurels.css";

const Awardcard = ({ awards }) => {
  return (
    <div className="app__laurels_awards_card">
      <img src={awards.imgUrl} alt="award" />
      <div className="app__laurels_awards_card_content">
        <p className="p__opensans" style={{ color: "#DCCA87" }}>
          {awards.title}
        </p>
        <p className="p__opensans">{awards.subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div
    className="app__wrapper app__bg section__padding app__wrapper "
    id="awards"
  >
    <div className="app__wrapper_info ">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurel__awards">
        {data.awards.map((awards, index) => (
          <Awardcard key={awards.title} awards={awards} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
