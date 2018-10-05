import React, { Component } from "react";
import { connect } from "react-redux";
import { updateOrder, fetchOrder } from "../../actions";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

class OrderUpdate extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <h3 className="center-align">Package Status</h3>
          <div>
            <div className="teal lighten-5 valign-wrapper">
              <h6 className="center-align">
                Please Click "RECIEVED" if you have picked up a package and
                "DELIVERED" if you deliveted the package to the customer
              </h6>
            </div>
            <a
              onClick={() => {
                this.props.updateOrder(
                  { recieved: true },
                  this.props.history,
                  this.props.match.params.id
                );
              }}
              className="btn left  blue lighten-1"
            >
              RECIEVED
            </a>
            <a
              onClick={() => {
                this.props.updateOrder(
                  { delivered: true },
                  this.props.history,
                  this.props.match.params.id
                );
              }}
              className="btn right  orange darken-3"
            >
              DELIVERED
            </a>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ orders, order }) {
  return { orders, order };
}

export default connect(
  mapStateToProps,
  { updateOrder, fetchOrder }
)(OrderUpdate);
