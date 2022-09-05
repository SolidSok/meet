import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { numberOfEvents: 32 };

  handleInputChanged = event => {
    let num = parseInt(event.target.value);
    if (num > 0 && num <= 32) {
      this.setState({ numberOfEvents: num });
    } else if (num > 32) {
      this.setState({ numberOfEvents: 32 });
      num = 32;
    } else {
      this.setState({ numberOfEvents: NaN });
      num = NaN;
    }
    this.props.updateEvents(undefined, num);
  };
  render() {
    return (
      <div className="numberOfEvents">
        <label className="event-amount-header">
          Number of events displayed (Max 32)
        </label>
        <input
          type="number"
          className="event-amount"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
