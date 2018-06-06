import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {addQuizScore, showAnswer,updateQuizIndex} from '../actions/quizActions';
import {appStyles, deepGreen, lightBlue, pink} from '../utils/constants';
import {T_Deck} from '../utils/typeHelper';
import AppButton from './AppButton';

class Quiz extends Component {

    static navigationOptions = {
        title: 'Quiz'
    };

    showAnswer = () => {
        this.props.showAnswer(true);
    };

    handleEndOfQuizOrContinue() {
        const {questions, navigation} = this.props;
        let {quizIndex} = this.props.quiz;

        this.props.showAnswer(false);

        if (quizIndex + 1 === questions.length) {
            const {key} = navigation.state.params;
            navigation.navigate('QuizSummary', {key: key});
        } else {
            this.props.updateQuizIndex(quizIndex + 1)
        }
    }

    isCorrect = () => {
        let {score} = this.props.quiz;

        this.props.addQuizScore(score + 1);

        this.handleEndOfQuizOrContinue();
    };

    isInCorrect = () => {
        this.handleEndOfQuizOrContinue();
    };

    render() {
        const {showAnswer, quizIndex} = this.props.quiz;
        let currentQuestion = this.props.questions[quizIndex];

        return (
            <View style={appStyles.container}>
                <View>
                    <Text style={{marginBottom: 20}}>
                        {(quizIndex + 1) + " / " + this.props.questions.length}
                    </Text>
                </View>
                <View style={styles.quizContainer}>
                    <Text style={styles.badge}>Question is:</Text>
                    <Text style={[appStyles.header, styles.deckTitle]}>{currentQuestion.question}</Text>
                </View>
                <View style={styles.quizContainer}>
                    <Text style={styles.badge}>Answer is:</Text>
                    <Text style={[appStyles.header, styles.deckTitle]}>
                        {(showAnswer) ? currentQuestion.answer : '...'}
                    </Text>
                </View>
                <View style={appStyles.padItem}>
                    {!showAnswer && <AppButton style={{backgroundColor: lightBlue}}
                                               onPress={this.showAnswer}>
                        Show Answer
                    </AppButton>}
                </View>
                <View style={appStyles.padItem}>
                    {showAnswer && <AppButton style={{backgroundColor: deepGreen}}
                                              onPress={this.isCorrect}>
                        Correct
                    </AppButton>}
                </View>
                <View style={appStyles.padItem}>
                    {showAnswer && <AppButton style={{backgroundColor: pink}}
                                              onPress={this.isInCorrect}>
                        Incorrect
                    </AppButton>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quizContainer: {
        paddingTop: 8,
        paddingBottom: 8
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
        questions: state.decks.filterByKey(key).firstOrDefault(T_Deck).questions,
        quiz: state.quiz
    }
};

const mapDispatchToProps = dispatch => ({
    addQuizScore: (questionScore) => dispatch(addQuizScore(questionScore)),
    showAnswer: (param) => dispatch(showAnswer(param)),
    updateQuizIndex: (param) => dispatch(updateQuizIndex(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);