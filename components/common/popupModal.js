import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';
import { requestWithBodyAsync } from './request';

export default class PopupModal extends Component {
  constructor(props) {
    super(props);
    this.title = 'Def';
    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  state = {
    modalVisible: false,
    subject: null,
    body: null
  };

  handleSubject(event) {
    this.setState({subject: event.nativeEvent.text})
  }

  handleBody(event) {
    this.setState({body: event.nativeEvent.text})
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  componentDidMount() {
    console.info("just updated.");
  }

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
            value={this.state.body}
            onChange={this.handleBody}
            errorStyle={{ color: 'red' }}
            errorMessage='Please enter body of entry'
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
              console.info("Body: " + this.state.body);
              requestWithBodyAsync('/entry', 'POST', JSON.stringify({
                  subject: this.state.subject,
                  body: this.state.body
                })).then((responseJson) => {
                console.info(JSON.stringify(responseJson));
                this.props.dataRefresh();
                this.setModalVisible(false);
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