import React, {Component} from 'react';
import PopupModal from '../common/popupModal';

export default class AddEntryModal extends PopupModal {
  constructor(props) {
    super(props);
    this.testIt = this.testIt.bind(this);
    this.title = 'Add new entry';
  }

  testIt() {
    console.log("Test it huh...");
  }

  render() {
    return (
      super.render()
    );
  }
}