import React from "react";
import { LinearProgress } from "@material-ui/core";

export default function ProgressDisplay(props) {
  const { currentCount, totalCount } = props;
  const getProgress = () => {
    return 100 - (currentCount / totalCount) * 100;
  };

  return (
    <>
      <div>
        <strong>Titanics Remaining:</strong> {currentCount}
      </div>
      <LinearProgress variant="determinate" value={getProgress()} />
    </>
  );
}
