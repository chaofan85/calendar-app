import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

const receiveEvent = ({ data }) => {
  return {
    type: RECEIVE_EVENT,
    event: data.event
  };
};

const receiveEvents = ({ data }) => {
  return {
    type: RECEIVE_EVENTS,
    event: data.events
  };
};

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
