import React, { Component, Fragment } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { requestWithoutBodyAsync } from '../common/request';

function Item({ subject, body }) {
    return (
      <View style={styles.item}>
        <View style={styles.subjectBar}>
            <Text h4>{subject}</Text>
            <Button
            type="clear"
            icon={
                <Icon
                    name="ellipsis-v"
                    size={20}
                    color="black"
                />
            }
            onPress={() => {console.log("Editing the entry")}}
          />
            
        </View>
        <Text>{body}</Text>
      </View>
    );
}

export default class EntryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, data: null }
    }

    componentDidMount() {
        requestWithoutBodyAsync('/entry', 'GET').then(res => this.setState( { loading: false, data: res} ));
    }

    renderEntries = data => {
        return(
            <FlatList
                data={data}
                renderItem={({ item }) => <Item subject={item.subject} body={item.body}/>}
                keyExtractor={item => item._id}
            />
        );
    };

    render() {
        const { loading, data } = this.state;

        return(
            <Fragment>
                {loading ? <Icon name="spinner" size={50} color="black"/> : this.renderEntries(data)}
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      subjectBar: {
        flexDirection:'row',
        flexWrap:'wrap',
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center"
      },
});
