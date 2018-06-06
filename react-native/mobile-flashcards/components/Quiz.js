import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {appStyles, deepGreen, lightBlue, pink} from '../utils/constants';
import {clearLocalNotification, setLocalNotification} from '../utils/notification';
import {T_Deck, T_Quiz} from '../utils/typeHelper';
import AppButton from './AppButton';

class Quiz extends Component {

    static navigationOptions = {
        title: 'Quiz'
    };

    state = {...T_Quiz};

    submitAnswer = (userAnswer) => {
        if (this.props.questions[this.state.quizIndex].answerType === userAnswer) {
            this.setState((prevState) => {
                return {score: prevState.score + 1}
            });
            this.setState({resultMessage: 'Well done ! 👍'})
        } else {
            this.setState({resultMessage: 'Huh, maybe next time ! 👎'})
        }
    };

    restartQuiz = () => {
        this.setState({
            quizIndex: 0,
            score: 0,
            resultMessage: '',
            isFinish: false
        });
        clearLocalNotification()
            .then(setLocalNotification)
    };

    backToDeck = () => {
        const backAction = NavigationActions.back();
        this.props.navigation.dispatch(backAction);
        clearLocalNotification()
            .then(setLocalNotification)
    };

    showAnswer = () => {
        this.setState({...this.state, showAnswer: true})
    };

    isCorrect = () => {
        const {questions, navigation} = this.props;

        let score = this.state.score + 1;

        let quizIndex = this.state.quizIndex + 1;

        if (quizIndex === questions.length) {
            //todo
            navigation.navigate('QuizSummary', {})
        }

        this.setState({...this.state, showAnswer: false, score: score, quizIndex: quizIndex})

    };

    isInCorrect = () => {

        const {questions, navigation} = this.props;

        let score = this.state.score - 1;

        let quizIndex = this.state.quizIndex + 1;

        if (quizIndex === questions.length) {
            //todo
            navigation.navigate('DeckList')
        }

        this.setState({...this.state, showAnswer: false, score: score, quizIndex: quizIndex})

    };

    render() {
        let currentQuestion = this.props.questions[this.state.quizIndex];
        const {showAnswer} = this.state;
        
        return (
            <View style={appStyles.container}>
                <View>
                    <Text style={{marginBottom: 20}}>
                        {(this.state.quizIndex + 1) + " / " + this.props.questions.length}
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
        questions: state.decks.filterByKey(key).firstOrDefault(T_Deck).questions
    }
};

export default connect(mapStateToProps)(Quiz);