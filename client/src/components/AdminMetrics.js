import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { fetchMetrics } from "../actions";

class AdminMetrics extends Component {
  componentDidMount() {
    this.props.fetchMetrics();
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
                    <h4 className="center-align bold" style={{}}>
                      New Orders
                    </h4>
                    <h2 className="center-align">
                      {this.props.metrics.newOrders
                        ? this.props.metrics.newOrders
                        : 0}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l4 m6 s12">
              <div className="card hoverable">
                <div className="card-stacked">
                  <div className="card-metrics">
                    <h4 className="center-align" style={{ color: "F95738" }}>
                      Delivered Orders
                    </h4>
                    <h2 className="center-align">
                      {this.props.metrics.deliveredOrders
                        ? this.props.metrics.deliveredOrders
                        : 0}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l4 m6 s12">
              <div className="card hoverable">
                <div className="card-stacked">
                  <div className="card-metrics">
                    <h4 className="center-align">Recieved Orders</h4>
                    <h2 className="center-align">
                      {this.props.metrics.recievedOrders
                        ? this.props.metrics.recievedOrders
                        : 0}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "100px" }}>
            <h3 className="center-align" style={{ paddingBottom: "50px" }}>
              Weekly Tendencies
            </h3>
            <div className="col l4 m6 s12">
              <Sparklines data={[5, 10, 8, 18]} height={120} width={180}>
                <SparklinesLine color="blue" />
              </Sparklines>
            </div>
            <div className="col l4 m6 s12">
              <Sparklines data={[10, 12, 15, 16]} height={120} width={180}>
                <SparklinesLine color="red" />
              </Sparklines>
            </div>
            <div className="col l4 m6 s12">
              <Sparklines data={[5, 10, 5, 20]} height={120} width={180}>
                <SparklinesLine color="green" />
              </Sparklines>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ metrics }) {
  return { metrics };
}

export default connect(
  mapStateToProps,
  { fetchMetrics }
)(AdminMetrics);
