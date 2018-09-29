import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import ClientDashboard from "./ClientDashboard";
import OrderNew from "./orders/OrderNew";
import OrdersIndex from "./orders/OrdersIndex";
import OrderThanks from "./orders/OrderThanks";
import AdminDashboard from "./AdminDashboard";
import OrdersAll from "./orders/OrdersAll";
import AdminMetrics from "./AdminMetrics";
import ClientIndex from "./users/ClientIndex";
import TruckNew from "./trucks/TruckNew";
import TrucksIndex from "./trucks/TrucksIndex";
import DriverIndex from "./drivers/DriverIndex";

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
            <Route path="/client/dashboard/orders/new" component={OrderNew} />
            <Route path="/admin/dashboard/trucks/new" component={TruckNew} />

            <Route
              exact
              path="/client/dashboard/orders"
              component={OrdersIndex}
            />
            <Route
              exact
              path="/admin/dashboard/trucks"
              component={TrucksIndex}
            />
            <Route
              exact
              path="/admin/dashboard/drivers"
              component={DriverIndex}
            />
            <Route
              exact
              path="/admin/dashboard/orders_all"
              component={OrdersAll}
            />
            <Route
              exact
              path="/admin/dashboard/clients"
              component={ClientIndex}
            />
            <Route
              exact
              path="/client/dashboard/thanks"
              component={OrderThanks}
            />
            <Route
              exact
              path="/admin/dashboard/metrics"
              component={AdminMetrics}
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
