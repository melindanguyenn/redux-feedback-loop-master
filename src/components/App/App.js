import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Comments from "../Comments/Comments";
import ConfirmSubmit from "../ConfirmSubmit/ConfirmSubmit";
import Feelings from "../Feelings/Feelings";
import Review from "../Review/Review";
import Support from "../Support/Support";
import Understanding from "../Understanding/Understanding";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
        </div>
        <Route path="/Comments" component={Comments} />
        <Route path="/ConfirmSubmit" component={ConfirmSubmit} />
        <Route exact path="/" component={Feelings} />
        <Route path="/Review" component={Review} />
        <Route path="/Support" component={Support} />
        <Route path="/Understanding" component={Understanding} />
      </Router>
    );
  }
}

export default App;
