import React, {Component} from 'react'
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native'
import {black, lightBlue, pink} from '../utils/constants'
import AppButton from './AppButton'


class Card extends Component {
    state = {
        showQuestion: true,
        position: 0,
    };

    componentDidMount() {
        // watch for screen orientation changes
        Dimensions.addEventListener('change', this.updateDimensions);

        // initialize dimensions
        const window = Dimensions.get('window');
        this.updateDimensions({window})
    }

    componentWillReceiveProps(nextProps) {
        // ensure that new cards always have question showing first
        if (nextProps.position != this.state.position) {
            this.setState({
                showQuestion: true,
                position: nextProps.position,
            })
        }
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.updateDimensions)
    }

    updateDimensions = ({window}) => {
        const {width, height} = window;

        let icWidth, icHeight, icLineHeight, icFontSize,
            widthInterval = (width > 600 ? 120 : 60),
            iteration = 0;

        do {
            icWidth = Math.floor(0.95 * width / widthInterval - iteration) * widthInterval;
            icHeight = Math.round(icWidth * 3 / 5);
            icLineHeight = Math.round(icHeight / 12);
            icFontSize = 0;
            while (icFontSize < 16) { // minimum fontSize
                icFontSize += Math.round(0.85 * icLineHeight)
            }
            iteration++
        } while (1.2 * icHeight > height);

        this.setState({
            icWidth,
            icHeight,
            icLineHeight,
            icFontSize,
        })
    };
    toggleSide = () => {
        const {showQuestion} = this.state;
        this.setState({showQuestion: !showQuestion})
    };

    render() {
        const {
            showQuestion,
            icWidth,
            icHeight,
            icLineHeight,
            icFontSize,
        } = this.state;

        const {
            position,
            length,
            question,
            answer,
        } = this.props;

        const opacity = (showQuestion ? 0.7 : 0.05);
        const cardText = (showQuestion ? question : answer);
        const flipText = (showQuestion ? 'Show Answer' : 'Show Question');

        return (
            <View>
                <View style={[styles.shadow, styles.indexcard, {width: icWidth, height: icHeight}]}>
                    <View style={[styles.indexcardHeader, {height: (2 * icLineHeight), opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>
                    <View style={[styles.indexcardLine, {height: icLineHeight, opacity}]}/>

                    <Text style={styles.progress}>
                        {position + 1}/{length}
                    </Text>

                    <Text style={[styles.header, {top: (2.85 * icLineHeight), fontSize: icFontSize}]}>
                        {cardText}
                    </Text>
                </View>

                <AppButton onPress={this.toggleSide}>
                    {flipText}
                </AppButton>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    indexcard: {
        borderColor: 'rgba(0,0,0, 0.5)',
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        position: 'relative',
        alignSelf: 'center',
    },
    indexcardHeader: {
        borderBottomColor: pink,
        borderBottomWidth: 2,
    },
    indexcardLine: {
        borderBottomColor: lightBlue,
        borderBottomWidth: 1,
    },
    shadow: (Platform.OS === 'ios' ? {
        shadowColor: black,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 5,
    } : {
        elevation: -5,
    }),
    progress: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'transparent',
    },
    header: {
        flex: 1,
        position: 'absolute',
        fontFamily: (Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif'),
        textAlign: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
});

export default Card
