import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user has opened the app', () => {});
    let AppWrapper;
    when('user scrolls to events', () => {
      AppWrapper = mount(<App />);
    });

    then('user should see events with collapsed details', () => {});
  });

  test('User can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    given('user has not clicked the event', () => {});

    when('user clicks on event button', () => {});

    then('user should see expanded details on the event', () => {});
  });

  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    given('user has expanded details of the event', () => {});

    when('user clicks the event button again', () => {});

    then(
      'the event details should collapse back to how it was at the start',
      () => {}
    );
  });
});
