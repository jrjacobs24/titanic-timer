import { differenceInMilliseconds } from "date-fns";

export default function getUpdatedCount(endDate) {
  // 3hr 15min in milliseconds
  const timeMetric = 11700000;
  const startDate = new Date();
  console.log("Start Date: ", startDate);

  const baseInterval = differenceInMilliseconds(endDate, startDate);
  const titanicCount = (baseInterval / timeMetric).toFixed(2);

  return titanicCount;
}
