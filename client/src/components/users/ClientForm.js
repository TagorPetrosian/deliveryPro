import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import ClientField from "./ClientField";
import LocationSearchInput from "../LocationSearchInput";
import formFields from "./clientFormFields";

class ClientForm extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onClientSubmit)}>
          <Field
            key="company"
            component={ClientField}
            type="text"
            label="company"
            name="company"
            placeholder="company"
          />
          <Field
            key="address"
            component={LocationSearchInput}
            type="text"
            label="address"
            name="address"
            placeholder="address"
          />
          <Field
            key="contactPhone"
            component={ClientField}
            type="text"
            label="Contact Phone"
            name="contactPhone"
            placeholder="054-775-5656"
          />
          <Link
            to="/admin/dashboard/clients"
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
  form: "clientForm",
  destroyOnUnmount: false
})(ClientForm);
