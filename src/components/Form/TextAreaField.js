import React from 'react'

const TextAreaField = ({
    type         = "",
    id           = "",
    required     = false,
    name         = "",
    value        = "",
    autocomplete = "off",
    handleChange = null
}) => {

    return (
        <textarea
            className    = {type}
            id           = {id}
            required     = {required}
            name         = {name}
            value        = {value}
            onChange     = {handleChange}
            autoComplete = {autocomplete}
        >
        </textarea>
    )
    
}

export default TextAreaField
