import React from "react";
import ReactDOM from "react-dom";
import { Container, Grid } from "@material-ui/core";
import StateProvider from "./state/Provider";
import EndDateForm from "./EndDateForm";
import CountDisplay from "./components/CountDisplay";
import Header from "./components/Header";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

/**
 * - Receive date/time input from user
 * - Calc time from now till `untilDate`
 * - Divide `timeRemaining` by `titanicLength`
 * - Return `iterationsRemaining` as a decimal value
 */

function App() {
  return (
    <>
      <StateProvider>
        <Grid container spacing={4} className="App">
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <EndDateForm />
          </Grid>
          <Grid item xs={12}>
            <CountDisplay />
          </Grid>
        </Grid>
      </StateProvider>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
