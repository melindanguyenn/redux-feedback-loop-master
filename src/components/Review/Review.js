import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios'

class Review extends Component {
  state = {
    newFeedback: {
      feeling: this.props.reduxState.collectFeelings,
      understanding: this.props.reduxState.collectUnderstanding,
      support: this.props.reduxState.collectSupport,
      comment: this.props.reduxState.collectComments
  }
}

  componentDidMount = () => {
  this.getFeedback()
  }
  
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

  goToConfirmation = (event) => {
    console.log('adding feedback',this.state.newFeedback);
    axios({
      method: 'POST',
      url: '/Review',
      data: this.state.newFeedback
    }).then((response) => {
      console.log(response.data, 'from post');
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
