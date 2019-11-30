import React, {Component} from 'react';
import PopupModal from '../common/popupModal';
import { requestWithBodyAsync } from '../common/request';

export default class EditEntryModal extends PopupModal {
  constructor(props) {
    super(props);
    this.onModalSubmit = this.editEntry.bind(this);
  }

  editEntry(subject, body, _id, callback) {
    console.info("Subject: " + subject);
    console.info("Body: " + body);
    console.info("id is: " + _id);
    requestWithBodyAsync('entry/'+_id, 'PATCH', JSON.stringify({
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