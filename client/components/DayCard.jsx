import React, { Component } from 'react';
import EventForm from './EventForm';

class DayCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.renderForm = this.renderForm.bind(this);
    this.clickOutsideToClose = this.clickOutsideToClose.bind(this);
  }

  renderForm() {
    if (!this.state.showForm) {
      document.addEventListener('click', this.clickOutsideToClose, false);
    } else {
      document.removeEventListener('click', this.clickOutsideToClose, false);
    }

    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  }

  clickOutsideToClose(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.renderForm();
  }

  render() {
    return (
      <div
        className="day-card"
        onDoubleClick={this.renderForm}
        ref={node => {
          this.node = node;
        }}
      >
        <div>{this.props.date}</div>
        <div>double click to add event</div>
        {this.state.showForm ? (
          <EventForm
            date={this.props.date}
            month={this.props.month}
            year={this.props.year}
          />
        ) : null}
      </div>
    );
  }
}

export default DayCard;
