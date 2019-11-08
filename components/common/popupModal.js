import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';

export default class PopupModal extends Component {
  constructor(props) {
    super(props);
    this.title = 'Def';
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    return (
      <Overlay isVisible={this.state.modalVisible}>
        <View style={styles.container}>
          <Text h1>{this.title}</Text>
          <Input
            errorStyle={{ color: 'red' }}
            errorMessage='Please enter a subject'
            style={styles.input}
          />
          <Button
            title="Cancel"
            onPress={() => {this.setModalVisible(false)}}
            style={styles.button}
          />
          <Button
            title="Submit"
            onPress={() => {this.setModalVisible(false)}}
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    margin: 25,
  },
  input: {
    margin: 25,
  },
});