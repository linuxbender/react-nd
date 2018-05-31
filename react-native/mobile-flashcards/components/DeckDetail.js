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
        // console.log(this.props.navigation);
        console.group(this.props.navigation.state.params.key);
        return (
            <View>
                <Text>Hello : {this.props.navigation.state.params.key}</Text>
            </View>
        )
    }
}

export default withNavigation(DeckDetail);