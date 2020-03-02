import React, { Component } from "react";
import { connect } from "react-redux";

class Understanding extends Component {
  state = {
    selectValue: ""
  };
  handleChange = event => {
    this.setState({
      selectValue: event.target.value
    });
  };
  goToSupport = () => {
    if (this.state.selectValue === "") {
      alert("Please select a value!");
    } else if (this.state.selectValue) {
      this.props.history.push("/Support");
      this.props.dispatch({
        type: "UNDERSTANDING",
        payload: this.state.selectValue
      });
    }
  };
  render() {
    return (
      <div>
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={this.goToSupport}>
          <label>
            Understanding:
            <select
              required={true}
              value={this.state.selectValue}
              onChange={this.handleChange}
            >
              <option>-- Select a Value --</option>
              <option value="1">1 - I don't know what's happening</option>
              <option value="2">2 - I could use some guidence</option>
              <option value="3">3 - I understand this just enough</option>
              <option value="4">4 - I might be able to help</option>
              <option value="5">5 - I can teach this</option>
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
export default connect(getStore)(Understanding);
