import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

class ClientsIndex extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderStatus(date) {
    return date ? new Date(date).toLocaleDateString() : "In Progress";
  }

  renderClients() {
    return this.props.users.reverse().map(user => {
      return (
        <tr key={user._id}>
          <td>{user.fullName}</td>
          <td>{user.email}</td>
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
              <th>Full Name</th>
              <th>email</th>
              <th>Role</th>
              <th>Company</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this.renderClients()}</tbody>
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
)(ClientsIndex);
