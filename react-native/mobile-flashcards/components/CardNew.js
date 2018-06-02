import React, {Component} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {updateDeck} from '../actions/deckActions';
import {appStyles, teal} from '../utils/constants'
import {addCardToDeck} from '../utils/storage'
import AppButton from './AppButton'

class CardNew extends Component {
    state = {
        question: '',
        answer: '',
    };

    componentDidMount() {
        const {deckName, deck} = this.props.navigation.state.params;
        this.setState({deck, deckName})
    }

    handleQuestionChange = (question) => {
        this.setState({question})
    };
    handleAnswerChange = (answer) => {
        this.setState({answer})
    };
    save = () => {
        const {deck, deckName, question, answer} = this.state;
        const card = {question, answer};

        let invalidMessage = '';
        if (!question || !question.length) {
            invalidMessage += 'Please enter a question.\n'
        }
        if (!answer || !answer.length) {
            invalidMessage += 'Please enter an answer.'
        }
        // show validation errors
        if (invalidMessage.length) {
            return alert(invalidMessage)
        }

        let updatedDeck = {...deck};
        updatedDeck.questions.push(card);

        // update redux
        this.props.dispatch(
            updateDeck(updatedDeck)
        );

        // update db
        addCardToDeck(deckName, card);

        // reset
        this.setState(() => ({question: '', answer: '', deck: updatedDeck}));

        // navigate home
        this.props.navigation.dispatch(
            NavigationActions.back()
        )

    };

    render() {
        const {deckName, deck} = this.state;
        const questions = ((deck && deck.questions) || []);

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
                    style={[appStyles.padItem, {backgroundColor: teal}]}
                    onPress={this.save}>
                    Add Card to {deckName}
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

export default connect()(CardNew)
