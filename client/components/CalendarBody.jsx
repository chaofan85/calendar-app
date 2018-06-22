import React, { Component } from 'react';

class CalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      date: new Date()
    };
  }

  getdays() {
    return this.state.days.map(day => {
      return <th key={day}>{day}</th>;
    });
  }

  render() {
    return (
      <div className="calendar-body">
        <table>
          <tbody>
            <tr>{this.getdays()}</tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CalendarBody;
