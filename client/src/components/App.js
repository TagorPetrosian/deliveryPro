import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import ClientDashboard from "./ClientDashboard";

const DriverDashboard = () => <h2>DriverDashboard</h2>;
const AdminDashboard = () => <h2>AdminDashboard</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/client/dashboard" component={ClientDashboard} />
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/driver/dashboard" component={DriverDashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
