import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';

class DeckDetail extends Component {

    render() {
        console.log(this.props.navigation.state);
        return (
            <View>
                <Text>Hello : </Text>
            </View>
        )
    }
}

export default withNavigation(DeckDetail);
