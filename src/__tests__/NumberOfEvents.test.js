import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    NumberOfEventsWrapper.setState({
      renderNumber: 32,
    });
  });
  test('render input', () => {
    expect(NumberOfEventsWrapper.find('.event-amount')).toHaveLength(1);
  });
  test('render default number as 32', () => {
    expect(NumberOfEventsWrapper.find('.event-amount').prop('value')).toBe(32);
  });
  test('render event-amount-header', () => {
    expect(NumberOfEventsWrapper.find('.event-amount-header')).toHaveLength(1);
  });
  test('event-amount-header rendered correctly', () => {
    expect(NumberOfEventsWrapper.find('.event-amount-header').text()).toBe(
      `Number of events displayed: ${NumberOfEventsWrapper.state(
        'renderNumber'
      )}`
    );
  });
  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      renderNumber: '32',
    });
    const eventObject = { target: { value: 8 } };
    NumberOfEventsWrapper.find('.event-amount').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('renderNumber')).toBe(8);
  });
});
