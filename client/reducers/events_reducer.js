import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS,
  REMOVE_EVENT
} from '../actions/event_actions';

import merge from 'lodash/merge';

const EventsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, action.event);

    case RECEIVE_EVENTS:
      return action.events;

    case REMOVE_EVENT:
      newState = merge({}, state);
      delete newState[Object.keys(action.event)[0]];
      return newState;

    default:
      return state;
  }
};

export default EventsReducer;
