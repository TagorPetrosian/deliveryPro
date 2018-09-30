import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import ZoneField from "./ZoneField";
import LocationSearchInput from "../LocationSearchInput";
import validateVolume from "../../utils/validateVolume";
import formFields from "./zoneFormFields";

class ZoneForm extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onZoneSubmit)}>
          <Field
            key="center"
            component={LocationSearchInput}
            type="text"
            label="Center Point Address"
            name="center"
            placeholder="Address"
          />
          <Field
            key="radius"
            component={ZoneField}
            type="text"
            label="Radius"
            name="radius"
            placeholder="For example 240KM"
          />
          <Link
            to="/admin/dashboard/zones"
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

  if (isNaN(values["radius"])) {
    errors["radius"] = "Please enter a number. ";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "zoneForm",
  destroyOnUnmount: false
})(ZoneForm);
