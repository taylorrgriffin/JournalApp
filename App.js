import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddEntryModal from './components/modals/addEntryModal';

export default function App() {
  return (
    <GlobalContainer/>
  );
}

class GlobalContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text 
          h1
          style={{alignSelf: 'flex-start'}}>
            Journal
          </Text>
          <Button
            icon={
              <Icon
                name="pencil"
                size={25}
                color="white"
              />
            }
            onPress={() => {this.addEntryModal.setModalVisible(true)}}
            style={{alignSelf: 'flex-end'}}
          />
        </View>
        <AddEntryModal
          ref={addEntryModal => {this.addEntryModal = addEntryModal}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: 'white',
  },
  navbar: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
});
