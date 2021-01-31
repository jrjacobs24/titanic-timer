import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { differenceInMilliseconds } from "date-fns";
import { TextField } from "@material-ui/core";
import { EventIcon } from "@material-ui/icons";
import PackageContext from "./state/Context";

// 3hr 15min in milliseconds
const timeMetric = 11700000;
// const timeMetric = Duration.fromObject({ hours: 3, minutes: 15 }).as("minutes");
console.log(timeMetric);

const EndDateForm = () => {
  const [endDate, setEndDate] = useState(new Date());
  const { setTitanicCount } = useContext(PackageContext);

  console.log("End Date: ", endDate);

  const onDateChange = (end) => {
    const startDate = new Date();
    console.log("Start Date: ", startDate);

    const baseInterval = differenceInMilliseconds(end, startDate);
    const titanicCount = (baseInterval / timeMetric).toFixed(2);

    setEndDate(end);
    setTitanicCount(titanicCount);
  };

  const InputField = (props) => {
    return <TextField label="Enter End Date & Time" {...props} />;
  };

  return (
    <form>
      <div>
        <DatePicker
          id="titanic__date-time-picker"
          customInput={<InputField />}
          selected={endDate}
          onChange={onDateChange}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
    </form>
  );
};

export default EndDateForm;
