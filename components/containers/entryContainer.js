import React, { Component, Fragment } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { requestWithoutBodyAsync } from '../common/request';

function Item({ subject, body }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{subject}</Text>
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
                {loading ? <Text>Classic loading placeholder</Text> : this.renderEntries(data)}
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
});

