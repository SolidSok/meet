import React, { Component } from 'react';

class Event extends Component {
  toggleEventDetails = () => {
    this.setState({ show: !this.state.show });
  };
  state = { show: false };
  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h1 className="event-title">{event.summary}</h1>
        <p className="event-info">
          {event.description}
          {event.start.dateTime}
          {event.end.dateTime}
        </p>
        {this.state.show === true && (
          <>
            <h2 className="event-about">About this event:</h2>
            <p className="event-details">{event.description}</p>
          </>
        )}

        {this.state.show === false ? (
          <button
            className="show-details-button details-btn"
            onClick={this.toggleEventDetails}>
            show details
          </button>
        ) : (
          <button
            className="hide-details-button details-btn"
            onClick={this.toggleEventDetails}>
            hide details
          </button>
        )}
      </div>
    );
  }
}
export default Event;
