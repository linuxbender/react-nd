import {Entypo} from '@expo/vector-icons'
import {AppLoading} from 'expo'
import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {connect} from 'react-redux'
import {loadDecks} from '../actions'
import {appStyles, black} from '../utils/constants'
import {clearLocalNotification, setLocalNotification} from '../utils/notification'
import {getDecks} from '../utils/storage'

class DeckList extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    state = {
        ready: false,
    };

    componentDidMount() {
        getDecks()
            .then(decks => {
                this.props.dispatch(loadDecks(decks))
            })
            .then(() => this.setState(() => ({ready: true})))
            // reset notification
            .then(clearLocalNotification)
            .then(setLocalNotification)
    }

    render() {
        const {decks, deckList} = this.props;
        const {ready} = this.state;
        if (ready === false) {
            return <AppLoading/>
        }

        return (
            <View style={[appStyles.container, styles.container]}>
                {deckList.length ?
                    deckList.map(deck => (
                        <TouchableOpacity
                            key={deck.title}
                            onPress={() => this.props.navigation.navigate('DeckSummary', {deckName: deck.title})}
                            style={styles.deckItem}>
                            <View style={styles.deckItemView}>
                                <Text style={[appStyles.header, styles.deckItemTitle]}>{deck.title}</Text>
                                <Text style={styles.deckItemCount}>{deck.questions.length} cards</Text>
                            </View>
                            <Entypo name="chevron-thin-right" size={30} color={black} style={styles.deckItemArrow}/>
                        </TouchableOpacity>
                    )) :
                    <Text style={[appStyles.header, {
                        paddingTop: 28,
                        paddingBottom: 28
                    }]}>
                        You have no Decks
                    </Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
        marginRight: 0,
    },
    deckItem: {
        paddingTop: 28,
        paddingBottom: 28,
        flexDirection: 'row',
        borderBottomColor: black,
        borderBottomWidth: 1,
    },
    deckItemView: {
        flex: 1,
    },
    deckItemTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    deckItemCount: {
        textAlign: 'center',
    },
    deckItemArrow: {
        alignSelf: 'center',
        position: 'absolute',
        right: 15,
        width: 30,
    },
});

const mapStateToProps = (decks) => ({
    decks,
    deckList: (typeof decks == 'object' ?
        Object.keys(decks).map(deckName => decks[deckName]) :
        []),
});

export default connect(mapStateToProps)(DeckList)
