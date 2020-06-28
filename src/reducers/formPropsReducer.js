import _ from "lodash"
import {
    FORM_PROPS_INITIALIZE,
    FORM_PROPS_RADIO_INITIALIZE,
    FORM_PROPS_MODIFY,
    FORM_PROPS_RADIO_MODIFY,
    FORM_PROPS_RADIO_MODIFY_PROPERTY
} from "../actions/type"


//form props reducer all input have some ownprops linke touche, error...
export default (state = {}, action) => {
    switch (action.type) {
        case FORM_PROPS_INITIALIZE:
            return {...state, ...action.payload}
        case FORM_PROPS_RADIO_INITIALIZE:
            return {
                ...state,
                [action.payload.propriety]: {...state[action.payload.propriety], ...action.payload.formValue[action.payload.propriety]}
            }
        case FORM_PROPS_MODIFY:
            return {
                ...state,
                [_.keys(action.payload)]: {...state[_.keys(action.payload)], ...action.payload[_.keys(action.payload)]}
            }
        case FORM_PROPS_RADIO_MODIFY:
            let property    = _.keys(action.payload)
            let subProperty = _.keys(action.payload[property])
            let obj          = {...state[property][subProperty], ...action.payload[property][subProperty]}
            let newObj       = {[subProperty]: obj}
            return {...state, [property]: {...state[property], ...newObj}}
        case FORM_PROPS_RADIO_MODIFY_PROPERTY:
            let key      = _.keys(action.payload)
            let objError = action.payload[_.keys(action.payload)]
            return {...state, [key]: {...state[key], ...objError}}
        default:
            return state;
    }
}