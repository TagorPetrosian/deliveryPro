import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import OrderField from "./OrderField";
import LocationSearchInput from "../LocationSearchInput";
import formFields from "./orderFormFields";

class OrderForm extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onOrderSubmit)}>
          <Field
            key="description"
            component={OrderField}
            type="text"
            label="Description"
            name="description"
          />
          <Field
            key="origin"
            component={LocationSearchInput}
            type="text"
            label="Origin"
            name="origin"
          />
          <Field
            key="destination"
            component={LocationSearchInput}
            type="text"
            label="Destination"
            name="destination"
          />
          <Field
            key="volume"
            component={OrderField}
            type="text"
            label="Volume"
            name="volume"
            placeholder="For example 24"
          />
          <Link
            to="/client/dashboard/orders"
            className="red btn-flat white-text"
            style={{ width: "120px" }}
          >
            <i className="material-icons left">navigate_before</i>
            Cancel
          </Link>
          <button
            type="submit"
            className="teal btn-flat right white-text"
            style={{ width: "120px" }}
          >
            Next
            <i className="material-icons right">navigate_next</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // errors.volume = validateVolume(values.recipients || "");

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  if (isNaN(values["volume"])) {
    errors["volume"] =
      "Please enter a number. For example 24 is is the product of 2 X 3 X 4";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "orderForm",
  destroyOnUnmount: false
})(OrderForm);
