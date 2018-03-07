import React from 'react';
import Select from "./Select";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    const func = _ => undefined;
    shallow(<Select options={[{id: 1, value:'Demo', text: 'demoText'}]} onChangeHandler={func} />);
});