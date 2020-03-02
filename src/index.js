import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const collectFeelings = (state = "", action) => {
  switch (action.type) {
    case "FEELINGS":
      console.log(action.payload, "was added from Feelings");
      return action.payload;
    default:
      return state;
  }
};
const collectUnderstanding = (state = "", action) => {
  switch (action.type) {
    case "UNDERSTANDING":
      console.log(action.payload, "was added from Understanding");
      return action.payload;
    default:
      return state;
  }
};
const collectSupport = (state = "", action) => {
  switch (action.type) {
    case "SUPPORT":
      console.log(action.payload, "was added from Support");
      return action.payload;
    default:
      return state;
  }
};
const collectComments = (state = "", action) => {
  switch (action.type) {
    case "COMMENTS":
      console.log(action.payload, "was added from Comments");
      return action.payload;
    default:
      return state;
  }
};

//storage for reducers
const store = createStore(
  combineReducers({
    collectFeelings,
    collectUnderstanding,
    collectSupport,
    collectComments
  }),
  applyMiddleware(logger)
);

//allowing 'App' access to 'store' via 'Provider'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
