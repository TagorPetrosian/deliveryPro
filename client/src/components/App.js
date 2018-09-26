import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import ClientDashboard from "./ClientDashboard";
import OrderNew from "./orders/OrderNew";
import OrdersIndex from "./orders/OrdersIndex";
import OrderThanks from "./orders/OrderThanks";

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
            <Route path="/client/dashboard/orders/new" component={OrderNew} />
            <Route
              exact
              path="/client/dashboard/orders"
              component={OrdersIndex}
            />
            <Route
              exact
              path="/client/dashboard/thanks"
              component={OrderThanks}
            />
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
