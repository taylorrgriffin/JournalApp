import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button, Overlay } from 'react-native-elements';

export default class PopupModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  state = {
    modalVisible: false,
    subject: null,
    body: null,
    _id: null,
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
          <Text h3>{this.props.title}</Text>
          <Input
            label="Subject"
            type="text"
            value={this.state.subject}
            onChange={this.handleSubject}
          />
          <Input
            label="Body"
            type="text"
            value={this.state.body}
            onChange={this.handleBody}
          />
          <View style={styles.horiz}>
            <Button
              title="Cancel"
              onPress={() => {this.setModalVisible(false)}}
              style={{backgroundColor: "red"}}
            />
            <Button
              title={this.props.submitMsg}
              onPress={() => {
                this.onModalSubmit(this.state.subject, this.state.body, this.state._id, (responseJson) => {
                  console.info(JSON.stringify(responseJson));
                  this.props.dataRefresh();
                  this.setModalVisible(false);
                })}
              }
              style={styles.button}
            />
          </View>
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  horiz: {
    flexDirection:'row',
    flexWrap:'wrap',
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: 200
  },
});