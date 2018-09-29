import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./clientFormFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const ClientFormReview = ({
  onCancel,
  formValues,
  updateClient,
  history,
  match
}) => {
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
        style={{ marginTop: "20px" }}
      >
        <i className="material-icons left">navigate_before</i>
        Back
      </button>
      <button
        onClick={() => updateClient(formValues, history, match.params.id)}
        className="green btn-flat right white-text"
        style={{ marginTop: "20px" }}
      >
        Send
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.clientForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(ClientFormReview));
