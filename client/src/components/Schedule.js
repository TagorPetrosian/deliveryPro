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
  // renderSchedules() {
  //   return this.props.schedule.map(schedule => {
  //     return (
  //       <ul className="collection with-header hoverable">
  //         <li className="collection-header">
  //           <h4>
  //             {schedule.driver}
  //             <span class="new badge red">{10}</span>
  //           </h4>
  //         </li>
  //         {this.renderStops(schedule.stops)}
  //       </ul>
  //     );
  //   });
  // }
  // renderStops(stops) {
  //   return stops.map(stop => {
  //     return <li className="collection-item">{stop.location}</li>;
  //   });
  // }
  // render() {
  //   return (
  //     <div className="content-wrapper">
  //       <div className="container">
  //         <h3 className="center-align">Daily Schedules</h3>
  //         {this.renderSchedules()}
  //       </div>
  //     </div>
  //   );
  // }
}

function mapStateToProps({ schedule }) {
  return { schedule };
}

export default connect(
  mapStateToProps,
  { fetchSchedule }
)(Schedule);
