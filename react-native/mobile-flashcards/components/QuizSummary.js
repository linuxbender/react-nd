import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {appStyles, lightBlue } from '../utils/constants';
import {T_Deck} from '../utils/typeHelper';
import AppButton from './AppButton';

class QuizSummary extends Component {

    static navigationOptions = {
        title: 'Quiz Summary'
    };

    componentDidMount() {
    }

    handleRestartQuiz = () => {
        const {deck, navigation} = this.props;
        navigation.navigate('Quiz', {key: deck.key})
    };

    handleNavigateToDeckDetail = () => {
        const {deck, navigation} = this.props;
        navigation.navigate('DeckDetail', {key: deck.key})
    };
    render() {
        const {deck} = this.props;
        return (
            <View style={appStyles.container}>
                <View style={styles.detailContainer}>
                    <Text style={[appStyles.header, styles.deckTitle]}>Quiz Summary:</Text>
                    <Text style={styles.badge}>score</Text>
                </View>
                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: lightBlue}}
                               onPress={this.handleRestartQuiz}>
                        Restart Quiz
                    </AppButton>
                </View>
                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: lightBlue}}
                               onPress={this.handleNavigateToDeckDetail}>
                        Back to Deck Detail
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

export default connect(mapStateToProps)(QuizSummary);