import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import React, {Component} from 'react'
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {appStyles, black, orange, pink, teal, white} from '../utils/constants'
import AppButton from './AppButton'
import Card from './Card'

function ScoreCard({correct, total, navigation, handleReset, handleGoBack}) {
    const grade = (correct / total) * 100;
    const sentiment = (
        grade < 60 ? 'sad' : (
            grade < 80 ? 'neutral' : (
                grade < 90 ? 'happy' : (
                    'winner'
                ))));
    let sentimentColor, sentimentIcon;

    switch (sentiment) {
        case 'winner':
            sentimentColor = teal;
            sentimentIcon = Platform.OS === 'ios' ?
                <Ionicons name="ios-trophy" size={64} color={sentimentColor}/> :
                <Ionicons name="md-trophy" size={64} color={sentimentColor}/>;
            break;
        case 'happy':
            sentimentColor = teal;
            sentimentIcon = Platform.OS === 'ios' ?
                <Ionicons name="ios-happy-outline" size={64} color={sentimentColor}/> :
                <Ionicons name="md-happy" size={64} color={sentimentColor}/>;
            break;
        case 'neutral':
            sentimentColor = black;
            sentimentIcon = <FontAwesome name="meh-o" size={64} color={sentimentColor}/>;
            break;
        default: // sad
            sentimentColor = pink;
            sentimentIcon = Platform.OS === 'ios' ?
                <Ionicons name="ios-sad-outline" size={64} color={sentimentColor}/> :
                <Ionicons name="md-sad" size={64} color={sentimentColor}/>
    }

    return (
        <ScrollView>
            <View style={appStyles.container}>
                <Text style={[appStyles.header, appStyles.padItem, styles.sentiment]}>
                    {sentimentIcon}
                </Text>

                <Text style={[appStyles.header, appStyles.padItem, styles.scores]}>
                    {grade.toFixed(2)}%
                </Text>

                <Text style={[appStyles.header, appStyles.padItem, styles.scores]}>
                    You got {correct.toFixed(0)} out of {total.toFixed(0)} correct
                </Text>


                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: teal}}
                               onPress={handleGoBack}>
                        Back to Deck
                    </AppButton>
                </View>

                <View style={appStyles.padItem}>
                    <AppButton style={{backgroundColor: orange}}
                               onPress={handleReset}>
                        Restart Quiz
                    </AppButton>
                </View>

            </View>
        </ScrollView>
    )
}


class Quiz extends Component {
    state = {
        currentIndex: 0,
        correct: 0,
    };
    handleGrade = (grade) => {
        const {currentIndex, correct} = this.state;

        this.setState({
            currentIndex: currentIndex + 1,
            correct: correct + grade
        })
    };
    reset = () => {
        this.setState({
            currentIndex: 0,
            correct: 0,
        })
    };
    goBack = () => {
        this.props.navigation.dispatch(
            NavigationActions.back()
        )
    };

    render() {
        const {deckName, deck} = this.props;
        const {currentIndex, correct} = this.state;
        const deckTotal = deck.questions.length;

        if (currentIndex >= deckTotal) {
            return (
                <ScoreCard
                    correct={correct}
                    total={deckTotal}
                    handleReset={this.reset}
                    handleGoBack={this.goBack}
                />
            )
        }

        const currentCard = deck.questions[currentIndex];

        return (
            <ScrollView>
                <View style={appStyles.container}>

                    <View style={appStyles.padItem}>
                        <Card position={currentIndex}
                              length={deckTotal}
                              question={currentCard.question}
                              answer={currentCard.answer}/>
                    </View>

                    <AppButton
                        onPress={() => {
                            this.handleGrade(1)
                        }}
                        style={[appStyles.padItem, {backgroundColor: teal}]}>
                        {Platform.OS === 'ios' ?
                            <Ionicons name="ios-checkmark-circle-outline" size={16} color={white}/> :
                            <Ionicons name="md-checkmark-circle-outline" size={16} color={white}/>
                        }
                        {' Correct!'}
                    </AppButton>

                    <AppButton
                        onPress={() => {
                            this.handleGrade(0)
                        }}
                        style={[appStyles.padItem, {backgroundColor: pink}]}>
                        {Platform.OS === 'ios' ?
                            <Ionicons name="ios-close-circle-outline" size={16} color={white}/> :
                            <MaterialCommunityIcons name="close-circle-outline" size={16} color={white}/>
                        }
                        {' Incorrect!'}
                    </AppButton>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scores: {
        fontSize: 32,
    },
    sentiment: {
        fontSize: 64,
        alignSelf: 'center',
    },
});


const mapStateToProps = (decks, {navigation}) => {
    return {
        decks,
        deckName: navigation.state.params.deckName,
        deck: navigation.state.params.deck,
    }
};

export default connect(mapStateToProps)(Quiz)
