import React, {Component} from 'react';
import PopupModal from '../common/popupModal';

export default class EditEntryModal extends PopupModal {
  constructor(props) {
    super(props);
    this.title = 'Edit entry';
  }
  render() {
    // this.setState({ body: this.props.body, _id: this.props._id, subject: this.props.subject, modalVisible: this.state.modalVisible });
    return (
      super.render()
    );
  }
}