import React from 'react';
import Image from "./Image";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<Image width='24' height='200' imageUrl='FooBaa' />);
});
