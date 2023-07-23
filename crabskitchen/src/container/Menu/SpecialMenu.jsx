import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding " id="menu">
    <div className="app__specailMenu-title">
      <SubHeading title="Menu that fits your palatte " />
      <h1 className="headtext__cormorant"> Todays Special</h1>
    </div>

    <div className="app__specailMenu-Menu">


      <div className="app__specialMenu_menu_wine flex__center">
        <p className="app__speacilMenu_menu_heading">Wine & Beer</p>

        <div className="app__speacilMenu_menu_item">
          {data.wines.map((item, index) => {
            return (
              <MenuItem
                key={item.title + index}
                tag={item.tags}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      
      <div className="app__specailMenu_menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu_menu_cocktails flex__center">
        <p className="app__speacilMenu_menu_heading">Cocktails</p>
        <div className="app__speacilMenu_menu_item">
          {data.cocktails.map((item, index) => {
            return (
              <MenuItem
                key={item.title + index}
                tag={item.tags}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
