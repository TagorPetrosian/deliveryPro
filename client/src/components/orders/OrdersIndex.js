import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrders } from "../../actions";

class OrdersIndex extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  renderStatus(date) {
    return date ? new Date(date).toLocaleDateString() : "In Progress";
  }

  renderOrders() {
    return this.props.orders.reverse().map(order => {
      return (
        <tr key={order._id}>
          <td>{order.origin}</td>
          <td>{order.destination}</td>
          <td>{this.renderStatus(order.dateOrdered)}</td>
          <td>{this.renderStatus(order.dateRecieved)}</td>
          <td>{this.renderStatus(order.dateDelivered)}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <h3 className="center-align">Orders</h3>
          <table className="striped responsive-table">
            <thead>
              <tr>
                <th>Origin</th>
                <th>Destination</th>
                <th>Ordered On:</th>
                <th>Recieved On:</th>
                <th>Delivered On:</th>
              </tr>
            </thead>
            <tbody>{this.renderOrders()}</tbody>
          </table>
          <div className="fixed-action-btn">
            <Link
              to="/client/dashboard/orders/new"
              className="btn-floating btn-large red"
            >
              <i className="large material-icons">add</i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return { orders };
}

export default connect(
  mapStateToProps,
  { fetchOrders }
)(OrdersIndex);
