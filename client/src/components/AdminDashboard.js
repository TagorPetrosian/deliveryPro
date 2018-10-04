import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import M from "materialize-css/dist/js/materialize.min.js";
import "./ClientDashboard.css";

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
            <div className="collapsible-header">
              <i className="material-icons">account_circle</i>
              Clients
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/admin/dashboard/clients">View Clients</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">archive</i>
              Orders
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/admin/dashboard/orders_all">View Orders</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">build</i>
              Trucks
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/admin/dashboard/trucks/new">New Truck</Link>
              </li>
              <li>
                <Link to="/admin/dashboard/trucks">View Trucks</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">grid_on</i>
              Delivery Zones
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/admin/dashboard/zones/new">New Zone</Link>
              </li>
              <li>
                <Link to="/admin/dashboard/zones">View Zones</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">drive_eta</i>
              Drivers
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/admin/dashboard/drivers">View Drivers</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">data_usage</i>
              Metrics
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/admin/dashboard/metrics">Orders Summary</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">access_time</i>
              Schedules
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/admin/dashboard/schedules">View Schdules</Link>
              </li>
            </ul>
          </li>
        </ul>
        <a
          href="/admin/dashboard"
          data-target="slide-out"
          className="sidenav-trigger"
        >
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
