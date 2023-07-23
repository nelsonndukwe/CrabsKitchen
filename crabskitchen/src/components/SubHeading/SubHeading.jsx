import React from 'react';
import { images } from "../../constants";

const SubHeading = ({title}) => (
  <div className='app__subheading-conatiner'>
    <p className='p__cormorant'>{title}</p>

    <img src={images.spoon} alt="sppon" className='spoon__img'/>
  </div>
);

export default SubHeading;
