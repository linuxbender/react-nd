import React, {Component} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {connect} from 'react-redux'
import {createNewDeck} from '../actions/deckActions';
import {appStyles, darkBlue} from '../utils/constants'
import AppButton from './AppButton'

class DeckForm extends Component {
    static navigationOptions = {
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
        //this.props.dispatch(
        //    createDeck(deckName)
        //);

        // update db

        this.props.dispatch(createNewDeck(deckName));

        /*saveDeckTitle(deckName)
            .then((data) => {
                console.log("neu erstellt");
                console.log(data);
                getDecks();
                // navigate to new deck
                // navigation.navigate('DeckList')
            });*/

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
                    style={[appStyles.padItem, {backgroundColor: darkBlue}]}
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
