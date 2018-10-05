import React, { Component } from "react";
import Header from "./Header";
import M from "materialize-css/dist/js/materialize.min.js";
import slider1 from "../images/parallax1.jpg";
import img2 from "../images/ikea.jpg";
import img3 from "../images/industrial.jpg";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import big1 from "../images/big1.jpg";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import "./Landing.css";

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
      <div>
        <Header />
        <div className="container" style={{ textAlign: "center" }}>
          <div className="slider">
            <ul className="slides">
              <li>
                <img className="responsive-img" src={slider1} alt="container" />
                <div className="caption center-align">
                  <h3 className="slider-text">first class logistics</h3>
                </div>
              </li>
              <li>
                <img className="responsive-img" src={img2} alt="ikea" />
                <div className="caption left-align">
                  <h3 className="dark-text slider-text">
                    first class delivery
                  </h3>
                </div>
              </li>
              <li>
                <img className="responsive-img" src={img3} alt="industrial" />
                <div className="caption right-align">
                  <h3 className="slider-text">fast and secure delivery</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col s6">
              <h3 className="left-align">THE DELIVERYPRO BRAND</h3>
              <p className="p1 left-align">
                With a special algorithm unique to our company, we make fast
                shipping, all over the country.
              </p>
              <p className="p1 left-align">
                With a short click, you can order a delivery, track on it's
                progress at your computer or phone in any time at deliveryPro we
                committed to a fast, reliable and safety service
              </p>
            </div>
            <div className="col s6">
              <img src={big1} className="responsive-img" alt="containers" />
            </div>
          </div>
          <div className="row">
            <div id="about">
              <div className="left-box-wrapper" />
              <div className="right-box-wrapper">
                <div className="right-box">
                  <h3 className="white-text">WHY CHOOSE US</h3>
                  <ul className="ul0">
                    <li className="clearfix">
                      <img
                        src={icon1}
                        className="circle white icon"
                        alt="icon"
                      />
                      <div className="caption left-align">
                        <div className="txt1 white-text">
                          Fast Transportion Service
                        </div>
                        <div className="txt2 white-text">
                          All the stages of the delivery are documented on line,
                          and can be followed by the client at any given time.
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src={icon2}
                        className="circle white icon"
                        alt="icon"
                      />
                      <div className="caption left-align">
                        <div className="txt1 white-text">
                          Safety and Reliability
                        </div>
                        <div className="txt2 white-text">
                          The packages are collected directly from the client.
                          All the stages of the delivery are documented on line
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src={icon3}
                        className="circle white icon"
                        alt="icon"
                      />
                      <div className="caption left-align">
                        <div className="txt1 white-text">
                          Shipping In Israel
                        </div>
                        <div className="txt2 white-text">
                          With a special algorithm unique to our company, we
                          make fast shipping, all over the country.
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src={icon4}
                        className="circle white icon"
                        alt="icon"
                      />
                      <div className="caption left-align">
                        <div className="txt1 white-text">
                          Fast Transportion Service
                        </div>
                        <div className="txt2 white-text">
                          All the shipping carried at secured trucks, and taken
                          care carefully
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <img src={car1} className="responsive-img" alt="Truck" />
            </div>
            <div className="col s6">
              <h3 className="right-align">SAFETY & SECURITY</h3>
              <p className="p1 right-align">
                The packages are collected directly from the client. All the
                stages of the delivery are documented on line, and can be
                followed by the client at any given time.
              </p>
              <p className="p1 right-align">
                All the shipping carried at secured trucks, and taken care
                carefully, so they won't be damaged during the whole stages of
                the delivery
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <h3 className="right-align">WHY CHOOSE DLIVERYPRO</h3>
              <p className="p1 right-align">
                With a special algorithm unique to our company, we make fast
                shipping, all over the country.
              </p>
              <p className="p1 right-align">
                With a short click, you can order a delivery, track on it's
                progress at your computer or phone in any time at deliveryPro we
                committed to a fast, reliable and safety service
              </p>
              <p className="p1 right-align">
                The packages are collected directly from the client. All the
                stages of the delivery are documented on line, and can be
                followed by the client at any given time.
              </p>
              <p className="p1 right-align">
                All the shipping carried at secured trucks, and taken care
                carefully, so they won't be damaged during the whole stages of
                the delivery
              </p>
            </div>
            <div className="col s6">
              <img src={car2} className="responsive-img" alt="Truck" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
