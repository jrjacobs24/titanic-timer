import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { TextField } from "@material-ui/core";
import getUpdatedCount from "./util/getUpdatedCount";
import PackageContext from "./state/Context";

const EndDateForm = () => {
  const { endDate, setEndDate, setTitanicCount } = useContext(PackageContext);

  console.log("End Date: ", endDate);

  const onDateChange = (end) => {
    const titanicCount = getUpdatedCount(end);

    setEndDate(end);
    setTitanicCount(titanicCount);
  };

  const InputField = React.forwardRef((props, ref) => {
    return <TextField ref={ref} label="Enter End Date & Time" {...props} />;
  });

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
          minDate={new Date()}
        />
      </div>
    </form>
  );
};

export default EndDateForm;
