import React, {Component} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {connect} from 'react-redux'
import {createNewDeck} from '../actions/deckActions';
import {appStyles, darkBlue} from '../utils/constants'
import AppButton from './AppButton'

class DeckForm extends Component {
    static navigationOptions = {};

    state = {
        deckName: ''
    };

    handleTextInput = (deckName) => {
        this.setState({deckName})
    };

    handleSubmit = () => {
        const {deckName} = this.state;
        const {decks, navigation, onCreateNewDeck} = this.props;

        if (!deckName.trim() || !deckName.trim().length) {
            return alert('Deck name is required')
        }

        if (deckName.trim().length <= 3) {
            return alert('Your deck name need more the 3 characters')
        }

        const isUnique = decks
            .map(deck => deck.title.toLowerCase())
            .filter(deck => deck === deckName.trim().toLocaleLowerCase())
            .some(title => title.length > 0);

        if (isUnique) {
            this.setState(() => ({deckName: ''}));
            return alert(`Your deck title "${deckName}" is not unique. Please choose an other name`)
        }

        onCreateNewDeck(deckName);

        this.setState(() => ({deckName: ''}), () => navigation.navigate('DeckList'));
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
                    onPress={this.handleSubmit}>
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

const mapStateToProps = state => ({decks: state.decks});

const mapDispatchToProps = dispatch => ({
    onCreateNewDeck: deckName => dispatch(createNewDeck(deckName))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm)