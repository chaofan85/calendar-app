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
    this.props.clickOutsideToClose(e);
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
    if (this.node.contains(e.target)) {
      return;
    }

    this.renderForm();
  }

  render() {
    const event = this.props.event;
    return (
      <div
        className="event-item"
        onDoubleClick={this.renderForm}
        onClick={this.props.clickOutsideToClose}
        ref={node => {
          this.node = node;
        }}
      >
        <p>
          {`${event.eventTitle}`} <span>{`${event.startTime}`}</span>
        </p>

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
