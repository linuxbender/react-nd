import {Content, Form,Input, Item, Label} from 'native-base';
import React, {Component} from 'react'

class DeckCreate extends Component {

    render() {
        return (
            <Content padder>
                <Form>
                    <Item>
                        <Label>What is the title of your new deck?</Label>
                        <Input placeholder="deckName"/>
                    </Item>
                    <Item>
                        <Label>Fooo</Label>
                    </Item>
                    <Item><Input placeholder="deckName"/></Item>
                </Form>
            </Content>
        )
    }
}

export default DeckCreate;
