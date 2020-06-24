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
    FORM_PROPS_RADIO_MODIFY_PROPRIETY,
    DISPLAY_ERROR
} from "./type"

export const formModify = (formValue) => {
    return {type: FORM_MODIFY, payload: formValue}
}

export const radioModify = (formValue, propriety, subPropriety) => {
    return {type: RADIO_MODIFY, payload: {formValue, propriety, subPropriety}}
}

export const formSend = () => async (dispatch, getState) => {
    let {formProps} = getState()
    let toArray     = _.toArray(formProps)
    let err         = false;
    toArray.map(data => {
        if (data.error) {
            err = true
        }
        return null
    })

    dispatch(errorStatue(err))
    if (!err) {
        console.log("Form is valide!")
    } else {

        console.log("Form is invalide!")
    }
    dispatch(
        {type: FORM_SEND}
    )
}

export const formReset = (json) => (dispatch, getState) => {
    dispatch(errorStatue(false))
    json.map(data => {

        switch (data.type) {
            case "text":
                dispatch(formModify({[data.name]: data.initialValue}))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}))
                getState().formValue[data.name] === "" && getState().formProps[data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}))
                return null
            case "number":
                dispatch(formModify({[data.name]: data.initialValue}))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}))
                return null
            case "tel":
                dispatch(formModify({[data.name]: data.initialValue}))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}))
                getState().formValue[data.name] === "" && getState().formProps[data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}))
                return null
            case "password":
                dispatch(formModify({[data.name]: data.initialValue}))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}))
                getState().formValue[data.name] === "" && getState().formProps[data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}))
                return null
            case "radio":
                dispatch(radioModify({[data.name]: {[data.value]: data.initialChecked}}, data.name, data.value))
                dispatch(formPropsModify({
                    [data.name]: {
                        [data.value]: {
                            touch   : false,
                            required: data.required
                        }
                    }
                }, data.name, data.value))
                let err        = true;
                let checkError = () => _.toArray(getState().formValue[data.name]).forEach((data) => {
                    if (data) {

                        err = false
                    }
                })

                checkError()
                err && getState().formProps[data.name][data.value]["required"]
                    ?
                    dispatch(formPropsRadioModifyPropriety({[data.name]: {error: true}}))
                    :
                    dispatch(formPropsRadioModifyPropriety({[data.name]: {error: false}}))
                return null
            case "checkbox":
                dispatch(formModify({[data.name]: data.initialChecked}))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}))
                getState().formValue[data.name] && getState().formProps[data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}))
                return null
            case "big_text":
                dispatch(formModify({[data.name]: data.initialValue}))
                dispatch(formPropsModify({[data.name]: {touch: false, required: data.required}}))
                getState().formValue[data.name] === "" && getState().formProps[data.name]["required"]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}))
                return null
            case "list":
                dispatch(formModify({[data.name]: data.initialValue}))
                dispatch(formPropsModify({
                    [data.name]: {
                        touch      : false,
                        required   : data.required,
                        optionArray: data.optionArray
                    }
                }))
                getState().formValue[data.name] === getState().formProps[data.name]["optionArray"][0]
                    ?
                    dispatch(formPropsModify({[data.name]: {error: true}}))
                    :
                    dispatch(formPropsModify({[data.name]: {error: false}}))
                return null
            default:
                return null
        }
    })

    dispatch(
        {type: FORM_RESET}
    )
}

export const formPropsInitialize = (formProps) => {
    return {type: FORM_PROPS_INITIALIZE, payload: formProps}
}

export const formPropsRadioInitialize = (formValue, propriety, subPropriety) => {
    return {type: FORM_PROPS_RADIO_INITIALIZE, payload: {formValue, propriety, subPropriety}}
}

export const formPropsModify = (formProps) => {
    return {type: FORM_PROPS_MODIFY, payload: formProps}
}

export const formPropsRadioModify          = (formValue) => {
    return {type: FORM_PROPS_RADIO_MODIFY, payload: formValue}
}
export const formPropsRadioModifyPropriety = (formValue) => {
    return {type: FORM_PROPS_RADIO_MODIFY_PROPRIETY, payload: formValue}
}


export const errorStatue = (status) => {
    return {type: DISPLAY_ERROR, payload: status}
}

