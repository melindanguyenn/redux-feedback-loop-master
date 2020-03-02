import React, { Component } from "react";
import { connect } from "react-redux";

class Support extends Component {
  state = {
    selectValue: ""
  };
  handleChange = event => {
    this.setState({
      selectValue: event.target.value
    });
  };
  goToComments = (event) => {
    event.preventDefault()
    if (this.state.selectValue === "") {
      alert("Please select a value!");
    } else if (this.state.selectValue) {
      this.props.history.push("/Comments");
      this.props.dispatch({
        type: "SUPPORT",
        payload: this.state.selectValue
      });
    }
  };
  render() {
    return (
      <div>
        <h1>How well are you being supported?</h1>
        <form onSubmit={this.goToComments}>
          <label>
            Support:
            <select
              required={true}
              value={this.state.selectValue}
              onChange={this.handleChange}
            >
              <option>-- Select a Value --</option>
              <option value="1">1 - I feel abandoned</option>
              <option value="2">2 - I don't feel very supported</option>
              <option value="3">3 - I feel supported</option>
              <option value="4">4 - I feel somewhat supported</option>
              <option value="5">5 - I feel completely supported</option>
            </select>
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
export default connect(getStore)(Support);
