import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {restQuiz} from '../actions/quizActions';
import {appStyles, lightBlue} from '../utils/constants';
import {clearLocalNotification, setLocalNotification} from '../utils/notification';
import {T_Deck, T_Quiz} from '../utils/typeHelper';
import AppButton from './AppButton';

class QuizSummary extends Component {

    static navigationOptions = {
        title: 'Quiz Summary'
    };

    handleRestartQuiz = () => {
        const {deck, navigation, restQuiz} = this.props;
        restQuiz();
        clearLocalNotification().then(setLocalNotification);
        navigation.navigate('Quiz', {key: deck.key})
    };

    handleNavigateToDeckDetail = () => {
        const {deck, navigation, restQuiz} = this.props;
        restQuiz();
        clearLocalNotification().then(setLocalNotification);
        navigation.navigate('DeckDetail', {key: deck.key})
    };

    render() {
        const {deck} = this.props;
        return (
            <View style={appStyles.container}>
                <View style={styles.detailContainer}>
                    <Text style={[appStyles.header, styles.deckTitle]}>Your score in this round is:</Text>
                    <Text style={styles.badge}>{this.props.quiz.score} out of {deck.questions.length} are correct.</Text>
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
        deck: state.decks.filterByKey(key).firstOrDefault(T_Deck),
        quiz: state.quiz
    }
};

const mapDispatchToProps = dispatch => ({
    restQuiz: () => dispatch(restQuiz(T_Quiz))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizSummary);