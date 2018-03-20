import React from 'react';

export interface ITitle {
    text: string;
}

const Title = (props: ITitle) => <h2>{props.text}</h2>;

export default Title;