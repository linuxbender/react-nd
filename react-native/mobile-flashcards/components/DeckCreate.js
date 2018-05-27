import {Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react'

class DeckCreate extends Component {

    render() {
        return (
            <Content padder>
                <Form>
                    <Item>
                        <Label>What is the title of your new deck?</Label>
                        <Input placeholder="Username" />
                    </Item>
                </Form>
            </Content>
        )
    }
}

export default DeckCreate;
