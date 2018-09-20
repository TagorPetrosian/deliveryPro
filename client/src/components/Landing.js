import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import img1 from "../images/container.jpg";
import img2 from "../images/ikea.jpg";
import img3 from "../images/industrial.jpg";
import car1 from "../images/car1.jpg";
import big1 from "../images/big1.jpg";
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
      <div style={{ textAlign: "center" }}>
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
        <div className="row">
          <div className="col s6">
            <h3 className="left-align">THE TRUCKING BRAND</h3>
            <p className="p1 left-align">
              Cozy sphinx waves quart jug of bad milk. A very bad quack might
              jinx zippy fowls. Few quips galvanized the mock jury box. Quick
              brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and
              my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin
              Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps
              quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game.
              Woven silk pyjamas exchanged for blue quartz. Brawny gods just
            </p>
            <p className="p2 left-align">
              Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to
              vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV
              quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny
              gods just.
            </p>
          </div>
          <div className="col s6">
            <img src={big1} className="responsive-img" />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <img src={car1} className="responsive-img" />
          </div>
          <div className="col s6">
            <h3 className="right-align">SAFTY & SECURITY</h3>
            <p className="p1 right-align">
              Cozy sphinx waves quart jug of bad milk. A very bad quack might
              jinx zippy fowls. Few quips galvanized the mock jury box. Quick
              brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and
              my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin
              Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps
              quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game.
              Woven silk pyjamas exchanged for blue quartz. Brawny gods just
            </p>
            <p className="p2 right-align">
              Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to
              vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV
              quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny
              gods just.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
