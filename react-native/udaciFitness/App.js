import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'
import React from 'react'
import {Platform, StatusBar, View} from 'react-native'
// components
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import AddEntry from './components/AddEntry'
import EntryDetail from './components/EntryDetail'
import History from './components/History'
import Live from './components/Live'
import reducer from './reducers'
// utils
import {purple, white} from './utils/colors'
import {setLocalNotification} from './utils/helpers'


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
            }
        },
        AddEntry: {
            screen: AddEntry,
            navigationOptions: {
                tabBarLabel: 'Add Entry',
                tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
            }
        },
        Live: {
            screen: Live,
            navigationOptions: {
                tabBarLabel: 'Live',
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-speedometer' size={30} color={tintColor}/>
            }
        },
    },
    {
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

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
    },
    EntryDetail: {
        screen: EntryDetail,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
});

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}}>
                    <UdaciStatusBar backgroundColor={purple} barStyle='light-content'/>
                    <MainNavigator/>
                </View>
            </Provider>
        )
    }
}