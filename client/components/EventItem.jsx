import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditForm from './EditForm';

class EventItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.renderForm = this.renderForm.bind(this);
    this.clickOutsideToCloseEdit = this.clickOutsideToCloseEdit.bind(this);
  }

  renderForm(e) {
    if (!this.state.showForm) {
      document.addEventListener('click', this.clickOutsideToCloseEdit, false);
    } else {
      document.removeEventListener(
        'click',
        this.clickOutsideToCloseEdit,
        false
      );
    }

    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  }

  clickOutsideToCloseEdit(e) {
    if (!this.node || this.node.contains(e.target)) {
      return;
    }

    this.renderForm();
  }

  render() {
    return (
      <div
        className="event-item"
        ref={node => {
          this.node = node;
        }}
      >
        <div className="event-content" onDoubleClick={this.renderForm}>
          <span className="event-title">{`${this.props.eventTitle}`}</span>
          <span className="event-date">{`${this.props.startTime}`}</span>
        </div>

        {this.state.showForm && (
          <EditForm
            event={this.props.event}
            edit={true}
            clickOutsideToCloseEdit={this.clickOutsideToCloseEdit}
          />
        )}
      </div>
    );
  }
}

export default EventItem;
