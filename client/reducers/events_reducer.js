import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';

const EventsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      state.push(action.event);
      return state;

    case RECEIVE_EVENTS:
      return action.event;

    default:
      return state;
  }
};

export default EventsReducer;
