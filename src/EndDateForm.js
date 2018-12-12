import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { DateTimePicker } from "material-ui-pickers";

class EndDateForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <DateTimePicker
          value={this.state.selectedDate}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default EndDateForm;
