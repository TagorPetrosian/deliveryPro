import React, { Component } from "react";
import { reduxForm } from "redux-form";
import ClientForm from "./ClientForm";
import ClientFormReview from "./ClientFormReview";

class ClientUpdate extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ClientFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <ClientForm
        onClientSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return (
      <div className="container">
        <div className="container">
          <h3 className="center-align">Update Client</h3>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "clientForm"
})(ClientUpdate);
