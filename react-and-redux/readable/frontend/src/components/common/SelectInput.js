import React from 'react';

const SelectInput = ({onChange, value, options}) => {

    const changeHandler = e => onChange(e);

    return (
        <select name="formCategory"
                value={value}
                onChange={changeHandler}>
            {
                options.map((option, index) => {
                    return <option key={index} value={option.path}>{option.name}</option>;
                })
            }
        </select>
    );
};

export default SelectInput;
