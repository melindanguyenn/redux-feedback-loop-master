import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios'

class Review extends Component {

  //creating state to send as data with POST
  state = {
    newFeedback: {
      feeling: this.props.reduxState.collectFeelings,
      understanding: this.props.reduxState.collectUnderstanding,
      support: this.props.reduxState.collectSupport,
      comment: this.props.reduxState.collectComments
  }
}

  //GET route
  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/Review'
    }).then((response) => {
      console.log('from getFeedback', response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  //POST route will add newFeedback to database
  goToConfirmation = () => {
    console.log('Feedback created',this.state.newFeedback);
    axios({
      method: 'POST',
      url: '/Review',
      data: this.state.newFeedback
    }).then((response) => {
      this.getFeedback()
    }).catch((error) => {
      console.log(error);
    })
    this.props.history.push("/ConfirmSubmit");
  };
  render() {
    return (
      <div>
        <h1>
          <u>Review Your Feedback</u>
        </h1>
        <p>Feeling: {this.props.reduxState.collectFeelings}</p>
        <p>Understanding: {this.props.reduxState.collectUnderstanding}</p>
        <p>Support: {this.props.reduxState.collectSupport}</p>
        <p>Comments: {this.props.reduxState.collectComments}</p>
        <button type='submit' onClick={this.goToConfirmation}>Submit</button>
      </div>
    );
  }
}
const getStore = reduxState => ({
  reduxState
});
export default connect(getStore)(Review);
