import axios from 'axios';

export const addEvent = ({ eventTitle, startTime, endTime }) => {
  return axios.post('/api/events', {
    description: eventTitle,
    start_time: startTime,
    end_time: endTime
  });
};
