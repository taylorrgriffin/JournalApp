import React, {Component} from 'react';
import { Button, Text} from 'react-native-elements';
import { requestWithoutBodyAsync } from '../common/request';

export default class DeleteAllEntries extends Component {
  constructor(props) {
    super(props);
  }

  // callback(res) {
    
  // }

  deleteAllEntries(callback) {
    console.info("DELETING ALL ENTRIES");
    requestWithoutBodyAsync('/entry/', 'DELETE')
    .then((responseJson) => {
      callback(responseJson);
    });
  }

  render() {
    return (
      <Button
      title="Delete all entries"
      onPress={() => {this.deleteAllEntries( (res) => {
        console.info(res);
        this.props.dataRefresh();
      })}}
      style={{backgroundColor: "red"}}
    />
    );
  }
}