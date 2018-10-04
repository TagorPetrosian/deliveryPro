import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../actions";

class ClientsIndex extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderCol(col) {
    return col ? col : "Not Filled Yet";
  }

  renderClients() {
    return this.props.users.reverse().map(user => {
      return (
        <tr key={user._id}>
          <td>{user.fullName}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{this.renderCol(user.company)}</td>
          <td>{this.renderCol(user.address)}</td>
          <td>{this.renderCol(user.contactPhone)}</td>
          <td>
            <Link to={`/admin/dashboard/clients/${user._id}`}>
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
          <h3 className="center-align">Clients</h3>
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
                <th>Company</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>{this.renderClients()}</tbody>
          </table>
        </div>
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
