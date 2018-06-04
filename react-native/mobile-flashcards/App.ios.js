import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import {StatusBar, View} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import CardNew from './components/CardNew';
import DeckDelete from './components/DeckDelete';
import DeckDetail from './components/DeckDetail';
import DeckList from './components/DeckList'
import DeckNew from './components/DeckNew'
import Quiz from './components/Quiz';
import configureStore from './store/appStore';
import './utils/arrayHelper';
import {darkBlue, eggShell, orange, white} from './utils/constants';
import {setLocalNotification} from './utils/notification';

const store = configureStore();

// Icon Browser: https://expo.github.io/vector-icons/

const AppStatusBar = ({backgroundColor, ...props}) => {
    return (
        <View style={{paddingTop: Expo.Constants.statusBarHeight, paddingBottom: Expo.Constants.statusBarHeight}}>
            <StatusBar backgroundColor={backgroundColor} {...props} />
        </View>
    )
};

const uiTabs = createBottomTabNavigator(
    {
        DeckList: {
            screen: DeckList,
            path: '/deckList',
            navigationOptions: {
                tabBarLabel: 'My Decks',
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-albums-outline' color={tintColor} size={32}/>,
                header: null,
                headerTransparent: false,
                title: 'My Deck..',
                headerTitle: '42 42'
            }
        },
        DeckNew: {
            screen: DeckNew,
            path: '/newDeck',
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({tintColor}) => <Ionicons name='ios-add-circle-outline' color={tintColor} size={32}/>
            }
        }
    },
    {
        tabBarOptions: {
            showIcon: true,
            activeTintColor: white,
            inactiveTintColor: eggShell,
            style: {
                backgroundColor: darkBlue
            },
            indicatorStyle: {
                backgroundColor: orange
            },
        }
    }
);

const AppScreens = createStackNavigator({
    Home: {
        screen: uiTabs,
        path: '/',
        navigationOptions: {
            header: null,
            headerTransparent: true
        }
    },
    DeckDetail: {
        screen: DeckDetail,
        path: '/deckDetail/:key',
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: darkBlue,
            }
        }
    },
    DeckDelete: {
        screen: DeckDelete,
        path: '/deckDelete/:key',
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: darkBlue,
            }
        }
    },
    CardNew: {
        screen: CardNew,
        path: '/cardNew/:key',
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: darkBlue,
            }
        }
    },
    Quiz: {
        screen: Quiz,
        path: '/quiz/:key',
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: darkBlue,
            }
        }
    }
});

export default class App extends React.Component {

    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1, backgroundColor:white, paddingTop:44 }} >
                    <AppStatusBar backgroundColor={darkBlue}/>
                    <AppScreens/>
                </View>
            </Provider>
        );
    }
};