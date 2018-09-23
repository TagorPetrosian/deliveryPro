import React, { Component } from "react";
import { reduxForm } from "redux-form";
import OrderForm from "./OrderForm";
import OrderFormReview from "./OrderFormReview";

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
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "orderForm"
})(OrderNew);
