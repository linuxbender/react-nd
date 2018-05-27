import {Body, Content, List, ListItem, Right, Text} from 'native-base';
import React, {Component} from 'react'

class DeckList extends Component {

    render() {
        return (
            <Content padder>
                <List >
                    <ListItem>
                        <Body><Text>udacicards</Text></Body>
                        <Right><Text>6 cards</Text></Right>
                    </ListItem>
                    <ListItem>
                        <Body><Text>react & redux</Text></Body>
                        <Right><Text>6 cards</Text></Right>
                    </ListItem>
                    <ListItem>
                        <Body><Text>react native</Text></Body>
                        <Right><Text>6 cards</Text></Right>
                    </ListItem>
                </List>
            </Content>
        )
    }
}

export default DeckList;
