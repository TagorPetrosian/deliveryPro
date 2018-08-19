import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

/* The Provider tag is a react component that knows how
   to read changes from our redux store anytime the redux
   store gets some new state produced inside of it.
   The provider will inform all of its children that some
   new state is available and it will update all the 
   components with the new state
*/
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
