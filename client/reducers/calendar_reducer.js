import { SWITCH_MONTH } from '../actions/calendar_actions';

import merge from 'lodash/merge';

const CalendarReducer = (state = {}, action) => {
  switch (action.type) {
    case SWITCH_MONTH:
      return merge({}, state, action.data);

    default:
      return state;
  }
};

export default CalendarReducer;
