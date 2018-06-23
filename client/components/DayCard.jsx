import React, { Component } from 'react';

class DayCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="day-card">{this.props.date}</div>;
  }
}

export default DayCard;
