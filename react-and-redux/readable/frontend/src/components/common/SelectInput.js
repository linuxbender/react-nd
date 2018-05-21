import React from 'react';

const SelectInput = ({id, required, onChange, value, options}) => {

    const changeHandler = e => onChange(e);

    return (
        <select id={id}
                required={required}
                name="category"
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
