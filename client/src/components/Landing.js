import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

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
              <img
                className="responsive-img"
                src="https://images.pexels.com/photos/590839/pexels-photo-590839.jpeg?cs=srgb&dl=action-automotive-cargo-container-590839.jpg&fm=jpg"
                alt="test"
              />
              <div className="caption center-align">
                <h3 className="black-text">Center Caption</h3>
                <h5 className="black-text">Lorem ipsum dolor sit amet.</h5>
              </div>
            </li>
            <li>
              <img
                className="responsive-img"
                src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="test"
              />
              <div className="caption left-align">
                <h3>Left Align Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit amet.
                </h5>
              </div>
            </li>
            <li>
              <img
                className="responsive-img"
                src="https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="test"
              />
              <div className="caption right-align">
                <h3>Right Align Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit amet.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
