import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ZoneForm from "./ZoneForm";
import ZoneFormReview from "./ZoneFormReview";

class ZoneNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ZoneFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <ZoneForm onZoneSubmit={() => this.setState({ showFormReview: true })} />
    );
  }
  render() {
    return (
      <div className="container">
        <div className="container">
          <h3 className="center-align">New Zone</h3>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "zoneForm"
})(ZoneNew);
