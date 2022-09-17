import React, { Component } from 'react';

import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import WelcomeScreen from './components/WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { WarningAlert } from './components/Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    showWelcomeScreen: undefined,
    numberOfEvents: 32,
    selectedLocation: 'all',
    warningText: '',
  };
  async componentDidMount() {
    this.mounted = true;
    if (navigator.onLine) {
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then(events => {
          if (this.mounted) {
            this.setState({
              events: events.slice(0, this.state.numberOfEvents),
              locations: extractLocations(events),
            });
          }
        });
      }
    } else {
      getEvents().then(events => {
        if (this.mounted) {
          this.setState({
            locations: extractLocations(events),
            warningText: 'You are currently offline',
            showWelcomeScreen: false,
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else this.setState({ numberOfEvents: eventCount });
    if (location === undefined) {
      location = this.state.selectedLocation;
    }
    getEvents().then(events => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter(event => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        selectedLocation: location,
      });
    });
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          events={this.state.events}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
