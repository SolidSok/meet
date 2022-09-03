import { mockData } from './mock-data';
import axios from 'axios';

export const getAccessToken = async () => {};
export const getEvents = async () => {
  return mockData;
};

export const extractLocations = events => {
  var extractLocations = events.map(event => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};
