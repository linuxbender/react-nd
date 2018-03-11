import React from 'react';
import BookSelect from "./BookSelect";
import {shallow} from 'enzyme';

it('Component is loaded without crashing', () => {
    const func = (bookId, e) => undefined;
    shallow(<BookSelect options={[{id: 1, value: 'Demo', text: 'demoText'}]} changeHandler={func} bookId='42'/>);
});