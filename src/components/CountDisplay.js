import React, { useState, useEffect, useContext } from "react";
import { getTime } from "date-fns";
import StateContext from "../state/Context";
import ProgressDisplay from "./ProgressDisplay";
import getUpdatedCount from "../util/getUpdatedCount";

const CountDisplay = () => {
  const { endDate, titanicCount } = useContext(StateContext);
  const [currentCount, setCurrentCount] = useState(() => titanicCount || 0);

  useEffect(() => {
    const counter = setInterval(() => {
      if (endDate) {
        const count = getUpdatedCount(endDate);
        setCurrentCount(count);
      }
    }, 5000);

    return () => clearInterval(counter);
  }, [titanicCount, endDate]);

  return (
    <>
      <div>
        <strong>Total Titanics:</strong> {titanicCount}
      </div>

      {Boolean(currentCount) && (
        <ProgressDisplay
          currentCount={currentCount}
          totalCount={titanicCount}
        />
      )}
    </>
  );
};

export default CountDisplay;
