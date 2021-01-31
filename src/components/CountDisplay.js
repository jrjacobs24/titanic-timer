import React, { useContext } from "react";
import StateContext from "../state/Context";

const CountDisplay = () => {
  const { titanicCount } = useContext(StateContext);

  return <div>Total Titanics: {titanicCount}</div>;
};

export default CountDisplay;
