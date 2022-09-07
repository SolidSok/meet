import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given('user has not specified a number', () => {
      AppWrapper = mount(<App />);
    });

    when('user is looking at events', () => {
      AppWrapper.update();
    });

    then('the events section should display a maximum of 32 events', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });
  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    given('user is looking at events', () => {
      AppWrapper = mount(<App />);
    });

    when('user selects a number for search display results', () => {
      AppWrapper.find('.event-amount').simulate('change', {
        target: { value: 3 },
      });
    });

    then('display maximum will change to number that user selected', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(3);
    });
  });
});
