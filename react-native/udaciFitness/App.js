import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'
import React from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native'
import {createMaterialTopTabNavigator } from 'react-navigation'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import AddEntry from './components/AddEntry'
import History from './components/History'
import reducer from './reducers'
import {purple, white} from './utils/colors'


function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createMaterialTopTabNavigator({
    History: {
        screen: History,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
        },
    },
    AddEntry: {
        screen: AddEntry,
        navigationOptions: {
            tabBarLabel: 'Add Entry',
            tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});

export default class App extends React.Component {
    store = createStore(reducer);

    render() {
        return (
            <Provider store={this.store}>
                <View style={styles.container}>
                    <UdaciStatusBar backgroundColor={purple} barStyle="light-content"/>
                    <Tabs/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1}
});
