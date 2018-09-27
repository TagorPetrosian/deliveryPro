import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllOrders } from "../../actions";

class OrdersAll extends Component {
  componentDidMount() {
    this.props.fetchAllOrders();
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
          <td>{new Date(order.dateOrdered).toLocaleDateString()}</td>
          <td>{this.renderStatus(order.dateRecieved)}</td>
          <td>{this.renderStatus(order.dateDelivered)}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <h3 className="center-align">Orders</h3>
        <table className="striped responsive-table center-align">
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
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return { orders };
}

export default connect(
  mapStateToProps,
  { fetchAllOrders }
)(OrdersAll);
