import React, { useState } from "react";

import { TbGrill } from "react-icons/tb";
import { PiForkKnife } from "react-icons/pi";


import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <h2 className="p__cormorant"><a href="#home">CrabsKictchen</a></h2>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="#" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreens">
        <TbGrill
          color="#DCCA87"
          fontSize={27}
          onClick={() => {
            setToggle(true);
          }}
        />

        {toggle && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <PiForkKnife
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggle(false);
              }}
            />

            <ul className="app__navbar-smallscreens-links">
              <li className="p__opensans">
                <a href="#home" onClick={() => {
                setToggle(false);
              }}>Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => {
                setToggle(false);
              }}>About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={() => {
                setToggle(false);
              }}>Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={() => {
                setToggle(false);
              }}>Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => {
                setToggle(false);
              }}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
