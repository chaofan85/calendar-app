import React, { Component } from 'react';

class CalendarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      date: new Date()
    };
  }

  render() {
    return (
      <div className="calendar-header">
        {this.state.date.getFullYear() +
          ' ' +
          this.state.months[this.state.date.getMonth()]}
      </div>
    );
  }
}

export default CalendarHeader;
