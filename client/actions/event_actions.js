import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';

const receiveEvent = ({ data }) => {
  return {
    type: RECEIVE_EVENT,
    event: data.event
  };
};

export const addEvent = (eventTitle, start, end) => dispatch => {
  return EventAPIUtil.addEvent(eventTitle, start, end).then(payload =>
    dispatch(receiveEvent(payload))
  );
};
