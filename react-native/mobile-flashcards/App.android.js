import {MaterialIcons} from '@expo/vector-icons'
import React from 'react'
import {StatusBar, View} from 'react-native'
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import DeckDetail from './components/DeckDetail';
import DeckForm from './components/DeckForm'
import DeckList from './components/DeckList'
import reducer from './reducers'
import {darkBlue, eggShell, orange, white} from './utils/constants';

const store = createStore(reducer);

// Icon Browser: https://expo.github.io/vector-icons/

const AppStatusBar = ({backgroundColor, ...props}) => {
    return (
        <View style={{paddingTop: Expo.Constants.statusBarHeight}}>
            <StatusBar barStyle="default" translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
};

const HomeStack = createStackNavigator({
    Home: {
        screen: DeckList,
        path: '/',
        navigationOptions: {
            header: null,
            headerTransparent: true
        }
    },
    DeckDetail: {
        screen: DeckDetail,
        path: '/deckDetail/:id',
        navigationOptions: {
            header: null,
            headerTransparent: true
        }
    }
});

const DeckFormStack = createStackNavigator({
    NewDeck: {
        screen: DeckForm,
        path: '/newDeck',
        navigationOptions: {
            header: null,
            headerTransparent: true
        }
    }
});

const RootNavigation = createMaterialTopTabNavigator(
    {
        DeckList: {
            screen: HomeStack,
            path: '/',
            navigationOptions: {
                tabBarLabel: 'My Decks',
                tabBarIcon: ({tintColor}) => <MaterialIcons name='list' color={tintColor} size={24}/>
            }
        },
        NewDeck: {
            screen: DeckFormStack,
            path: '/newDeck',
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({tintColor}) => <MaterialIcons name='playlist-add' color={tintColor} size={24}/>
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

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <AppStatusBar backgroundColor={darkBlue}/>
                    <RootNavigation/>
                </View>
            </Provider>
        );
    }
};
