import React, { Component } from "react";

class Feelings extends Component {
  state = {
    selectValue: null
  };

  handleChange = () => {
    this.setState({
      selectValue: this.props.value
    });
  };

  goToUnderstanding = () => {
    //if state or prop is empty then return or show some sort of msg. then return
    if (this.state.selectValue === null) {
      alert("Please select a value!");
    } else if (!this.state.selectValue) {
      this.props.history.push("/Understanding");
    }
  };

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <form onSubmit={this.goToUnderstanding}>
          <label>
            Feeling:
            <select
              required={true}
              value={this.selectValue}
              onChange={event => this.handleChange(event.target.value)}
            >
              <option> -- Select a Value -- </option>
              <option value="1">1 - Horrible</option>
              <option value="2">2 - Not Too Good</option>
              <option value="3">3 - Okay</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Great</option>
            </select>
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

export default Feelings;
