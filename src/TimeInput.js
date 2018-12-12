import React from "react";

const TimeInput = ({ value, name, onChange }) => (
  <div>
    <label htmlFor="#end-time">End Time</label>
    <input
      type="time"
      id="end-time"
      class="form-input"
      value={value}
      name={name}
      onChange={onChange}
    />
  </div>
);

export default TimeInput;
