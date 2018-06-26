import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS,
  UPDATE_EVENT
} from '../actions/event_actions';

import merge from 'lodash/merge';

const EventsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, action.event);

    case RECEIVE_EVENTS:
      return action.events;

    case UPDATE_EVENT:
      return merge({}, state, action.event);

    default:
      return state;
  }
};

export default EventsReducer;
