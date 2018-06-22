import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar-frame">
        <CalendarHeader />
        <CalendarBody />
      </div>
    );
  }
}

export default Calendar;
