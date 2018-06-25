import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';

const EventsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      Object.assign(state, action.event);
      return state;

    case RECEIVE_EVENTS:
      return action.event;

    default:
      return state;
  }
};

export default EventsReducer;
