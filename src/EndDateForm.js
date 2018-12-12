import React from "react";
import PropTypes from "prop-types";
import DateInput from "./DateInput";
import TimeInput from "./TimeInput";

class EndDateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: null,
      timeValue: null
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    console.log(`Date: ${this.state.dateValue}`);
    console.log(`Time: ${this.state.timeValue}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <DateInput
          value={this.state.dateValue}
          name="dateValue"
          onChange={this.handleChange}
        />
        <TimeInput
          value={this.state.timeValue}
          name="timeValue"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default EndDateForm;
