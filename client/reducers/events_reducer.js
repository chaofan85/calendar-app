import { RECEIVE_EVENT } from '../actions/event_actions';

const EventsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      state.push(action.event);
      break;

    default:
      return state;
  }
};

export default EventsReducer;
