import React, {Component} from 'react'
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native'
import {connect} from 'react-redux'
import {createDeck} from '../actions'
import {appStyles, teal} from '../utils/constants'
import {saveDeckTitle} from '../utils/storage'
import AppButton from './AppButton'

class DeckForm extends Component {
    static navigationOptions = {
        hidden: true,
        haeder: null,
        headerStyle : {
            backgroundColor:'#243346'
        },
        headerTintColor:"#fff"
    };

    state = {
        deckName: ''
    };
    handleTextInput = (deckName) => {
        this.setState({deckName})
    };
    save = () => {
        const {deckName} = this.state;
        const {decks, navigation} = this.props;
        const existingDeckNames = Object.keys(decks).map(title => title.toLowerCase());

        if (!deckName || !deckName.length) {
            return alert('Please enter a deck name.')
        }

        if (existingDeckNames.indexOf(deckName.toLowerCase()) !== -1) {
            this.setState(() => ({deckName: ''}));
            return alert(`You already have a "${deckName}" deck. Please choose a new deck name.`)
        }

        // update redux
        this.props.dispatch(
            createDeck(deckName)
        );

        // update db
        saveDeckTitle(deckName)
            .then(() => {
                // navigate to new deck
                navigation.navigate('DeckSummary', {deckName})
            });

        // reset
        this.setState(() => ({deckName: ''}))
    };

    render() {
        return (
            <View style={appStyles.container}>
                <Text style={[appStyles.padItem, appStyles.header, styles.header]}>
                    What will you call your new deck?
                </Text>

                <TextInput
                    style={[appStyles.padItem, appStyles.input]}
                    value={this.state.deckName}
                    maxLength={50}
                    onChangeText={this.handleTextInput}
                    placeholder='New Deck Name'/>

                <AppButton
                    style={[appStyles.padItem, {backgroundColor: teal}]}
                    onPress={this.save}>
                    Create New Deck
                </AppButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 16,
    },
});

const mapStateToProps = (decks) => {
    return {
        decks,
    }
};

export default connect(mapStateToProps)(DeckForm)
