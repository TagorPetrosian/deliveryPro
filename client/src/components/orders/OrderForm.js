import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import OrderField from "./OrderField";
import LocationSearchInput from "../LocationSearchInput";
import validateVolume from "../../utils/validateVolume";
import formFields from "./orderFormFields";

class OrderForm extends Component {
  // renderFields() {
  //   return _.map(formFields, ({ label, name }) => {
  //     return (
  //       <Field
  //         key={name}
  //         component={OrderField}
  //         type="text"
  //         label={label}
  //         name={name}
  //       />
  //     );
  //   });
  // }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onOrderSubmit)}>
          {/* {this.renderFields()} */}
          <Field
            key="description"
            component={OrderField}
            type="text"
            label="Description"
            name="description"
          />
          <Field
            key="origin"
            component={OrderField}
            type="text"
            label="Origin"
            name="origin"
          />
          <Field
            key="destination"
            component={OrderField}
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
            placeholder="For example 2, 3, 4"
          />
          <Link to="/client/dashboard" className="red btn-flat white-text">
            <i className="material-icons left">navigate_before</i>
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">navigate_next</i>
          </button>
        </form>
      </div>
    );
  }
}

// function validate(values) {
//   const errors = {};
//   console.log(values);

//   // errors.volume = validateVolume(values.recipients || "");

//   _.each(formFields, ({ name, noValueError }) => {
//     if (!values[name]) {
//       errors[name] = noValueError;
//     }
//   });

//   return errors;
// }

export default reduxForm({
  // validate,
  form: "orderForm",
  destroyOnUnmount: false
})(OrderForm);
