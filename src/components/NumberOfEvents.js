import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = { infoText: '' };

  handleInputChanged = event => {
    let num = event.target.value;
    if (num >= 33 || num <= 0) {
      this.setState({
        numberOfEvents: num,
        infoText: 'Please set a number between 1 and 32',
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        infoText: ' ',
      });
    }
    this.props.updateEvents(undefined, num);
  };
  render() {
    const { numberOfEvents } = this.props;
    return (
      <div className="numberOfEvents">
        <label className="event-amount-header">
          Number of events displayed (Max 32)
        </label>
        <input
          type="number"
          className="event-amount"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
