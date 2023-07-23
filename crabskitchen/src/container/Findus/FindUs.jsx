import React from 'react';
import { images } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info ' >
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant ' style={{marginBottom: "3rem"}}>Find Us</h1>

      <div className='app__wrapper_content'>
      <p className='p__cormorant' style={{color: "#DCCA87", marginBottom: "2rem "}} >Resturant Address</p>

        <p className='p__opensans' style={{marginBottom: "2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='p__cormorant' style={{color: "#DCCA87", marginBottom: "2rem "}} >Opening Hours</p>
        <p className='p__opensans' style={{marginBottom: "1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='p__opensans' style={{marginBottom: "1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>

        <button className='custom__button' style={{marginTop: "3rem"}}>Visit us</button>
      </div>




      <div className='app__wrapper_img ' >
        <img src={images.findus} alt='findus img' />
        </div>
  </div>
);

export default FindUs;
