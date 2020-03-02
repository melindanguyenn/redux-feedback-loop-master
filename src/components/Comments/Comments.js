import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  state = {
    comment: ""
  };
  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };
  goToReview = () => {
    this.props.history.push("/Review");
    this.props.dispatch({
      type: "COMMENTS",
      payload: this.state.comment
    });
  };
  render() {
    return (
      <div>
        <h1>Any comments you'd like to add?</h1>
        <form onSubmit={this.goToReview}>
          <label>
            Comments:
            <textarea
              onChange={this.handleChange}
              value={this.state.comment}
              placeholder="Leave a comment here"
            ></textarea>
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

const getStore = reduxState => ({
  reduxState
});
export default connect(getStore)(Comments);
