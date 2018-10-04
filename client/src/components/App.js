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
import DriverUpdate from "./drivers/DriverUpdate";
import DriverDashboard from "./DriverDashboard";
import ClientUpdate from "./users/ClientUpdate";
import ZoneNew from "./zones/ZoneNew";
import ZoneIndex from "./zones/ZoneIndex";
import Schedules from "./Schedules";
import Schedule from "./Schedule";
import OrderUpdate from "./orders/OrderUpdate";
import OrderUpdatedMessage from "./orders/OrderUpdatedMessage";

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
            <Route path="/admin/dashboard/trucks/new" component={TruckNew} />
            <Route path="/admin/dashboard/zones/new" component={ZoneNew} />
            <Route
              exact
              path="/driver/dashboard/updated"
              component={OrderUpdatedMessage}
            />

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
              path="/admin/dashboard/schedules"
              component={Schedules}
            />
            <Route
              exact
              path="/driver/dashboard/schedule"
              component={Schedule}
            />
            <Route
              exact
              path="/admin/dashboard/drivers"
              component={DriverIndex}
            />
            <Route exact path="/admin/dashboard/zones" component={ZoneIndex} />
            <Route
              exact
              path="/admin/dashboard/orders_all"
              component={OrdersAll}
            />
            <Route
              exact
              path="/admin/dashboard/clients/:id"
              component={ClientUpdate}
            />
            <Route
              exact
              path="/admin/dashboard/drivers/:id"
              component={DriverUpdate}
            />
            <Route
              exact
              path="/driver/dashboard/schedule/orders/:id"
              component={OrderUpdate}
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
