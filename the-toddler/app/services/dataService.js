// services/dataService.js
import data from '../../data.json';

export const getData = () => {
  return JSON.parse(JSON.stringify(data)); // Return a deep copy of the data
};
