import React, { Component } from "react";

class ConfirmSubmit extends Component {
  goToFeelings = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Thank You!</h1>
        <button onClick={this.goToFeelings}>Leave New Feedback</button>
      </div>
    );
  }
}
export default ConfirmSubmit;
