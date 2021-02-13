import React, { useState } from "react";
import PackageContext from "./Context";

const StateProvider = (props) => {
  const [titanicCount, setTitanicCount] = useState(0);
  const [endDate, setEndDate] = useState();

  return (
    <PackageContext.Provider
      value={{
        endDate,
        setEndDate,
        titanicCount,
        setTitanicCount
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default StateProvider;
