import React, { Component } from "react";
import { connect } from "react-redux";
import { updateOrder } from "../../actions";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

class OrderUpdate extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <h3> This is my update order Comp.</h3>
          <a
            onClick={() => {
              this.props.updateOrder(
                { recieved: true },
                this.props.history,
                this.props.match.params.id
              );
            }}
            className="btn"
          >
            Confirm Recieved Package
          </a>
          <a
            onClick={() => {
              this.props.updateOrder(
                { delivered: true },
                this.props.history,
                this.props.match.params.id
              );
            }}
            className="btn"
          >
            Confirm delivered Package
          </a>
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
  { updateOrder }
)(OrderUpdate);
