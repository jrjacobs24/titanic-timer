import React, { useState } from "react";
import PackageContext from "./Context";

const StateProvider = (props) => {
  const [titanicCount, setTitanicCount] = useState(0);

  return (
    <PackageContext.Provider
      value={{
        titanicCount,
        setTitanicCount
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default StateProvider;
