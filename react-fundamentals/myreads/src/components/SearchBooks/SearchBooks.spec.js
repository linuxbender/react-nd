import React from 'react';
import SearchBooks from "./SearchBooks";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    const func = _ => undefined;
    shallow(<SearchBooks changeHandler={func} />);
});
