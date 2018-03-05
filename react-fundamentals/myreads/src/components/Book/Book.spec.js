import React from 'react';
import Book from "./Book";
import { shallow } from 'enzyme';

it('Component is loaded without crashing', () => {
    shallow(<Book width='24' height='200' imageUrl='FooBaa' />);
});
