# meet

---

## DESCRIPTION

This React project uses a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events.

---

## USER STORIES

1. As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city
2. I would like to be able to show/hide events details so that I can see more/less information about an event
3. be able to specify the number of events I want to view in the app so that I can see more or fewer events in the vents list at once
4. be able to use that app when offline so that I can see the vents I viewed the lat time I was online
5. be able to add the app shortcut to my home screen so that I can open the app faster.
6. be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city

---

## SCENARIOS

FEATURE 1: FILTER EVENTS BY CITY

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

---

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default
Given: user has opened the app
When: user scrolls to events
Then: user should see events with collapsed details

Scenario 2: User can expand an event to see its details
Given: user has not clicked the event
When: user clicks on event
Then: user should see expanded details on the event

Scenario 3: User can collapse an event to hide its details
Given: user has expanded details of the event
When: user clicks the event button again
Then: the event details should collapse back to how it was at the start

---

FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given: user has not specified a number
When: user is looking at events
Then: the events section should display a maximum of 32 events

Scenario 2: User can change the number of events they want to see
Given: user is looking at events
When: user selects a number for search display results
Then: display maximum will change to number that user selected

---

FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection
Given: data has been cached and user is online
When: user loads the app
Then: the app will run in offline mode, using cached data

Scenario 2: Show error when user changes the settings (city, time range)
Given: user is in offline mode, and does not have data cached for new settings
When: user changes city settings
Then: an error message will appear

---

FEATURE 5: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city
Given: data of upcoming events has been obtained
When: user clicks on upcoming events section
Then: Chart will display with data of upcoming events
