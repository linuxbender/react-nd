import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import History from './components/History'
import reducer from './reducers'

export default class App extends React.Component {
    store = createStore(reducer);

    render() {
        return (
            <Provider store={this.store}>
                <View style={styles.container}>
                    <History/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1}
});
