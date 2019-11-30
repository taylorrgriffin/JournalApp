import React, {Component} from 'react';
import PopupModal from '../common/popupModal';
import { requestWithBodyAsync } from '../common/request';

export default class AddEntryModal extends PopupModal {
  constructor(props) {
    super(props);
    this.onModalSubmit = this.addNewEntry.bind(this);
  }

  addNewEntry(subject, body, _id, callback) {
    console.info("Subject: " + subject);
    console.info("Body: " + body);
    requestWithBodyAsync('entry', 'POST', JSON.stringify({
        subject: subject,
        body: body
      })).then((responseJson) => {
      callback(responseJson);
    });
  }

  render() {
    return (
      super.render()
    );
  }
}