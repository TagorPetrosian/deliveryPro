import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import M from "materialize-css/dist/js/materialize.min.js";
import "./ClientDashboard.css";

// import { BrowserRouter, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../actions";

export default class ClientDashboard extends Component {
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
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>
              Orders
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/client/dashboard/orders/new">New Order</Link>
              </li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>
              Second
            </div>
            <ul className="collapsible-body">
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">whatshot</i>
              Third
            </div>
            <ul className="collapsible-body">
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
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
