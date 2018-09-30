import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDrivers } from "../../actions";
import { Link } from "react-router-dom";

class DriversIndex extends Component {
  componentDidMount() {
    this.props.fetchDrivers();
  }

  renderDrivers() {
    return this.props.drivers.reverse().map(driver => {
      return (
        <tr key={driver._id}>
          <td>{driver.fullName}</td>
          <td>{driver.email}</td>
          <td>{driver.role}</td>
          <td>{driver.address}</td>
          <td>{driver.contactPhone}</td>
          <td>
            <Link to={`/admin/dashboard/drivers/${driver._id}`}>
              <i className="material-icons">create</i>
            </Link>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h3 className="center-align">Drivers</h3>
        <table className="striped responsive-table center-align">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>email</th>
              <th>Role</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{this.renderDrivers()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ drivers }) {
  return { drivers };
}

export default connect(
  mapStateToProps,
  { fetchDrivers }
)(DriversIndex);
