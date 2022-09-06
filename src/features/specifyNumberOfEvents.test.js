import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';

import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given('user has not specified a number', () => {});

    when('user is looking at events', () => {});

    then(/^the events section should display (\d+) events$/, arg0 => {});
  });
  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    given('user is looking at events', () => {});

    when('user selects a number for search display results', () => {});

    then('display maximum will change to number that user selected', () => {});
  });
});
