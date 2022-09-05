import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32,
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
      `Number of events displayed (Max 32)`
    );
  });
  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 32 });

    NumberOfEventsWrapper.find('.event-amount').simulate('change', {
      target: { value: 4 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(4);

    NumberOfEventsWrapper.find('.event-amount').simulate('change', {
      target: { value: 'a' },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(NaN);

    NumberOfEventsWrapper.find('.event-amount').simulate('change', {
      target: { value: 40 },
    });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });
});
