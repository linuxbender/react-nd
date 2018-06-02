import {MaterialIcons} from '@expo/vector-icons'
import React from 'react'
import {StatusBar, View} from 'react-native'
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import CardNew from './components/CardNew';
import DeckDelete from './components/DeckDelete';
import DeckDetail from './components/DeckDetail';
import DeckNew from './components/DeckNew'
import DeckList from './components/DeckList'
import configureStore from './store/appStore';
import {darkBlue, eggShell, orange, white} from './utils/constants';
import './utils/arrayHelper';

const store = configureStore();

// Icon Browser: https://expo.github.io/vector-icons/

const AppStatusBar = ({backgroundColor, ...props}) => {
    return (
        <View style={{paddingTop: Expo.Constants.statusBarHeight}}>
            <StatusBar barStyle="default" translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
};

const uiTabs = createMaterialTopTabNavigator(
    {
        DeckList: {
            screen: DeckList,
            path: '/deckList',
            navigationOptions: {
                tabBarLabel: 'My Decks',
                tabBarIcon: ({tintColor}) => <MaterialIcons name='list' color={tintColor} size={24}/>,
                header: null,
                headerTransparent: true
            }
        },
        DeckNew: {
            screen: DeckNew,
            path: '/newDeck',
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({tintColor}) => <MaterialIcons name='playlist-add' color={tintColor} size={24}/>,
                header: null,
                headerTransparent: true
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
    }
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <AppStatusBar backgroundColor={darkBlue}/>
                    <AppScreens/>
                </View>
            </Provider>
        );
    }
};