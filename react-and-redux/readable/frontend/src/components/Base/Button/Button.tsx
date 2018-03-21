import React from 'react';
import './Button.css';

export interface IButton {
    label: string;
    disabled: boolean;
}

const Button = (props: IButton) => <button disabled={props.disabled}>{props.label}</button>;

export default Button;