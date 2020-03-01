import React, { Component } from "react";

class Feelings extends Component {
  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <label htmlFor="feelings">I'm feeling: </label>
        <select id="feelings">
          <option disabled selected value>
            {" "}
            -- Select a Value --{" "}
          </option>
          <option value="1">1 - Horrible</option>
          <option value="2">2 - Not Very Good</option>
          <option value="3">3 - Okay</option>
          <option value="4">4 - Good</option>
          <option value="5">5 - Great</option>
        </select>
      </div>
    );
  }
}

export default Feelings;
