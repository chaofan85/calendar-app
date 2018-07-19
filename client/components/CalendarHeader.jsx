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

    this.getPrevMonth = this.getPrevMonth.bind(this);
    this.getNextMonth = this.getNextMonth.bind(this);
  }

  componentDidMount() {}

  getRenderedDate() {
    const newDate = new Date();
    const renderedDateString = `${
      this.state.months[this.props.renderedMonth]
    } 1 ${this.props.renderedYear}`;
    return this.props.renderedYear ? new Date(renderedDateString) : newDate;
  }

  getPrevMonth() {
    const date = this.getRenderedDate();
    const year =
      date.getMonth() > 0 ? date.getFullYear() : date.getFullYear() - 1;
    const month = date.getMonth() > 0 ? date.getMonth() - 1 : 11;
    let data = { year, month };
    this.props.changeMonth(data);
  }

  getNextMonth() {
    const date = this.getRenderedDate();
    const year =
      date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear();
    const month = date.getMonth() === 11 ? 0 : date.getMonth() + 1;
    let data = { year, month };
    this.props.changeMonth(data);
  }

  render() {
    const renderedDate = this.getRenderedDate();
    return (
      <div className="calendar-header">
        <div className="prev-month" onClick={this.getPrevMonth}>
          &#9664;
        </div>
        <div className="current-month">
          {renderedDate.getFullYear() +
            ' ' +
            this.state.months[renderedDate.getMonth()]}
        </div>
        <div className="next-month" onClick={this.getNextMonth}>
          &#9654;
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
