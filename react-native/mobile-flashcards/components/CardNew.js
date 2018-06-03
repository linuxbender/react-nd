import React, {Component} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {connect} from 'react-redux'
import {createNewCard} from '../actions/cardActions';
import {appStyles, darkBlue} from '../utils/constants'
import {T_Deck, T_DeckAndQuestion} from '../utils/typeHelper';
import AppButton from './AppButton'

class CardNew extends Component {

    static navigationOptions = {
        title: 'New Card'
    };

    state = T_DeckAndQuestion;

    componentDidMount() {
        this.setState(Object.assign({}, this.state, {deck: this.props.deck}));
    }

    handleQuestionChange = (question) => {
        this.setState(Object.assign({}, this.state, {question: question}));
    };
    handleAnswerChange = (answer) => {
        this.setState(Object.assign({}, this.state, {answer: answer}));
    };

    handleSubmit = () => {
        const {question, answer} = this.state;
        let validationMessage = '';
        if (!question || !question.trim().length || question.trim().length <= 3) {
            validationMessage += 'Question is required and need more then 3 characters.\n'
        }
        if (!answer || !answer.trim().length) {
            validationMessage += 'Answer is required.'
        }
        if (validationMessage.length) {
            return alert(validationMessage)
        }

        this.props.onCreateNewCard(Object.assign({}, this.state));
        this.setState(Object.assign({}, this.state, {question: '', answer: ''}));
    };

    render() {
        const {deck} = this.state;

        return (
            <View style={appStyles.container}>
                <Text style={[appStyles.padItem, appStyles.header, styles.header]}>
                    What is the question?
                </Text>

                <TextInput
                    style={[appStyles.padItem, appStyles.input]}
                    value={this.state.question}
                    maxLength={250}
                    onChangeText={this.handleQuestionChange}
                    placeholder='Enter the question text'/>

                <Text style={[appStyles.padItem, appStyles.header, styles.header]}>
                    What is the answer?
                </Text>

                <TextInput
                    style={[appStyles.padItem, appStyles.input]}
                    value={this.state.answer}
                    maxLength={250}
                    onChangeText={this.handleAnswerChange}
                    placeholder='Enter the answer text'/>

                <AppButton
                    style={[appStyles.padItem, {backgroundColor: darkBlue}]}
                    onPress={this.handleSubmit}>
                    Save card for: {deck.title}
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

const mapStateToProps = (state, ctx) => {
    const {key} = ctx.navigation.state.params;
    return {
        deck: state.decks.filterByKey(key).firstOrDefault(T_Deck)
    }
};

const mapDispatchToProps = dispatch => ({
    onCreateNewCard: newCard => dispatch(createNewCard(newCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardNew)