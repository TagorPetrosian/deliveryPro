import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import DriverField from "./DriverField";
import LocationSearchInput from "../LocationSearchInput";
import validateVolume from "../../utils/validateVolume";
import formFields from "./driverFormFields";

class DriverForm extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onDriverSubmit)}>
          <Field
            key="address"
            component={DriverField}
            type="text"
            label="Address"
            name="address"
            placeholder="Address"
          />
          <Field
            key="phone"
            component={DriverField}
            type="text"
            label="Phone"
            name="contactPhone"
            placeholder="Phone"
          />

          <Link
            to="/admin/dashboard/drivers"
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

  return errors;
}

export default reduxForm({
  validate,
  form: "driverForm",
  destroyOnUnmount: false
})(DriverForm);
