import _ from "lodash"
import {
    FORM_MODIFY,
    RADIO_MODIFY,
    FORM_SEND,
    FORM_RESET,
    FORM_PROPS_INITIALIZE,
    FORM_PROPS_RADIO_INITIALIZE,
    FORM_PROPS_MODIFY,
    FORM_PROPS_RADIO_MODIFY,
    FORM_PROPS_RADIO_MODIFY_PROPERTY,
    DISPLAY_ERROR
} from "./type"

//to update formValue Reducer
export const formModify = (formValue, formName) => {
    return {type: FORM_MODIFY, payload: formValue, formName: formName}
}

//to update formValue Reducer if the input is a radio
export const radioModify = (formValue, propriety, subPropriety, formName) => {
    return {type: RADIO_MODIFY, payload: {formValue, propriety, subPropriety}, formName: formName}
}

//check if their is an error befor to send our form to the server
export const formSend = (nameForm) => async (dispatch, getState) => {
    let toArray = _.toArray(getState()["formProps"][nameForm])
    let err     = false;
    toArray.map(data => {
        if (data.error) {
            err = true
        }
        return null
    })

    
    dispatch(errorStatue(err, nameForm))
    if (!err) {
        console.log("Form is valide!")
        console.log(getState()["formValue"][nameForm])

    } else {

        console.log("Form is invalide!")
    }
    dispatch(
        {type: FORM_SEND}
    )
}

export const formReset = (json, nameForm) => (dispatch, getState) => {

    dispatch(errorStatue(false, nameForm))
    json.map(data => {
        switch (data.type) {
            case "file":
                dispatch(formModify({[data.name]: [""]}, nameForm))
                dispatch(formPropsInitialize({
                    [data.name]: {
                        touch            : false,
                        required         : data.required,
                        display          : data.display,
                        extensionAccepted: data.extensionAccepted,
                        filesContent     : []
                    }
                }, nameForm))
                getState()["formValue"][nameForm][data.name][0] === "" && getState()["formProps"][nameForm][data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            case "text":
                dispatch(formModify({[data.name]: data.initialValue}, nameForm))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}, nameForm))
                getState()["formValue"][nameForm][data.name] === "" && getState()["formProps"][nameForm][data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            case "email":
                dispatch(formModify({[data.name]: data.initialValue}, nameForm))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}, nameForm))
                getState()["formValue"][nameForm][data.name] === "" && getState()["formProps"][nameForm][data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            case "number":
                dispatch(formModify({[data.name]: data.initialValue}, nameForm))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}, nameForm))
                getState()["formValue"][nameForm][data.name] === "" && getState()["formProps"][nameForm][data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            case "tel":
                dispatch(formModify({[data.name]: data.initialValue}, nameForm))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}, nameForm))
                getState()["formValue"][nameForm][data.name] === "" && getState()["formProps"][nameForm][data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            case "password":
                dispatch(formModify({[data.name]: data.initialValue}, nameForm))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}, nameForm))
                getState()["formValue"][nameForm][data.name] === "" && getState()["formProps"][nameForm][data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            case "radio":
                dispatch(radioModify({[data.name]: {[data.value]: data.initialChecked}}, data.name, data.value, nameForm))
                dispatch(formPropsModify({
                    [data.name]: {
                        [data.value]: {
                            touch   : false,
                            required: data.required
                        }
                    }
                }, nameForm))
                let err        = true;
                let checkError = () => _.toArray(getState()["formValue"][nameForm][data.name]).forEach((data) => {
                    if (data) {

                        err = false
                    }
                })

                checkError()
                err && getState()["formProps"][nameForm][data.name][data.value]["required"]
                    ?
                    dispatch(formPropsRadioModifyProperty({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsRadioModifyProperty({[data.name]: {error: false}}, nameForm))
                return null
            case "checkbox":
                dispatch(formModify({[data.name]: data.initialChecked}, nameForm))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}, nameForm))
                getState()["formValue"][nameForm][data.name] && getState()["formProps"][nameForm][data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            case "big_text":
                dispatch(formModify({[data.name]: data.initialValue}, nameForm))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}, nameForm))
                getState()["formValue"][nameForm][data.name] === "" && getState()["formProps"][nameForm][data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            case "list":
                dispatch(formModify({[data.name]: data.initialValue}, nameForm))
                dispatch(formPropsModify({

                    [data.name]: {
                        touch      : false,
                        required   : data.required,
                        optionArray: data.optionArray
                    }

                }, nameForm))
                getState()["formValue"][nameForm][data.name] === getState()["formProps"][nameForm][data.name]["optionArray"][0]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}, nameForm))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}, nameForm))
                return null
            default:
                return null
        }
    })

    dispatch(
        {type: FORM_RESET}
    )
}


//to reset our form,  form value Reducer and, form props Reducer


//to initialize form props reducer
export const formPropsInitialize = (formProps, formName) => {
    return {type: FORM_PROPS_INITIALIZE, payload: formProps, formName: formName}
}

//to initialize form props reducer (if it's a radio input)
export const formPropsRadioInitialize = (formValue, propriety, subPropriety, formName) => {
    return {type: FORM_PROPS_RADIO_INITIALIZE, payload: {formValue, propriety, subPropriety}, formName: formName}
}

//to update form props reducer
export const formPropsModify = (formProps, formName) => {
    return {type: FORM_PROPS_MODIFY, payload: formProps, formName}
}

//to update sub property in form props reducer (if it's a radio input) (two sub level)
export const formPropsRadioModify = (formValue, formName) => {
    return {type: FORM_PROPS_RADIO_MODIFY, payload: formValue, formName: formName}
}

//to update property in form props reducer (if it's a radio input) (one sub level)
export const formPropsRadioModifyProperty = (formValue, formName) => {
    return {type: FORM_PROPS_RADIO_MODIFY_PROPERTY, payload: formValue, formName: formName}
}

//to update display error status
export const errorStatue = (status, formName) => {
    return {type: DISPLAY_ERROR, payload: status, formName: formName}
}