import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";
import payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
            dignissimos maxime ex tenetur! Officia aperiam nesciunt, obcaecati
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Vasanth nagar, hessargahtta, Bangalore-560088, karnataka, India
            </div>
          </div>

          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone:123-456-9098</div>
          </div>

          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: Apple@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <span className="title">Category</span>
          <span className="text">Phones</span>
          <span className="text">Headphones</span>
          <span className="text">Smartwatches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Home Theater</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy & Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions </span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            PROJECT-ECOMMERCE WEBAPP DEVELOPED BY SUBHASH.
          </div>
          <img src={payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
