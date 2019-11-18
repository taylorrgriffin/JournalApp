import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddEntryModal from './components/modals/addEntryModal';
import EditEntryModal from './components/modals/editEntryModal';
import EntryContainer from './components/containers/entryContainer';

export default function App() {
  return (
    <GlobalContainer/>
  );
}

class GlobalContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.info("just updated.");
  }

  updateEntries = () => {
    console.info("Refreshing data...");
    this.forceUpdate();
  }

  setEditMode = (_id, subject, body) => {
    console.info("Enabling edit mode for " + _id);
    this.editEntryModal.state.subject= subject;
    this.editEntryModal.state.body = body;
    this.editEntryModal.state._id = _id;
    this.editEntryModal.setModalVisible(true);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text h1>
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
          />
        </View>
        <AddEntryModal
          ref={addEntryModal => {this.addEntryModal = addEntryModal}}
          dataRefresh={this.updateEntries}
        />
        <EditEntryModal
          ref={editEntryModal => {this.editEntryModal = editEntryModal}}
        />
        <EntryContainer
          ref={entryContainer => {this.entryContainer = entryContainer}}
          setEditMode={this.setEditMode}
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
    flexWrap:'wrap',
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});
