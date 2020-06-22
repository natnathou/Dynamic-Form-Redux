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

const PasswordField = ({
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
            <form className = {type}>
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
            </form>
        )
    }


export default PasswordField
