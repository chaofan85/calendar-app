import { RECEIVE_EVENT } from '../actions/event_actions';

const EventsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      state.push(action.event);
      return state;

    default:
      return state;
  }
};

export default EventsReducer;
