import React from 'react';
import './Button.css';

export interface IButton {
    label: string;
    disabled?: boolean;
}

const Button = ({disabled = false , label }: IButton) => <button disabled={disabled}>{label}</button>;

export default Button;