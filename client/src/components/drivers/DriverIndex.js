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
      <div className="content-wrapper">
        <div className="container">
          <h3 className="center-align">Drivers</h3>
          <div className="teal lighten-5 valign-wrapper">
            <h6 className="center-align">
              Press the <i className="material-icons">create</i> icon to add
              more inforamtion about clients
            </h6>
          </div>
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
