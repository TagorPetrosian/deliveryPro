import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSchedule } from "../actions";

class Schedule extends Component {
  componentDidMount() {
    this.props.fetchSchedule();
  }

  renderStops(schedule) {
    const { stops } = schedule;
    if (!stops) {
      return <div>Loading..</div>;
    } else {
      return stops.map((stop, i) => {
        return (
          <a
            key={`${stop.location}${i}`}
            className="collection-item"
            href={`/driver/dashboard/schedule/orders/${stop.orderId}`}
          >
            {stop.location}
          </a>
        );
      });
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <h3 className="center-align">
            {this.props.schedule.driver + " "}
            Daily Schedule
          </h3>
          <div className="collection">
            {this.renderStops(this.props.schedule)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ schedule }) {
  return { schedule };
}

export default connect(
  mapStateToProps,
  { fetchSchedule }
)(Schedule);
