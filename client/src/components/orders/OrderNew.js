import React, { Component } from "react";
import { reduxForm } from "redux-form";
import OrderForm from "./OrderForm";
import OrderFormReview from "./OrderFormReview";
import "./OrderNew.css";

class OrderNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <OrderFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <OrderForm
        onOrderSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <h3 className="center-align">New Order</h3>
        </div>
        {this.renderContent()}
        <div className="container teal lighten-5 valign-wrapper">
          <h6 className="center-align">
            *To submit the order you must add credits. You can add them at the
            top of the page by clicking the "ADD CREDITS" button
          </h6>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "orderForm"
})(OrderNew);
