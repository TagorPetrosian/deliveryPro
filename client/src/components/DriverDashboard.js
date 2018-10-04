import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import M from "materialize-css/dist/js/materialize.min.js";

export default class AdminDashboard extends Component {
  componentDidMount() {
    var sidenav = document.querySelector(".sidenav");
    var instance1 = M.Sidenav.init(sidenav, {
      edge: "left",
      inDuration: 250
    });
    var elems = document.querySelectorAll(".collapsible");
    var instance2 = M.Collapsible.init(elems, { accordion: true });
  }

  render() {
    return (
      <div>
        <Header />

        <ul id="slide-out" className="sidenav sidenav-fixed collapsible">
          <li>
            <Link to="/driver/dashboard/schedule">Schedule</Link>
          </li>
        </ul>
        <a
          href="/client/dashboard"
          data-target="slide-out"
          className="sidenav-trigger"
        >
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
