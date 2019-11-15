import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';
import { requestWithBodyAsync } from './request';

export default class PopupModal extends Component {
  constructor(props) {
    super(props);
    this.title = 'Def';
    this.handleSubject = this.handleSubject.bind(this);
    this.handleContents = this.handleContents.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  state = {
    modalVisible: false,
    subject: null,
    contents: null
  };

  handleSubject(event) {
    this.setState({subject: event.nativeEvent.text})
  }

  handleContents(event) {
    this.setState({contents: event.nativeEvent.text})
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    return (
      <Overlay isVisible={this.state.modalVisible}>
        <View style={styles.container}>
          <Text h1>{this.title}</Text>
          <Input
            type="text"
            value={this.state.subject}
            onChange={this.handleSubject}
            errorStyle={{ color: 'red' }}
            errorMessage='Please enter a subject'
            style={styles.input}
          />
          <Input
            type="text"
            value={this.state.contents}
            onChange={this.handleContents}
            errorStyle={{ color: 'red' }}
            errorMessage='Please enter contents of entry'
            style={styles.input}
          />
          <Button
            title="Cancel"
            onPress={() => {this.setModalVisible(false)}}
            style={styles.button}
          />
          <Button
            title="Submit"
            onPress={() => {
              console.info("Subject: " + this.state.subject);
              console.info("Contents: " + this.state.contents);
              requestWithBodyAsync('/entry', 'POST', JSON.stringify({
                  subject: this.state.subject,
                  contents: this.state.contents
                })).then((responseJson) => {
                console.info(JSON.stringify(responseJson));
                this.setModalVisible(false)
              });
            }}
            style={styles.button}
          />
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  button: {
    margin: 25,
  },
  input: {
    margin: 25,
  },
});