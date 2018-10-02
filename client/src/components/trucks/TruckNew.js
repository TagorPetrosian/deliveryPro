import React, { Component } from "react";
import { reduxForm } from "redux-form";
import TruckForm from "./TruckForm";
import TruckFormReview from "./TruckFormReview";
// import "./OrderNew.css";

class TruckNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <TruckFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <TruckForm
        onTruckSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <h3 className="center-align">New Truck</h3>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "truckForm"
})(TruckNew);
