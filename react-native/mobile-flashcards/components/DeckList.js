import {MaterialIcons} from '@expo/vector-icons';
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {loadDecks} from '../actions/deckActions';
import {black, darkBlue, eggShell, lightBlue, orange, white} from '../utils/constants';

class DeckList extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount() {
        this.props.onLoadDecks();
        /*
            clearLocalNotification)
            setLocalNotification)*/
    }

    render() {
        const {decks, ui, onLoadDecks} = this.props;
        return (
            <View style={styles.container}>
                <FlatList data={decks}
                          onRefresh={onLoadDecks}
                          refreshing={ui.isLoading}
                          renderItem={({item}) =>
                              <TouchableOpacity style={styles.listItem}
                                                onPress={() => this.props.navigation.navigate('DeckDetail', {key: item.key})}>
                                  <Text key={item.key} style={styles.title}>{item.title}</Text>
                                  <Text style={styles.badge}>{item.questions.length || 0} cards</Text>
                                  <MaterialIcons name="keyboard-arrow-right" size={32} color={white}/>
                              </TouchableOpacity>
                          }
                          ListEmptyComponent={(
                              <View style={styles.containerNoData}>
                                  <MaterialIcons name="playlist-add" size={128} color={black}/>
                                  <Text style={styles.infoTextNoData}>Your deck list is empty.</Text>
                                  <View style={styles.padding8}>
                                      <TouchableOpacity style={styles.addButton}
                                                        onPress={() => this.props.navigation.navigate('DeckNew')}>
                                          <Text style={styles.whiteButtonText}>Add Deck</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                          )}
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

const mapStateToProps = (state) => ({decks: state.decks, ui: state.ui});

const mapDispatchToProps = dispatch => ({
    onLoadDecks: () => dispatch(loadDecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)