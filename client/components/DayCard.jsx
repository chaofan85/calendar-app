import React, { Component } from 'react';

class DayCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };
  }

  renderForm() {
    console.log('lalala');
  }

  render() {
    return (
      <div className="day-card" onDoubleClick={() => this.renderForm()}>
        <div>{this.props.date}</div>
        <div>double click to add event</div>
      </div>
    );
  }
}

export default DayCard;
