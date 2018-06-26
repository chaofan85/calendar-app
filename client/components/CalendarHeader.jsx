import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMonth } from '../actions/calendar_actions';

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

    console.log(this.props);
    this.getPrevMonth = this.getPrevMonth.bind(this);
    this.getNextMonth = this.getNextMonth.bind(this);
  }

  componentDidMount() {}

  getPrevMonth() {
    let data;
    const year =
      this.state.date.getMonth() > 0
        ? this.state.date.getFullYear()
        : this.state.date.getFullYear() - 1;
    const month =
      this.state.date.getMonth() > 0 ? this.state.date.getMonth() - 1 : 11;
    data = { year, month };
    this.props.changeMonth(data);
  }

  getNextMonth() {
    let data;
    const year =
      this.state.date.getMonth() === 11
        ? this.state.date.getFullYear() + 1
        : this.state.date.getFullYear();
    const month =
      this.state.date.getMonth() === 11 ? 0 : this.state.date.getMonth() + 1;
    data = { year, month };
    this.props.changeMonth(data);
  }

  render() {
    const newDate = new Date();
    console.log(this.props);
    const renderedDateString = `${
      this.state.months[this.props.renderedMonth]
    } 1 ${this.props.renderedYear}`;
    let renderedDate = this.props.renderedYear
      ? new Date(renderedDateString)
      : newDate;

    console.log(renderedDateString, 'lalala', renderedDate);
    return (
      <div className="calendar-header">
        <div className="prev-month" onClick={this.getPrevMonth}>
          lalala
        </div>
        <div className="current-month">
          {renderedDate.getFullYear() +
            ' ' +
            this.state.months[renderedDate.getMonth()]}
        </div>
        <div className="next-month" onClick={this.getNextMonth}>
          lololo
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    renderedYear: state.calendar.year,
    renderedMonth: state.calendar.month
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMonth: data => dispatch(changeMonth(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarHeader);
