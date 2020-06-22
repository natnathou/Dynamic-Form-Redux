import React from "react"

const labelTag = (label,textLabel, id) => {
    if(label){
        return (
            <label htmlFor = {id}>
                {textLabel}
            </label>
        );
    }
}

const InputTextField = ({
    label        = false,
    textLabel    = "",
    type         = "",
    id           = "",
    required     = false,
    name         = "",
    placeholder  = "",
    value        = "",
    autocomplete = "off",
    handleChange = null
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
                    value        = {value}
                    onChange     = {handleChange}
                    autoComplete = {autocomplete}
                />
            </div>
        )
    }


export default InputTextField
