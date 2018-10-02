import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSchedules } from "../actions";

class Schedules extends Component {
  componentDidMount() {
    this.props.fetchSchedules();
  }
  renderSchedules() {
    return this.props.schedules.map(schedule => {
      return (
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>
              {schedule.driver}
              <span class="new badge red">{10}</span>
            </h4>
          </li>
          {this.renderStops(schedule.stops)}
        </ul>
      );
    });
  }
  renderStops(stops) {
    return stops.map((stop, i) => {
      return <li className="collection-item">{stop.location}</li>;
    });
  }
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <h2 className="center-align">Daily Schedules</h2>
          {this.renderSchedules()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ schedules }) {
  return { schedules };
}

export default connect(
  mapStateToProps,
  { fetchSchedules }
)(Schedules);
