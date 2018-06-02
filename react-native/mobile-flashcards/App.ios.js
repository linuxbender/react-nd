import {Entypo, MaterialIcons} from '@expo/vector-icons'
import {Constants} from 'expo'
import React from 'react'
import {StatusBar, View} from 'react-native'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import CardForm from './components/CardNew'
import DeckDetail from './components/DeckDetail';
import DeckForm from './components/DeckNew'
import DeckList from './components/DeckList'
import Quiz from './components/Quiz'
import {darkBlue, white} from './utils/constants'
import './utils/arrayHelper';

function AppStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createBottomTabNavigator({
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: ({tintColor}) => <Entypo name='archive' size={30} color={tintColor}/>
            }
        },
        NewDeck: {
            screen: DeckForm,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({tintColor}) => <MaterialIcons name='create-new-folder' size={30} color={tintColor}/>
            }
        },
    },
    {
        navigationOptions: {
            header: null,
            title: 'Home',
        },
        tabBarOptions: {
            activeTintColor: darkBlue,
            style: {
                height: 56,
                backgroundColor: white,
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
    DeckSummary: {
        screen: DeckDetail,
        navigationOptions: ({navigation}) => ({
            title: `"${navigation.state.params.deckName}" Deck`,
            headerTintColor: white,
            headerStyle: {
                backgroundColor: darkBlue,
            }
        })
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: ({navigation}) => ({
            title: `"${navigation.state.params.deckName}" Quiz`,
            headerTintColor: white,
            headerStyle: {
                backgroundColor: darkBlue,
            }
        })
    },
    CardForm: {
        screen: CardForm,
        navigationOptions: ({navigation}) => ({
            title: `"${navigation.state.params.deckName}" New Card`,
            headerTintColor: white,
            headerStyle: {
                backgroundColor: darkBlue,
            }
        })
    }
});

export default class App extends React.Component {
    render() {

        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <AppStatusBar backgroundColor={darkBlue} barStyle='light-content'/>
                    <MainNavigator/>
                </View>
            </Provider>
        );
    }
}
