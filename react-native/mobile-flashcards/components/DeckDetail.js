import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {appStyles, darkBlue, pink, yellow} from '../utils/constants';
import {T_Deck} from '../utils/typeHelper';
import AppButton from './AppButton';

class DeckDetail extends Component {

    static navigationOptions = {
        title: 'Deck Details'
    };

    componentDidMount() {
    }

    handleCardNew = () => {
        const {deck, navigation} = this.props;
        navigation.navigate('CardNew', {key: deck.key})
    };

    handleQuiz = () => {
        const {deck, navigation} = this.props;

        if (!deck.questions.length) {
            return alert('Please add cards to the deck first!')
        }
        navigation.navigate('Quiz', {key: deck.key})
    };

    handleDeckDelete = () => {
        const {deck, navigation} = this.props;
        navigation.navigate('DeckDelete', {key: deck.key})
    };
    render() {
        const {deck} = this.props;

        return (
            <View style={appStyles.container}>
                <View style={styles.detailContainer}>
                    <Text style={[appStyles.header, styles.deckTitle]}>{deck.title}</Text>
                    <Text style={styles.badge}>{deck.questions.length} cards</Text>
                </View>
                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: yellow}}
                               onPress={this.handleQuiz}>
                        Start Quiz
                    </AppButton>
                </View>
                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: darkBlue}}
                               onPress={this.handleCardNew}>
                        Add Card
                    </AppButton>
                </View>
                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: pink}}
                               onPress={this.handleDeckDelete}>
                        Delete Deck
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

export default connect(mapStateToProps)(DeckDetail);