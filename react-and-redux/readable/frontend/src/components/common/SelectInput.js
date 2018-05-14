import React from 'react';

const SelectInput = ({onChange, defaultOption, value, options}) => {
    console.log(defaultOption);
    return (
        <select name="formCategory"
                value={value}
                onChange={onChange}>
            <option value="">{defaultOption}</option>
            {
                options.map((option) => {
                return <option key={option.name} value={option.name}>{option.name}</option>;
                })
            }
        </select>
    );
};

export default SelectInput;
