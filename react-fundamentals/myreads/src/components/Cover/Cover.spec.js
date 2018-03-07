import React from 'react';
import Cover from "./Cover";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<Cover width={24} height={200} imageUrl='FooBaa' />);
});
