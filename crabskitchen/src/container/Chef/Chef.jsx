import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>


      <div className="app__chef-content">


        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Totam facere maiores eum ea aliquam nihil voluptatum molestias,
          molestiae voluptatibus repellendus. Vitae, nam iusto labore architecto
          provident laboriosam minus tenetur nobis!
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Nelson stallion</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
