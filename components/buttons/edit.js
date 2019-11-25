import React, {Component} from 'react';
import { Button } from 'react-native-elements';

export default class EditEntry extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    visible: false,
  };

  setVisible = (visible) => {
    this.setState({visible: visible});
  };

  render() {
        return (
            <Button
            title="Delete"
            onPress={() => {
                console.info("Opening the edit modal");
            }}
          />
          );
  }
}