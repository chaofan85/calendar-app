import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const UPDATE_EVENT = 'UPDATE_EVENT';

const receiveEvent = ({ data }) => {
  return {
    type: RECEIVE_EVENT,
    event: data.event
  };
};

const receiveEvents = ({ data }) => {
  return {
    type: RECEIVE_EVENTS,
    events: data.events
  };
};

// const updateEvent = ({ data }) => {
//   return {
//     type: UPDATE_EVENT,
//     event: data.event
//   };
// };

export const addEvent = (eventTitle, start, end) => dispatch => {
  return EventAPIUtil.addEvent(eventTitle, start, end).then(payload =>
    dispatch(receiveEvent(payload))
  );
};

export const getAllEvents = () => dispatch => {
  return EventAPIUtil.getAllEvents().then(payload =>
    dispatch(receiveEvents(payload))
  );
};

export const updateEvent = (id, eventTitle, start, end) => dispatch => {
  return EventAPIUtil.updateEvent(id, eventTitle, start, end).then(payload =>
    dispatch(receiveEvent(payload))
  );
};
