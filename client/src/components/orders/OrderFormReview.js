import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./orderFormFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const OrderFormReview = ({ onCancel, formValues, submitOrder, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div className="container">
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        <i className="material-icons left">navigate_before</i>
        Back
      </button>
      <button
        onClick={() => submitOrder(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.orderForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(OrderFormReview));
