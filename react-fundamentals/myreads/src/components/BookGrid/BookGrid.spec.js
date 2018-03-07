import React from 'react';
import BookGrid from "./BookGrid";
import { shallow, mount } from 'enzyme';

const books = [{id: 1, name: "John"}];

it('Component is loaded without crashing', () => {
    shallow(<BookGrid books={books} />);
});

it('When BoogGrid component receve 1 book then shoud display one li entry  ', () => {
    const testee = mount(<BookGrid books={books} />);

    expect(testee.props().books[0].id).toBe(1);
});
