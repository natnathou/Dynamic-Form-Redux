import React from 'react'

const labelTag = (label,textLabel, id) => {
    if(label){
        return (
            <label htmlFor = {id}>
                {textLabel}
            </label>
        )
    }
};

const optonTag = (optionArray) => optionArray.map( (data, index) =>{
    return <option key = {index} value = {data}>{data}</option>
});

const SelectField  = ({
    type         = "",
    label        = false,
    textLabel    = "",
    id           = "",
    name         = "",
    optionArray  = [],
    value        = "",
    autocomplete = "off",
    handleChange = null
}) => {
    return (
        <div className = {type}>
            {labelTag(label,textLabel, id)}
            <select
            id           = {id}
            name         = {name}
            onChange     = {handleChange}
            autoComplete = {autocomplete}
            value        = {value}
            >   
                {optonTag(optionArray)}
            </select>
        </div>
    )
}

export default SelectField
