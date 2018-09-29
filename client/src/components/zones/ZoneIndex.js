import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchZones } from "../../actions";

class ZonesIndex extends Component {
  componentDidMount() {
    this.props.fetchZones();
  }

  renderZones() {
    return this.props.zones.reverse().map(zone => {
      return (
        <tr key={zone._id}>
          <td>{zone.center}</td>
          <td>{zone.radius}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h3 className="center-align">Zones</h3>
        <table className="striped responsive-table center-align">
          <thead>
            <tr>
              <th>Center</th>
              <th>Radius (KM)</th>
            </tr>
          </thead>
          <tbody>{this.renderZones()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ zones }) {
  return { zones };
}

export default connect(
  mapStateToProps,
  { fetchZones }
)(ZonesIndex);
