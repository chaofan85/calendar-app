import axios from 'axios';

export const addEvent = ({ eventTitle, startTime, endTime }) => {
  return axios.post('/api/events', {
    description: eventTitle,
    start_time: startTime,
    end_time: endTime
  });
};

export const updateEvent = ({ id, eventTitle, startTime, endTime }) => {
  return axios.patch(`/api/events/${id}`, {
    description: eventTitle,
    start_time: startTime,
    end_time: endTime
  });
};

export const getAllEvents = () => {
  return axios.get('/api/events');
};
