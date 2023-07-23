import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiGithub} from "react-icons/fi";
import { images } from "../../constants";
import { Newsletter, FooterOverlay } from "../../components";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />

    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">09064035138</p>
        <p className="p__opensans">09064035138</p>
      </div>

      <div className="app__footer-links_logo">
        <h2 className="p__cormorant" style={{fontSize: "2rem", color: "#DCCA87", marginBottom: "2rem"}}>CrabsKictchen</h2>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />

        <div className="app__footer-socials">

          <a href="https://web.facebook.com/nelson.ndukwe.18" target="blank"><FiFacebook style={{color: "#fff" , fontSize: "1.5rem", cursor: "pointer"}}/></a>
          <a href="https://twitter.com/NelsonNdukwe6" target="blank" ><FiTwitter style={{color: "#fff" ,fontSize: "1.5rem", cursor: "pointer"}}/></a>
          <a href="https://www.instagram.com/nelsonndukwe/" target="blank"><FiInstagram style={{color: "#fff", fontSize: "1.5rem", cursor: "pointer"}}/></a>
          <a href="https://github.com/nelsonndukwe" target="blank"><FiGithub style={{color: "#fff", fontSize: "1.5rem", cursor: "pointer"}}/></a>

        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00am - 12:00am</p>

        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00am - 11:00pm</p>

      </div>
    </div>

    <div className="app__footer_copyright">
      <p className="p__cormorant" style={{color: "#DCCA87"}}>2023 Stallion. All rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
