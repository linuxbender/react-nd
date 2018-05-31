import {AppLoading} from 'expo';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {appStyles, orange, teal} from '../utils/constants';
import AppButton from './AppButton';

class DeckSummary extends Component {
    handleAddCard = () => {
        const {deckName, decks, navigation} = this.props;
        const deck = decks[deckName];
        navigation.navigate('CardForm', {deckName, deck})
    };
    handleQuiz = () => {
        const {deckName, decks, navigation} = this.props;
        const deck = decks[deckName];

        if (!deck.questions.length) {
            return alert('Please add cards to the deck first!')
        }

        navigation.navigate('Quiz', {deckName, deck})
    };

    render() {
        const {deckName, decks} = this.props;
        const deck = decks[deckName];

        if (!deck) {
            return <AppLoading/>
        }

        return (
            <View style={appStyles.container}>
                <View style={styles.deckSummary}>
                    <Text style={[appStyles.header, styles.deckTitle]}>{deck.title}</Text>
                    <Text style={styles.deckItemCount}>{deck.questions.length} cards</Text>
                </View>


                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: teal}}
                               onPress={this.handleAddCard}>
                        Add Card
                    </AppButton>
                </View>

                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: orange}}
                               onPress={this.handleQuiz}>
                        Start Quiz
                    </AppButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckSummary: {
        paddingTop: 28,
        paddingBottom: 28,
    },
    deckTitle: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
    },
    deckItemCount: {
        textAlign: 'center',
    },
});

const mapStateToProps = (decks, {navigation}) => {
    const {deckName} = navigation.state.params;

    return {
        decks,
        deckName,
    }
};

export default connect(mapStateToProps)(DeckSummary)
