import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { renderNumber: 32 };
  handleInputChanged = event => {
    this.setState({
      renderNumber: event.target.value,
    });
  };
  render() {
    return (
      <div className="">
        <p className="event-amount-header">
          Number of events displayed: {this.state.renderNumber}
        </p>
        <input
          className="event-amount"
          value={this.state.renderNumber}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
