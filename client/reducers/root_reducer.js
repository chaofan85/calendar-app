import { combineReducers } from 'redux';
import EventsReducer from './events_reducer';
import CalendarReducer from './calendar_reducer';

const RootReducer = combineReducers({
  events: EventsReducer,
  calendar: CalendarReducer
});

export default RootReducer;
