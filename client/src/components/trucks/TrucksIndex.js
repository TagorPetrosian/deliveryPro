import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTrucks } from "../../actions";

class TrucksIndex extends Component {
  componentDidMount() {
    this.props.fetchTrucks();
  }

  renderTrucks() {
    return this.props.trucks.reverse().map(truck => {
      return (
        <tr key={truck._id}>
          <td>{truck.model}</td>
          <td>{truck.volume}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h3 className="center-align">Trucks</h3>
        <table className="striped responsive-table center-align">
          <thead>
            <tr>
              <th>Model</th>
              <th>
                Capacity ( m<sup>2</sup> )
              </th>
            </tr>
          </thead>
          <tbody>{this.renderTrucks()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ trucks }) {
  return { trucks };
}

export default connect(
  mapStateToProps,
  { fetchTrucks }
)(TrucksIndex);
