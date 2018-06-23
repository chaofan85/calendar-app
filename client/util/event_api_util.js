import axios from 'axios';

export const addEvent = (eventTitle, start, end) => {
  return axios.post('/api/events', {
    description: eventTitle,
    start_time: start,
    end_time: end
  });
};
