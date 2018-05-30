import {Entypo, MaterialIcons} from '@expo/vector-icons'
import {Constants} from 'expo'
import React from 'react'
import {StatusBar, View} from 'react-native'
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import CardForm from './components/CardForm'
import DeckForm from './components/DeckForm'
import DeckList from './components/DeckList'
import DeckSummary from './components/DeckSummary'
import Quiz from './components/Quiz'
import reducer from './reducers'

const store = createStore(reducer);

function AppStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const HomeStack = createStackNavigator({
    Home: DeckList,
    Details: DeckSummary,
    Quiz: Quiz,
    CardForm: CardForm
});
const DeckFormStack = createStackNavigator({
    NewDeck: DeckForm
});

const RootNavigation = createMaterialTopTabNavigator(
    {
        DeckList: {
            screen: HomeStack,
            tabBarLabel: 'New Deck'
        },
        NewDeck: DeckFormStack
    }
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <RootNavigation/>
                </View>
            </Provider>
        );
    }
};
