import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import LuxonUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import rootReducer from "./reducer";
import EndDateForm from "./EndDateForm";
import "./styles.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * - Receive date/time input from user
 * - Calc time from now till `untilDate`
 * - Divide `timeRemaining` by `titanicLength`
 * - Return `iterationsRemaining` as a decimal value
 */

function App() {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <EndDateForm />
        </div>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
