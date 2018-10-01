import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AdminHeader extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="4">
            <a href="/">Home</a>
          </li>,
          <li key="5">
            <a href="/driver/dashboard/schdule">Dashboard</a>
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper #0d47a1 blue darken-4">
            <Link to="/" className="left brand-logo">
              <i className="material-icons" style={{ margin: "0 10px" }}>
                local_shipping
              </i>
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(AdminHeader);
