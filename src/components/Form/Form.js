import React                    from "react"
import {connect}                from "react-redux"
import formField                from "./json/field"
import InputTextField           from "./InputTextField"
import TextAreaField            from "./TextAreaField"
import SelectField              from './SelectField'
import RadioCheckboxField       from "./RadioCheckboxField"
import PasswordField            from "./PasswordField"
import {formModify,radioModify} from "../../actions/actions"
import "./style/Form.css"
   
class Form extends React.Component {

    state = {}

    componentDidMount(){
        this.updateInitialValue(formField)
    }
    
    updateInitialValue = json => json.map( data=>{
        switch(data.type){
            case "text": 
                return this.props.formModify({[data.name]: data.initialValue})
            case "number": 
                return this.props.formModify({[data.name]: data.initialValue})
            case "password": 
                return this.props.formModify({[data.name]: data.initialValue})
            case "radio": 
                return this.props.radioModify({[data.name]: {[data.value]:data.initialChecked}}, data.name,data.value)
            case "checkbox": 
                return this.props.formModify({[data.name]: data.initialChecked})
            case "big_text": 
                return this.props.formModify({[data.name]: data.initialValue})
            case "list": 
                return this.props.formModify({[data.name]: data.initialValue})
            default: 
                return null
        }
    })
    renderInput = json => json.map( (data,index)=>{
        switch(data.type){
            case "text": 
                return (
                    <InputTextField
                        key          = {index}
                        label        = {data.label}
                        textLabel    = {data.textLabel}
                        type         = {data.type}
                        id           = {data.id}
                        required     = {data.required}
                        name         = {data.name}
                        placeholder  = {data.placeholder}
                        value        = {this.props.form[data.name]}
                        handleChange = {this.handleChange}
                        autocomplete = {data.autocomplete}
                    />
                )
            case "number": 
            return (
                <InputTextField
                    key          = {index}
                    label        = {data.label}
                    textLabel    = {data.textLabel}
                    type         = {data.type}
                    id           = {data.id}
                    required     = {data.required}
                    name         = {data.name}
                    placeholder  = {data.placeholder}
                    value        = {this.props.form[data.name]}
                    handleChange = {this.handleChange}
                    autocomplete = {data.autocomplete}
                />
            )
            case "password": 
                return (
                    <PasswordField
                        key          = {index}
                        label        = {data.label}
                        textLabel    = {data.textLabel}
                        type         = {data.type}
                        id           = {data.id}
                        required     = {data.required}
                        name         = {data.name}
                        placeholder  = {data.placeholder}
                        value        = {this.props.form[data.name]}
                        handleChange = {this.handleChange}
                        autocomplete = {data.autocomplete}
                    />
                )
            case "radio": 
            if(this.props.form[data.name]){
                return (
                    <RadioCheckboxField
                        key          = {index}
                        label        = {data.label}
                        textLabel    = {data.textLabel}
                        type         = {data.type}
                        id           = {data.id}
                        required     = {data.required}
                        name         = {data.name}
                        placeholder  = {data.placeholder}
                        value        = {data.value}
                        check        = {this.props.form[data.name][data.value]}
                        handleChange = {this.handleChangeRadio}
                        autocomplete = {data.autocomplete}
                    />
                )
            } else{
                return null
            }
            
            
            case "checkbox": 
            return (
                <RadioCheckboxField
                    key          = {index}
                    label        = {data.label}
                    textLabel    = {data.textLabel}
                    type         = {data.type}
                    id           = {data.id}
                    required     = {data.required}
                    name         = {data.name}
                    placeholder  = {data.placeholder}
                    value        = {data.value}
                    check        = {this.props.form[data.name]}
                    handleChange = {this.handleChangeCheckbox}
                    autocomplete = {data.autocomplete}
                />
            )
            case "big_text": 
                return (
                    <TextAreaField
                    type         = {data.type}
                    key          = {index}
                    id           = {data.id}
                    required     = {data.required}
                    name         = {data.name}
                    value        = {this.props.form[data.name]}
                    handleChange = {this.handleChange}
                    autocomplete = {data.autocomplete}
                    />
                )
            case "list": 
            console.log(this.props.form[data.name])
                return (
                    <SelectField
                    type         = {data.type}
                    key          = {index}
                    label        = {data.label}
                    textLabel    = {data.textLabel}
                    id           = {data.id}
                    name         = {data.name}
                    optionArray  = {data.optionArray}
                    value        = {this.props.form[data.name]}
                    handleChange = {this.handleChange}
                    autocomplete = {data.autocomplete}
                    />
                )
            default: 
                return null
        }
    });

    handleChange = async (event) => {
        this.props.formModify({[event.target.name]: event.target.value})
    }

    handleChangeRadio = async (event) => {
        this.props.radioModify({[event.target.name]: {[event.target.value]:event.target.checked}}, event.target.name,event.target.value)
    }

    handleChangeCheckbox = async (event) => {

        this.props.formModify({[event.target.name]: event.target.checked})
    }

    render(){
        return <div className = "Form">{this.renderInput(formField)}</div>

    }    
    
}
    
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return { form: state.form}
  };
export default connect(
    mapStateToProps, {formModify, radioModify}
)(Form)
