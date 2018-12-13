import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DateTimePicker } from "material-ui-pickers";
import { changeDate } from "./actions";
import { getSelectedDate } from "./reducer";

const EndDateForm = ({ selectedDate, onDateChange }) => (
  <form>
    <DateTimePicker value={selectedDate} onChange={onDateChange} />
  </form>
);

export default connect(
  state => ({
    selectedDate: getSelectedDate(state)
  }),
  {
    onDateChange: changeDate
  }
)(EndDateForm);
