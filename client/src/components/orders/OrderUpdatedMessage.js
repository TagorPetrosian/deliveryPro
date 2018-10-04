import React from "react";

const OrderThanks = () => {
  return (
    <div className="content-wrapper">
      <div className="container teal lighten-5 valign-wrapper">
        <h6 className="center-align">The Order has been updated</h6>
        <a href="/driver/dashboard/schedule" className="btn">
          Go To Schedule
        </a>
      </div>
    </div>
  );
};

export default OrderThanks;
