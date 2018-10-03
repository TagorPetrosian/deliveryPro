import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default class AdminMetrics extends Component {
  constructor(props) {
    super(props);
    this.state = { newOrders: 12, delivered: 23, recieved: 33 };
    console.log(this.state);
  }
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <div className="masonry row">
            <div className="col s12">
              <h3 className="center-align">Dashboard</h3>
            </div>
            <div className="col l4 m6 s12">
              <div className="card hoverable">
                <div className="card-stacked">
                  <div className="card-metrics">
                    <h6 className="center-align">New Orders</h6>
                    <h4 className="center-align">{this.state.newOrders}</h4>
                  </div>
                </div>
                <Sparklines data={[5, 10, 5, 20]}>
                  <SparklinesLine color="blue" />
                </Sparklines>
              </div>
            </div>
            <div className="col l4 m6 s12">
              <div className="card hoverable">
                <div className="card-stacked">
                  <div className="card-metrics">
                    <h6 className="center-align">Delivered Orders</h6>
                    <h4 className="center-align">{this.state.delivered}</h4>
                  </div>
                </div>
                <Sparklines data={[5, 10, 5, 20]}>
                  <SparklinesLine color="blue" />
                </Sparklines>
              </div>
            </div>
            <div className="col l4 m6 s12">
              <div className="card hoverable">
                <div className="card-stacked">
                  <div className="card-metrics">
                    <h6 className="center-align">Recieved Orders</h6>
                    <h4 className="center-align">{this.state.recieved}</h4>
                  </div>
                </div>
                <Sparklines data={[5, 10, 5, 20]}>
                  <SparklinesLine color="blue" />
                </Sparklines>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
