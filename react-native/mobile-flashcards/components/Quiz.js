import React, {Component} from 'react'
import {Button, Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {clearLocalNotification, setLocalNotification} from '../utils/notification';
import {T_Deck} from '../utils/typeHelper';

class Quiz extends Component {

    static navigationOptions = {
        title: 'Quiz'
    };

    state = {
        quizzIndex: 0,
        quizzScore: 0,
        showAnswer: false,
        resultMessage: '',
        isFinish: false
    };

    nextQuestion = () => {
        if (this.state.quizzIndex < (this.props.questions.length - 1)) {
            this.setState({resultMessage: '', showAnswer: false});
            this.setState((state) => {
                return {quizzIndex: state.quizzIndex + 1}
            })
        } else {
            this.setState({isFinish: true})
        }
    };

    submitAnswer(userAnswer) {
        if (this.props.questions[this.state.quizzIndex].answerType === userAnswer) {
            this.setState((prevState) => {
                return {quizzScore: prevState.quizzScore + 1}
            });
            this.setState({resultMessage: 'Well done ! 👍'})
        } else {
            this.setState({resultMessage: 'Huh, maybe next time ! 👎'})
        }
    }

    restartQuizz = () => {
        this.setState({
            quizzIndex: 0,
            quizzScore: 0,
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

    render() {
        let currentQuestion = this.props.questions[this.state.quizzIndex];

        if (!this.state.isFinish) {
            return (
                <View>
                    <View>
                        <Text style={{marginBottom: 20}}>
                            {(this.state.quizzIndex + 1) + " / " + this.props.questions.length}
                        </Text>
                        <Text>{currentQuestion.question}</Text>

                        {(this.state.showAnswer === false && this.state.resultMessage.length === 0) && (
                            <Button
                                backgroundColor='#444444'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                                title='SHOW ANSWER'
                                onPress={() => this.setState({showAnswer: true})}/>
                        )}
                        {(this.state.showAnswer && this.state.resultMessage.length === 0) && (
                            <Text style={{marginBottom: 20}}>{currentQuestion.answer}</Text>
                        )}

                        {this.state.resultMessage.length === 0 && (
                            <View>
                                <Button
                                    backgroundColor='green'
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                                    title='TRUE'
                                    onPress={() => this.submitAnswer(true)}/>
                                <Button
                                    backgroundColor='red'
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                                    title='FALSE'
                                    onPress={() => this.submitAnswer(false)}/>
                            </View>
                        )}
                        {this.state.resultMessage.length > 0 && (
                            <View>
                                <Text style={{marginBottom: 20}}>{currentQuestion.answer}</Text>
                                <Text style={{marginBottom: 20}}>{this.state.resultMessage}</Text>
                                <Button
                                    backgroundColor='#444444'
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                                    title='NEXT'
                                    onPress={this.nextQuestion}/>
                            </View>
                        )}
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <View
                        title="Results 🏆">
                        <Text style={{marginBottom: 20}}>
                            Your score : {this.state.quizzScore + " / " + this.props.questions.length}
                        </Text>
                        <Button
                            icon={{name: 'replay'}}
                            backgroundColor='#ffe274'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                            title='RESTART QUIZZ'
                            onPress={this.restartQuizz}/>
                        <Button
                            icon={{name: 'arrow-back'}}
                            backgroundColor='#444444'
                            onPress={this.backToDeck}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                            title='BACK TO DECK'/>
                    </View>
                </View>
            )
        }

    }
}

const mapStateToProps = (state, ctx) => {
    const {key} = ctx.navigation.state.params;
    return {
        questions: state.decks.filterByKey(key).firstOrDefault(T_Deck).questions
    }
};

export default connect(mapStateToProps)(Quiz);