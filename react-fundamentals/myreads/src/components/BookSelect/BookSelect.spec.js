import React from 'react';
import BookSelect from "./BookSelect";
import {shallow} from 'enzyme';

it('Component is loaded without crashing', () => {
    const func = (bookId, e) => undefined;
    const book = {id: '42', shelf:'none'};
    shallow(<BookSelect options={[{id: 1, value: 'Demo', text: 'demoText'}]} changeHandler={func} book={book}/>);
});