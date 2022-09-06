Feature: Show/Hide an events details

Scenario: An event element is collapsed by default
Given user has opened the app
When user scrolls to events
Then user should see events with collapsed details

Scenario: User can expand an event to see its details
Given user has not clicked the event
When user clicks on event button
Then user should see expanded details on the event

Scenario: User can collapse an event to hide its details
Given user has expanded details of the event
When user clicks the event button again
Then the event details should collapse back to how it was at the start
