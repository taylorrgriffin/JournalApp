import React, { Component, Fragment } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { requestWithoutBodyAsync } from '../common/request';

function Item({ subject, body, _id, setEditMode }) {
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
            onPress={() => {
                setEditMode(_id, subject, body);
            }}
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

    reloadData() {
        console.info("Reloading data...");
        this.setState({ loading: true, data: null });
        requestWithoutBodyAsync('/entry', 'GET').then(res => this.setState( { loading: false, data: res} ));
    }

    componentDidMount() {
        requestWithoutBodyAsync('/entry', 'GET').then(res => this.setState( { loading: false, data: res} ));
    }

    renderEntries = data => {
        return(
            <FlatList
                data={data}
                renderItem={({ item }) => <Item subject={item.subject} body={item.body} _id={item._id} setEditMode={this.props.setEditMode}/>}
                keyExtractor={item => item._id}
            />
        );
    };

    render() {
        const { loading, data } = this.state;

        return(
            <Fragment>
                {loading ? <Icon name="spinner" size={50} color="black" style={{alignSelf: "center", paddingTop: 30}}/> : this.renderEntries(data)}
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

