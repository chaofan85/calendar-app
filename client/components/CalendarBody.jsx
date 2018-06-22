import React, { Component } from 'react';

class CalendarBody extends Component {
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
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      date: new Date(),
      dateRendered: 1
    };
  }

  getdays() {
    return this.state.days.map(day => {
      return <th key={day}>{day}</th>;
    });
  }

  renderFirstRow(startDay) {
    let count = 1;
    let dates = [];
    for (let i = 0; i <= 6; i++) {
      if (i < startDay) {
        dates[i] = '';
      } else {
        dates[i] = count;
        count++;
      }
    }

    this.setState({ dateRendered: count });

    return dates.map(date => {
      return <td key={date}>{date}</td>;
    });
  }

  render() {
    let firstDayInMonth = `${
      this.state.months[this.state.date.getMonth()]
    } 1 ${this.state.date.getFullYear()}`;
    const dateString = new Date(firstDayInMonth).toDateString();
    const firstDay = dateString.substring(0, 3);
    const startDay = this.state.days.indexOf(firstDay);

    return (
      <div className="calendar-body">
        <table>
          <tbody>
            <tr>{this.getdays()}</tr>
            <tr>{this.renderFirstRow(startDay)}</tr>
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
