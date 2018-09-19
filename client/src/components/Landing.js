import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import img1 from "../images/container.jpg";
import img2 from "../images/ikea.jpg";
import img3 from "../images/industrial.jpg";

export default class Landing extends Component {
  componentDidMount() {
    var elem = document.querySelector(".slider");
    var instance = M.Slider.init(elem, {
      indicators: true,
      height: 400,
      transition: 500,
      interval: 6000
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* <h1>DeliveryPro</h1>
        <h2>Landing Page</h2>
        <p>The client and the admin see the same page</p> */}
        <div className="slider">
          <ul className="slides">
            <li>
              <img className="responsive-img" src={img1} alt="container" />
              <div className="caption center-align">
                <h3>FIRST CLASS LOGISTICS</h3>
              </div>
            </li>
            <li>
              <img className="responsive-img" src={img2} alt="ikea" />
              <div className="caption left-align">
                <h3 className="dark-text">FIRST CLASS DELIVERY</h3>
              </div>
            </li>
            <li>
              <img className="responsive-img" src={img3} alt="industrial" />
              <div className="caption right-align">
                <h3>FAST AND SECURE DELIVERY</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
