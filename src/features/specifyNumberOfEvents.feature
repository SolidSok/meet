Feature: Specify number of events

Scenario: When user hasn't specified a number, 32 is the default number
Given user has not specified a number
When user is looking at events
Then the events section should display a maximum of 32 events

Scenario: User can change the number of events they want to see
Given user is looking at events
When user selects a number for search display results
Then display maximum will change to number that user selected