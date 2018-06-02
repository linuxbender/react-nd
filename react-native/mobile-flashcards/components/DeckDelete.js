import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {deleteDeck} from '../actions/deckActions';
import {appStyles, darkBlue, pink} from '../utils/constants';
import {T_Deck} from '../utils/typeHelper';
import AppButton from './AppButton';

class DeckDelete extends Component {

    static navigationOptions = {
        title: 'Delete Deck'
    };

    handleDelete = () => {
        const {deck, navigation, onDeleteDeck} = this.props;
        onDeleteDeck(deck.key);
        navigation.navigate('DeckList');
    };

    handleChancel = () => {
        const {deck, navigation} = this.props;
        navigation.navigate('DeckDetail', {key: deck.key})
    };

    render() {
        const {deck} = this.props;

        return (
            <View style={appStyles.container}>
                <View style={styles.detailContainer}>
                    <Text style={[styles.deckTitle]}>Do you really want to delete the deck?</Text>
                    <Text>{''}</Text>
                    <Text style={[appStyles.header, styles.deckTitle]}>{deck.title}</Text>
                </View>
                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: pink}}
                               onPress={this.handleDelete}>
                        Delete Deck
                    </AppButton>
                </View>
                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: darkBlue}}
                               onPress={this.handleChancel}>
                        No, thanks
                    </AppButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        paddingTop: 28,
        paddingBottom: 28
    },
    deckTitle: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center'
    },
    badge: {
        alignSelf: 'center'
    },
});

const mapStateToProps = (state, ctx) => {
    const {key} = ctx.navigation.state.params;
    return {
        deck: state.decks.filterByKey(key).firstOrDefault(T_Deck)
    }
};

const mapDispatchToProps = dispatch => ({
    onDeleteDeck: key => dispatch(deleteDeck(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckDelete);