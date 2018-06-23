import React, { Component } from 'react';
import DayCard from './DayCard';

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
      date: new Date()
    };
  }

  getdays() {
    return this.state.days.map(day => {
      return <th key={day}>{day}</th>;
    });
  }

  renderFirstRow(startDay) {
    let firstRow = [];
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

    dates.forEach((date, index) => {
      if (date) {
        firstRow[index] = (
          <td key={index}>
            <DayCard date={date} />
          </td>
        );
      } else {
        firstRow[index] = <td key={index} />;
      }
    });

    return firstRow;
  }

  renderFullWeek(startDay) {
    let dates = [];
    for (let i = 0; i <= 6; i++) {
      dates[i] = startDay;
      startDay++;
    }

    return dates.map(date => {
      return (
        <td key={date}>
          <DayCard date={date} />
        </td>
      );
    });
  }

  renderLastRow(startDay, endDay) {
    let dates = [];
    for (let i = 0; i <= 6; i++) {
      dates[i] = startDay;
      startDay++;
      if (startDay > endDay) {
        break;
      }
    }

    return dates.map(date => {
      return (
        <td key={date}>
          <DayCard date={date} />
        </td>
      );
    });
  }

  render() {
    const year = this.state.date.getFullYear();
    const month = this.state.date.getMonth();
    let firstDayInMonth = `${this.state.months[month]} 1 ${year}`;
    const dateString = new Date(firstDayInMonth).toDateString();
    const firstDay = dateString.substring(0, 3);
    const startDay = this.state.days.indexOf(firstDay);
    const maxDays = new Date(year, month + 1, 0).getDate();
    const startInSecondRow = 7 - startDay + 1;
    const startInThirdRow = startInSecondRow + 7;
    const startInFourthRow = startInThirdRow + 7;
    const startInFifthRow = startInFourthRow + 7;
    const startInSixthRow = startInFifthRow + 7;

    return (
      <div className="calendar-body">
        <table>
          <tbody>
            <tr>{this.getdays()}</tr>
            <tr>{this.renderFirstRow(startDay)}</tr>
            <tr>{this.renderFullWeek(startInSecondRow)}</tr>
            <tr>{this.renderFullWeek(startInThirdRow)}</tr>
            <tr>{this.renderFullWeek(startInFourthRow)}</tr>
            {startInFifthRow < maxDays ? (
              startInFifthRow + 6 > maxDays ? (
                <tr>{this.renderLastRow(startInFifthRow, maxDays)}</tr>
              ) : (
                <tr>{this.renderFullWeek(startInFifthRow)}</tr>
              )
            ) : null}
            {startInSixthRow <= maxDays ? (
              <tr>{this.renderLastRow(startInSixthRow, maxDays)}</tr>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CalendarBody;
