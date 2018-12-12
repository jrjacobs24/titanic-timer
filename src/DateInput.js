import React from "react";

const DateInput = ({ value, name, onChange }) => (
  <div>
    <label htmlFor="#end-date">End Date</label>
    <input
      type="date"
      id="end-date"
      class="form-input"
      value={value}
      name={name}
      onChange={onChange}
    />
  </div>
);

export default DateInput;
