import React from 'react';

export interface IFormInput {
    label: string;
    enabled: boolean;
    isRequired: boolean;
    eventHandler: () => void;
}

const FormInput = (props: IFormInput) => {
    const foo: string = "2";

    return (
        <div>
            <label>{props.label}</label>
            <span>*</span>
            <input onChange={props.eventHandler} />
        </div>
    )
};

export default FormInput;