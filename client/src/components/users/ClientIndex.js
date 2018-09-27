import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

class OrdersIndex extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderStatus(date) {
    return date ? new Date(date).toLocaleDateString() : "In Progress";
  }

  renderOrders() {
    return this.props.users.reverse().map(user => {
      return (
        <tr key={user._id}>
          <td>{user.role}</td>
          <td>{user.company}</td>
          <td>{user.address}</td>
          <td>{user.contactPhone}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h3 className="center-align">Clients</h3>
        <table className="striped responsive-table center-align">
          <thead>
            <tr>
              <th>Role</th>
              <th>Company</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this.renderOrders()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(OrdersIndex);
