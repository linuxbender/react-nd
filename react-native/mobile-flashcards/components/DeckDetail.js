import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';

class DeckDetail extends Component {

    static navigationOptions = {
        title: 'Deck Details'
    };

    componentDidMount() {
    }

    render() {
        return (
            <View>
                <Text>Hello : {this.props.navigation.state.params.key}</Text>
            </View>
        )
    }
}

export default withNavigation(DeckDetail);