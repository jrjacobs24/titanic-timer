import React from "react";
import ReactDOM from "react-dom";
import LuxonUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import EndDateForm from "./EndDateForm";
import "./styles.css";

/**
 * - Receive date/time input from user
 * - Calc time from now till `untilDate`
 * - Divide `timeRemaining` by `titanicLength`
 * - Return `iterationsRemaining` as a decimal value
 */

function App() {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <EndDateForm />
      </div>
    </MuiPickersUtilsProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
