import React, { Component } from "react";
import { reduxForm } from "redux-form";
import DriverForm from "./DriverForm";
import DriverFormReview from "./DriverFormReview";

class DriverUpdate extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <DriverFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <DriverForm
        onDriverSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return (
      <div className="container">
        <div className="container">
          <h3 className="center-align">Update Driver</h3>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "driverForm"
})(DriverUpdate);
