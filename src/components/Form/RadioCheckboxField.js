import React from "react"

const labelTag = (label,textLabel, id) => {
    if(label){
        return (
            <label htmlFor = {id}>
                {textLabel}
            </label>
        )
    }
}

const RadioCheckboxField = ({
    label        = false,
    textLabel    = "",
    type         = "",
    id           = "",
    required     = false,
    name         = "",
    placeholder  = "",
    value        = "",
    check        = false,
    autocomplete = "off",
    handleChange = null,
})=>{
        return (
            <div className = {type}>
                {labelTag(label,textLabel,id)}
                <input
                    type         = {type}
                    id           = {id}
                    required     = {required}
                    name         = {name}
                    placeholder  = {placeholder}
                    checked      = {check}
                    value        = {value}
                    onChange     = {handleChange}
                    autoComplete = {autocomplete}
                />
            </div>
        )
    }


export default RadioCheckboxField
