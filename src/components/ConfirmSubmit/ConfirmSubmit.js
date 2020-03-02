import React, { Component } from "react";

class ConfirmSubmit extends Component {
  //function will return user to home page(feelings) on button click
  goToFeelings = (event) => {
    event.preventDefault()
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
