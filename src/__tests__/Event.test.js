import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });
  // rendered components on init
  test('render event title', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });
  test('render event title correctly', () => {
    expect(EventWrapper.find('.event-title').text()).toBe(event.summary);
  });

  test('render event info', () => {
    expect(EventWrapper.find('.event-info')).toHaveLength(1);
  });
  test('render event info correctly', () => {
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.description
    );
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.start.dateTime
    );
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.end.dateTime
    );
  });

  test('render show details button', () => {
    EventWrapper.setState({ show: false });
    expect(EventWrapper.find('.show-details-button')).toHaveLength(1);
  });
  test('render show-details-button correctly', () => {
    EventWrapper.setState({ show: false });
    expect(EventWrapper.find('.show-details-button').text()).toBe(
      'show details'
    );
  });

  // show/hide details button functionality
  test('details are collapsed by default', () => {
    expect(EventWrapper.state('show')).toBe(false);
  });
  test('show-details button reveals event details when pressed', () => {
    EventWrapper.setState({ show: false });
    EventWrapper.find('.show-details-button').simulate('click');
    expect(EventWrapper.state('show')).toBe(true);
  });
  test('click hide-details button to hide details', () => {
    EventWrapper.setState({ show: true });
    EventWrapper.find('.hide-details-button').simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });
  test('hide-details button appears when state:show is set to true by click', () => {
    EventWrapper.setState({ show: true });
    EventWrapper.find('.hide-details-button').simulate('click');
    expect(EventWrapper.find('.show-details-button')).toHaveLength(1);
  });

  // rendered event details after button click
  test('render "about event" header', () => {
    EventWrapper.setState({ show: true });
    expect(EventWrapper.find('.event-about')).toHaveLength(1);
  });
  test('render event-about correctly', () => {
    EventWrapper.setState({ show: true });
    expect(EventWrapper.find('.event-about').text()).toBe('About this event:');
  });
  test('render event-details', () => {
    EventWrapper.setState({ show: true });
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });
  test('render event-details correctly', () => {
    EventWrapper.setState({ show: true });
    expect(EventWrapper.find('.event-details').text()).toBe(event.description);
  });
});
