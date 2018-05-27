import {AppLoading, Font} from 'expo';
import {Container, Tab, Tabs} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import About from './components/About';
import DeckCreate from './components/DeckCreate';
import DeckList from './components/DeckList';
import {darkBlue} from './utils/constants';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({loading: false});
    }


    render() {
        if (this.state.loading) {
            return (
                <Container>
                    <AppLoading/>
                </Container>
            );
        }
        return (
            <Container>
                <Tabs>
                    <Tab heading="Decks">
                        <DeckList/>
                    </Tab>
                    <Tab heading="New Deck">
                        <DeckCreate/>
                    </Tab>
                    <Tab heading="About">
                        <About/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: darkBlue
    }
});
