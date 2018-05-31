import {MaterialIcons} from '@expo/vector-icons';
import {AppLoading} from 'expo';
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {loadDecks} from '../actions';
import {black, darkBlue, eggShell, lightBlue, orange, white} from '../utils/constants';
import {clearLocalNotification, setLocalNotification} from '../utils/notification';
import {getDecks} from '../utils/storage';

class DeckList extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    state = {
        isReady: false,
    };

    componentDidMount() {
        getDecks().then(decks => {
                this.props.dispatch(loadDecks(decks))
            })
            .then(() => this.setState(() => ({isReady: true})))
            .then(clearLocalNotification)
            .then(setLocalNotification)
    }

    render() {
        const {deckList} = this.props;
        console.group(this.props.decks);
        const {isReady} = this.state;
        if (!isReady) {
            return <AppLoading/>
        }

        return (
            <View style={styles.container}>
                {deckList.length === 0 &&
                <View style={styles.containerNoData}>
                    <MaterialIcons name="playlist-add" size={128} color={black}/>
                    <Text style={styles.infoTextNoData}>Your deck list is empty :-(</Text>
                    <View style={styles.padding8}>
                        <TouchableOpacity style={styles.addButton}
                                          onPress={() => this.props.navigation.navigate('NewDeck')}>
                            <Text style={styles.whiteButtonText}>Add Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
                <FlatList data={deckList}
                          renderItem={({item}) =>
                              <TouchableOpacity style={styles.listItem}
                                                onPress={() => this.props.navigation.navigate('DeckDetails', {key: item.title})}>
                                  <Text key={item.key} style={styles.title}>{item.title}</Text>
                                  <Text style={styles.badge}>{item.questions.length || 0} cards</Text>
                                  <MaterialIcons name="keyboard-arrow-right" size={32} color={white}/>
                              </TouchableOpacity>
                          }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    padding8: {
        padding: 8
    },
    container: {
        flex: 1
    },
    infoTextNoData: {
        padding: 8,
        fontWeight: 'bold',
        fontSize: 24
    },
    containerNoData: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 8
    },
    addButton: {
        alignSelf: 'center',
        borderRadius: 8,
        padding: 20,
        backgroundColor: darkBlue
    },
    whiteButtonText: {
        color: white,
        fontWeight: 'bold'
    },
    listItem: {
        padding: 16,
        backgroundColor: lightBlue,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        borderBottomColor: eggShell,
        borderBottomWidth: 1,
    },
    title: {
        color: white,
        fontSize: 18,
        flexGrow: 2,
        fontWeight: '600',
    },
    badge: {
        padding: 8,
        fontWeight: 'bold',
        backgroundColor: orange,
        borderRadius: 25,
        color: white
    }
});

const mapStateToProps = (decks) => ({
    decks,
    deckList: (typeof decks == 'object' ?
        Object.keys(decks).map(deckName => decks[deckName]) :
        []),
});

export default connect(mapStateToProps)(DeckList)