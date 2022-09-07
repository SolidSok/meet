import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user has opened the app', () => {});

    when('user scrolls to events', () => {
      AppWrapper = mount(<App />);
    });

    then('user should see events with collapsed details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-about')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    given('user has not clicked the event', () => {
      AppWrapper = mount(<App />);
    });
    when('user clicks on event button', () => {
      AppWrapper.update();
      AppWrapper.find('.show-details-button').at(0).simulate('click');
    });

    then('user should see expanded details on the event', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    given('user has expanded details of the event', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.show-details-button').at(0).simulate('click');
      expect(AppWrapper.find('.event-details')).toHaveLength(1);
    });

    when('user clicks the event button again', () => {
      AppWrapper.find('.hide-details-button').at(0).simulate('click');
    });

    then(
      'the event details should collapse back to how it was at the start',
      () => {
        expect(AppWrapper.find('.event-details')).toHaveLength(0);
      }
    );
  });
});
