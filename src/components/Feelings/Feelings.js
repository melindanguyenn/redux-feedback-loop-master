import React, { Component } from "react";
import { connect } from "react-redux";

class Feelings extends Component {
  state = {
    selectValue: ""
  };

  //assigns event.target.value to selectValue
  handleChange = event => {
    this.setState({
      selectValue: event.target.value
    });
  };

  //if selectValue has no value, user cannor proceed to the next page
  goToUnderstanding = event => {
    event.preventDefault();
    //if state or prop is empty then return or show some sort of msg. then return
    if (this.state.selectValue === "" || this.state.selectValue === "0") {
      alert("Please select a value!");
    } else if (this.state.selectValue) {
      this.props.history.push("/Understanding");
      this.props.dispatch({
        type: "FEELINGS",
        payload: this.state.selectValue
      });
    }
  };

  //first option has no value for validation
  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <form onSubmit={this.goToUnderstanding}>
          <label>
            Feeling:
            <select
              required={true}
              value={this.state.selectValue}
              onChange={this.handleChange}
            >
              <option value="0">-- Select a Value --</option>
              <option value="1">1 - Horrible</option>
              <option value="2">2 - Not Too Good</option>
              <option value="3">3 - Okay</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Great</option>
            </select>
          </label>
          {/* {this.state.selectValue === "" || this.state.selectValue === 0
            ?  <><br></br><span>Please select an value</span></>
            :<button type="submit">Next</button>
          } */}
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}
const getStore = reduxState => ({
  reduxState
});
export default connect(getStore)(Feelings);
